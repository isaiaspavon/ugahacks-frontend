import { useEffect, useState } from 'react';
import styles from './PostAnalysisPage.module.css'; // Import CSS module
import logo from '../assets/LOGO for WibeCheck.jpg';
import spotifyLogo from "../assets/spotify-logo.jpg";

function PostAnalysisPage() {
    const [activeBar, setActiveBar] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setActiveBar((prev) => (prev + 1) % 10);
        }, 500);

        return () => clearInterval(interval);
    }, []);

    return (
        <div className={styles.container}>
            <div className={styles.card}>
                <h1 className={styles.title}>
                    WibeCheck <span className={styles.highlight}>in progress</span>
                </h1>
                <div className={styles.spotifyCode}>
                    <div className={styles.bars}>
                        {Array.from({ length: 10}).map((_, index) => (
                            <div
                            key={index}
                            className={`${styles.bar} ${index === activeBar ? styles.active : ""}`}
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
console.log("Spotify Logo Path:", spotifyLogo);

export default PostAnalysisPage;