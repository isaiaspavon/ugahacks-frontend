import React, { useState } from 'react';
import styles from './ResultPage.module.css';
import logo from '../assets/LOGO for WibeCheck.jpg';
import { useNavigate } from 'react-router-dom';

const ResultPage = () => {
    const navigate = useNavigate();
    const userMood = "Sleepy"; // Replace with actual database value

    // Define mood-based colors
    const moodColors = {
        Happy: { text: "#FFD700", background: "#FFD700" },
        Sad: { text: "#4682B4", background: "#4682B4" },
        Angry: { text: "#FF4500", background: "#FF4500" },
        Neutral: { text: "#008000", background: "#008000" },
        Sleepy: { text: "#800080", background: "#800080" },
    };

    // Get colors or default to Neutral
    const { text, background } = moodColors[userMood] || moodColors.Neutral;

    // Initial song list
    const initialResults = [
        { id: 1, name: "Song 1", image: "https://via.placeholder.com/150" },
        { id: 2, name: "Song 2", image: "https://via.placeholder.com/150" },
        { id: 3, name: "Song 3", image: "https://via.placeholder.com/150" },
        { id: 4, name: "Song 4", image: "https://via.placeholder.com/150" },
        { id: 5, name: "Song 5", image: "https://via.placeholder.com/150" },
        { id: 6, name: "Song 6", image: "https://via.placeholder.com/150" },
        { id: 7, name: "Song 7", image: "https://via.placeholder.com/150" },
        { id: 8, name: "Song 8", image: "https://via.placeholder.com/150" },
        { id: 9, name: "Song 9", image: "https://via.placeholder.com/150" },
        { id: 10, name: "Song 10", image: "https://via.placeholder.com/150" },
        { id: 11, name: "Song 11", image: "https://via.placeholder.com/150" },
        { id: 12, name: "Song 12", image: "https://via.placeholder.com/150" },
    ];

    // State to manage the shuffled song list
    const [results, setResults] = useState(initialResults);

    // Shuffle function using Fisher-Yates algorithm
    const shuffleSongs = () => {
        let shuffled = [...results];
        for (let i = shuffled.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
        }
        setResults(shuffled);
    };

    return (
        <div className={styles.page} style={{ backgroundColor: background }}>
            <div className={styles.yourMood}>
                {/* Mood Header with Dynamic Text Color */}
                <div className={styles.moodHeader}>
                    <h2 className={styles.title}>Your Mood:</h2>
                    <p className={styles.moodText} style={{ color: text }}>{userMood}</p>
                </div>

                <p className={styles.paragraph}>Here are some songs you might enjoy.</p>

                <div className={styles.resultsGrid}>
                    {results.map((item) => (
                        <div key={item.id} className={styles.gridItem}>
                            <img src={logo} alt={item.name} className={styles.songImage} />
                            <p className={styles.songLabel}>{item.name}</p>
                        </div>
                    ))}
                </div>

                <div className={styles.manyButtons}>
                    <button className={styles.create} onClick={() => navigate('/')}>Create Playlist</button>
                    <button className={styles.shuffle} onClick={shuffleSongs}>Shuffle</button>
                    <button className={styles.again} onClick={() => navigate('/activity')}>Again</button>
                </div>
            </div>
        </div>
    );
};

export default ResultPage;
