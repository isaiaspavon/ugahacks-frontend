import React, { useState } from 'react';
import NavBarActivity from '../components/NavBarActivity';
import styles from './ActivityPage.module.css';
import { useNavigate } from 'react-router-dom';
import defaultProfile from '../assets/profileLogo.jpg';

const ActivityPage = () => {
    const [showImagePart, setShowImagePart] = useState(false);
    const navigate = useNavigate();
    const [selectedImage, setSelectedImage] = useState(null);

    // Handle file selection
    const handleImageUpload = (event) => {
        const file = event.target.files[0];
        if (file) {
            const imageUrl = URL.createObjectURL(file);
            setSelectedImage(imageUrl);
        }
    };

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
                    <div className={styles.imageContainer}>
                        <div className={`${styles.imagePart} ${showImagePart ? styles.show : ''}`}>
                            <img
                                src={selectedImage || defaultProfile}
                                alt="Uploaded Preview"
                                width="200"
                                height="200"
                            />
                            <p className={styles.imageWords}>Drag and drop an image or select one from storage.</p>

                            {/* File Input */}
                            <div className={styles.fileInputContainer}>
                                <input
                                    type="file"
                                    accept="image/*"
                                    id="fileUpload"
                                    className={styles.hiddenFileInput}
                                    onChange={handleImageUpload}
                                />
                                <label htmlFor="fileUpload" className={styles.customFileButton}>
                                    Choose File
                                </label>
                            </div>
                        </div>

                        {/* Analyze Button (Now Outside the Box) */}
                        <button
                            className={styles.analyzeButton}
                            onClick={() => navigate("/post-analysis")}
                        >
                            Analyze
                        </button>
                    </div>
                )}
            </div>
        </>
    );
};

export default ActivityPage;
