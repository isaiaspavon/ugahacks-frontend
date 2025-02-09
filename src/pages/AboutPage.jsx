import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import styles from './AboutPage.module.css'; // Import CSS module
import logo from '../assets/LOGO for WibeCheck.jpg';

import founder1 from "../assets/founder1.jpeg";
import founder2 from "../assets/founder2.jpeg";
import founder3 from "../assets/founder3.jpeg";

import backgroundImage1 from "../assets/GroupPic1.jpg";
import backgroundImage2 from "../assets/GroupPic2.jpg";
import backgroundImage3 from "../assets/GroupPic3.jpg";
import backgroundImage4 from "../assets/GroupPic2.jpg";
import backgroundImage5 from "../assets/GroupPic5.jpg";

function AboutPage() {
    const navigate = useNavigate();
    const images = [backgroundImage1, backgroundImage2, backgroundImage3, backgroundImage4, backgroundImage5];

    const [currentImageIndex, setCurrentImageIndex] = useState(0);
    const [isImageVisible, setIsImageVisible] = useState(false);
    
    useEffect(() => {
        const interval = setInterval(() => {
            setIsImageVisible(false);
            setTimeout(() => {
                setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
                setIsImageVisible(true);
            }, 500);
        }, 3000);

        return () => clearInterval(interval);
    }, []);
    
    return (
        <div className={styles.container}>
            <div className={styles.navBar}>
                <div className={styles.test}>
                    <div className={styles.nameOfApp}>
                        <button className={styles.logoButton} onClick={() => navigate('/')}>
                        <img className={styles.logo} src={logo} alt="LOGO" height="50" width="50"></img>
                        </button>
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
                    <h1 className={styles.heroTitle}>Thank you for using WibeCheck.</h1>
                    <p className={styles.heroSubtext}>We really appreciate you for using our website WibeCheck! We couldn't have done this without you.</p>
                </div>
            </section>

            <section className={styles.about}>
                <h2>About Us</h2>
                <p>Made for UGA Hacks X.</p>
            </section>

            <div class={styles.imageContainer}>
                <img className={`${styles.backgroundImg} ${isImageVisible ? styles.active : ''}`} 
                src={images[currentImageIndex]} 
                alt="Background Image"
                />
            </div>

            <section className={styles.founders}>
                <h2>Meet the Founders</h2>
                <p>Who are we? Get to know us!!!</p>

                <div className={styles.founderCards}>
                    <div className={styles.card}>
                        <img src={founder1} alt="Founder 1" className={styles.founderImage} />
                        <h4>Isaias Pavon</h4>
                        <p>Specializes in FullStack development. Loves to manage a team and aid in personal growth and development.</p>
                    </div>

                    <div className={styles.card}>
                        <img src={founder2} alt="Founder 2" className={styles.founderImage} />
                        <h4>Naveen Seedani</h4>
                        <p>Web development expert with a focus on full-stack applications and UI/UX design.</p>
                    </div>

                    <div className={styles.card}>
                        <img src={founder3} alt="Founder 3" className={styles.founderImage} />
                        <h4>Sarah Liberman</h4>
                        <p>Cybersecurity specialist focused on secure solutions, risk management, and threat detection.</p>
                    </div>  
                </div>
            </section>

        </div>
    );
}

export default AboutPage;
