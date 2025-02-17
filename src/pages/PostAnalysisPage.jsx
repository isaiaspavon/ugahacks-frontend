import { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import styles from "./PostAnalysisPage.module.css";
import spotifyLogo from "../assets/spotify-logo.jpg";

function PostAnalysisPage() {
    const location = useLocation();
    const navigate = useNavigate();
    const [activeBar, setActiveBar] = useState(0);
    const [isProcessing, setIsProcessing] = useState(true);
    const barHeights = [10, 30, 15, 40, 25, 35, 12, 45, 20, 50, 28, 37, 14, 48, 22, 42, 18, 38, 26, 46];
    
    useEffect(() => {
        const interval = setInterval(() => {
            setActiveBar((prev) => (prev + 1) % barHeights.length);
        }, 200);

        return () => clearInterval(interval);
    }, []);

    useEffect(() => {
        const recognizeFace = async () => {
            const imageFile = location.state?.imageFile;
            if (!imageFile) {
                alert("No image found. Redirecting...");
                navigate("/");
                return;
            }

            setIsProcessing(true);
            const formData = new FormData();
            formData.append("photo", imageFile);

            try {
                const response = await fetch("https://api.luxand.cloud/photo/emotions", {
                    method: "POST",
                    headers: { token: "fe98cb4a24da40a3b701c945bb8b91d2" },
                    body: formData,
                });

                if (!response.ok) {
                    throw new Error(`API error: ${response.status}`);
                }

                const data = await response.json();
                console.log("API Response:", data);

                if (!data.faces || data.faces.length === 0) {
                    console.log("No faces detected, setting mood to Neutral.");
                    navigate("/result", { state: { userMood: "Neutral", imageFile, apiData: data } });
                    return;
                }

                const detectedEmotion = data.faces[0].dominant_emotion.toLowerCase();
                console.log("Detected Emotion:", detectedEmotion);

                const emotionToMood = {
                    happy: "Happy",
                    sad: "Sad",
                    angry: "Angry",
                    neutral: "Neutral",
                    sleepy: "Sleepy",
                    surprise: "Happy",
                    fear: "Neutral",
                    disgust: "Neutral",
                };

                const mood = emotionToMood[detectedEmotion] || "Neutral";
                console.log("Mapped Mood:", mood);

                navigate("/result", { state: { userMood: mood, imageFile, apiData: data } });
            } catch (error) {
                console.error("Error recognizing face:", error);
                navigate("/result", { state: { userMood: "Neutral", imageFile, apiData: null } });
            } finally {
                setIsProcessing(false);
            }
        };

        recognizeFace();
    }, [location, navigate]);

    return (
        <div className={styles.container}>
            <div className={styles.background}></div>
            <div className={styles.card}>
                <h1 className={styles.title}>
                    WibeCheck <span className={styles.highlight}>in progress</span>
                </h1>
                {isProcessing && (
                    <div className={styles.spotifyCode}>
                        <div className={styles.bars}>
                            {barHeights.map((height, index) => (
                                <div
                                    key={index}
                                    className={`${styles.bar} ${index === activeBar ? styles.active : ""}`}
                                    style={{ height: `${height}px` }}
                                ></div>
                            ))}
                        </div>
                    </div>
                )}
            </div>
            <div className={styles.footer}>
                <img src={spotifyLogo} alt="Spotify" className={styles.spotifyIcon} />
                <span className={styles.footerText}>Powered by Spotify</span>
            </div>
        </div>
    );
}

export default PostAnalysisPage;
