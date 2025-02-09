import React, { useState, useEffect } from "react";
import styles from "./ResultPage.module.css";
import logo from "../assets/LOGO for WibeCheck.jpg";
import { useNavigate, useLocation } from "react-router-dom";

const CLIENT_ID = "43360e6c088849989509efdad67f7f2e";
const CLIENT_SECRET = "fb1c2fc04ef14d4cb72b64ac4bba2169";
const REDIRECT_URI = "http://localhost:5173/result";
const SCOPES = encodeURIComponent("user-read-private user-read-email playlist-read-private");

const getAccessToken = async () => {
    try {
        const response = await fetch("https://accounts.spotify.com/api/token", {
            method: "POST",
            headers: {
                "Content-Type": "application/x-www-form-urlencoded",
                Authorization: "Basic " + btoa(`${CLIENT_ID}:${CLIENT_SECRET}`),
            },
            body: "grant_type=client_credentials",
        });

        const data = await response.json();
        if (!response.ok) throw new Error(`Error ${response.status}: ${data.error_description}`);
        return data.access_token;
    } catch (error) {
        console.error("Failed to get access token:", error);
        return null;
    }
};

const fetchSongsForMood = async (mood) => {
    const token = await getAccessToken();
    if (!token) return [];

    try {
        // Search for a playlist related to the mood
        const searchResponse = await fetch(
            `https://api.spotify.com/v1/search?q=${encodeURIComponent(mood)}&type=playlist&limit=1`,
            {
                headers: { Authorization: `Bearer ${token}` },
            }
        );

        const searchData = await searchResponse.json();
        if (!searchData.playlists || searchData.playlists.items.length === 0) {
            console.error("No playlist found for mood:", mood);
            return [];
        }

        const playlistId = searchData.playlists.items[0].id;

        // Get songs from the selected playlist
        const tracksResponse = await fetch(
            `https://api.spotify.com/v1/playlists/${playlistId}/tracks?limit=12`,
            {
                headers: { Authorization: `Bearer ${token}` },
            }
        );

        const tracksData = await tracksResponse.json();
        if (!tracksData.items) {
            console.error("No tracks found in playlist:", playlistId);
            return [];
        }

        return tracksData.items
            .filter((item) => item.track) // Ensure we only process valid tracks
            .slice(0, 12) // Limit to 12 songs
            .map((item) => ({
                id: item.track.id,
                name: item.track.name,
                image: item.track.album.images[0]?.url || logo, // Use album cover or fallback to default logo
            }));
    } catch (error) {
        console.error("Error fetching songs:", error);
        return [];
    }
};

const ResultPage = () => {
    const navigate = useNavigate();
    const location = useLocation();
    const { userMood } = location.state || { userMood: "Neutral" };

    const moodColors = {
        Happy: { text: "#FFD700", background: "#FFD700" },
        Sad: { text: "#4682B4", background: "#4682B4" },
        Angry: { text: "#FF4500", background: "#FF4500" },
        Neutral: { text: "#008000", background: "#008000" },
        Sleepy: { text: "#800080", background: "#800080" },
    };

    const { text, background } = moodColors[userMood] || moodColors.Neutral;
    const [results, setResults] = useState([]);

    useEffect(() => {
        const loadSongs = async () => {
            const songs = await fetchSongsForMood(userMood);
            setResults(songs);
        };
        loadSongs();
    }, [userMood]);

    const shuffleSongs = () => {
        setResults((prev) => [...prev.sort(() => Math.random() - 0.5)]);
    };

    return (
        <div className={styles.page} style={{ backgroundColor: background }}>
            <div className={styles.yourMood}>
                <div className={styles.moodHeader}>
                    <h2 className={styles.title}>Your Mood:</h2>
                    <p className={styles.moodText} style={{ color: text }}>{userMood}</p>
                </div>

                <p className={styles.paragraph}>Here are some songs you might enjoy.</p>

                <div className={styles.resultsGrid}>
                    {results.map((item) => (
                        <div key={item.id} className={styles.gridItem}>
                            <img src={item.image} alt={item.name} className={styles.songImage} />
                            <p className={styles.songLabel}>{item.name}</p>
                        </div>
                    ))}
                </div>

                <div className={styles.manyButtons}>
                    <button className={styles.create} onClick={async () => {
                        const authUrl = `https://accounts.spotify.com/authorize?client_id=${CLIENT_ID}&response_type=code&redirect_uri=${encodeURIComponent(REDIRECT_URI)}&scope=${SCOPES}`;
                        window.location.href = authUrl;
                    }}>
                        Create Playlist
                    </button>
                    <button className={styles.shuffle} onClick={shuffleSongs}>Shuffle</button>
                    <button className={styles.again} onClick={() => navigate('/activity')}>Again</button>
                </div>
            </div>
        </div>
    );
};

export default ResultPage;
