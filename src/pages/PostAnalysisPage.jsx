import { useEffect, useState } from 'react';
import styles from './PostAnalysisPage.module.css'; // Import CSS module
import spotifyLogo from "../assets/spotify-logo.jpg";

function PostAnalysisPage() {
    const [activeBar, setActiveBar] = useState(0);
    const barHeights = [10, 30, 15, 40, 25, 35, 12, 45, 20, 50, 28, 37, 14, 48, 22, 42, 18, 38, 26, 46];

    useEffect(() => {
        const interval = setInterval(() => {
            setActiveBar((prev) => (prev + 1) % barHeights.length);
        }, 200);

        return () => clearInterval(interval);
    }, []);


    return (
        <div className={styles.container}>
            <div className={styles.background}></div>
            <div className={styles.card}>
                <h1 className={styles.title}>
                    WibeCheck <span className={styles.highlight}>in progress</span>
                </h1>
                <div className={styles.spotifyCode}>
                    <div className={styles.bars}>
                        {barHeights.map((height, index) => (
                            <div
                                key={index}
                                className={`${styles.bar} ${index === activeBar ? styles.active : ""}`}
                                style={{ height: `${height}px` }} // Set height dynamically
                            ></div>
                        ))}
                    </div>
                </div>
            </div>
            <div className={styles.footer}>
                <img src={spotifyLogo} alt="Spotify" className={styles.spotifyIcon} />
                <span className={styles.footerText}>Powered by Spotify</span>
            </div>
        </div>
    );
}

export default PostAnalysisPage;