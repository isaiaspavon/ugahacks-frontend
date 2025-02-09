import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import styles from './AboutPage.module.css'; // Import CSS module
import logo from '../assets/LOGO for WibeCheck.jpg';

import founder1 from "../assets/founder1.jpeg";
import founder2 from "../assets/founder2.jpeg";
import founder3 from "../assets/founder3.jpeg";

function AboutPage() {
    const navigate = useNavigate();

    return (
        <div className={styles.container}>
            {/* Navbar */}
            <div className={styles.navBar}>
                <div className={styles.test}>
                    <div className={styles.nameOfApp}>
                        <img className={styles.logo} src={logo} alt="LOGO"></img>
                        <h2 className = {styles.title}>WibeCheck</h2>
                            <button className={styles.about} onClick={() => navigate('/contact')}>Contact</button>
                    </div>
                    <div className={styles.nextButtons}>
                        <button className={styles.login} onClick={() => navigate('/login')}>Login</button>
                        <button className={styles.getStarted} onClick={() => navigate('/signup')}>Get Started</button>
                    </div>
                </div>
             </div>

            <section className={styles.hero}>
                <div className={styles.heroText}>
                    <h1 className={styles.heroTitle}>Welcome to WibeCheck</h1>
                    <p className={styles.heroSubtext}>A social media platform for sharing your vibes with the world</p>
                </div>
            </section>

            <section className={styles.about}>
                <h2>About Us</h2>
                <p>Made for the UGA Hacks X.</p>
            </section>

            <section className={styles.founders}>
                <h2>Meet the Founders</h2>
                <p>Who are we?</p>

                <div className={styles.founderCards}>
                    <div className={styles.card}>
                        <img src={founder1} alt="Founder 1" className={styles.founderImage} />
                        <h4>Isaias Pavon</h4>
                        <p>Specializes in AI and Machine Learning. Loves to work on facial recognition technology.</p>
                    </div>

                    <div className={styles.card}>
                        <img src={founder2} alt="Founder 2" className={styles.founderImage} />
                        <h4>Naveen Seedani</h4>
                        <p>Web development expert with a focus on full-stack applications and UI/UX design.</p>
                    </div>

                    <div className={styles.card}>
                        <img src={founder3} alt="Founder 3" className={styles.founderImage} />
                        <h4>Sarah Liberman</h4>
                        <p>Cybersecurity enthusiast passionate about protecting user data and ethical hacking.</p>
                    </div>  
                </div>
            </section>

        </div>
    );
}

export default AboutPage;
