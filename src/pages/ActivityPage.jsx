import React, { useState } from 'react';
import NavBarActivity from '../components/NavBarActivity';
import styles from './ActivityPage.module.css';
import { useNavigate } from 'react-router-dom';
import defaultProfile from '../assets/profileLogo.jpg';

const ActivityPage = () => {
    const [showImagePart, setShowImagePart] = useState(false);
    const navigate = useNavigate();

    return (
        <>
            <div className={styles.navBar}>
                <NavBarActivity />
            </div>

            {/* Main Content */}
            <div className={styles.page}>
                <div className={styles.questionBox}>
                    <h2 className={styles.gradientText}>Whats the Wibe?</h2>
                    <button 
                        className={styles.wibeButton} 
                        onClick={() => setShowImagePart(true)}
                    >
                        Upload the Wibe
                    </button>
                </div>


                {/* Image Part (Hidden Until Button is Clicked) */}
                {showImagePart && (
                                    <div invisiblePortion>
                    <div className={`${styles.imagePart} ${showImagePart ? styles.show : ''}`}>
                        <img src={defaultProfile}  width="200" height="200"></img>
                        <p className={styles.imageWords}>Drag and drop an image or select one from storage.</p>
                    </div>

                    <button className={styles.homeButton} onClick={() => navigate("/")}>Analyze</button>
                    </div>
                
                    
                )}
            </div>
        </>
    );
};

export default ActivityPage;
