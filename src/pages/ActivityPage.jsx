import React, { useState } from 'react';
import NavBarActivity from '../components/NavBarActivity';
import styles from './ActivityPage.module.css';
import { useNavigate } from 'react-router-dom';
import defaultProfile from '../assets/profileLogo.jpg';
import axios from 'axios';  // Import Axios for API calls

const ActivityPage = () => {
    const [showImagePart, setShowImagePart] = useState(false);
    const [selectedImage, setSelectedImage] = useState(null);  // Now stores the file object
    const [mood, setMood] = useState(null);  // State for storing the detected mood
    const [error, setError] = useState(null);  // State for storing errors
    const navigate = useNavigate();

    // Handle file selection
    const handleImageUpload = (event) => {
        const file = event.target.files[0];
        if (file) {
            setSelectedImage(file);  // Store the file object directly, not the URL
        }
    };

    // Handle the analyze button click
    const handleAnalyze = async () => {
        if (!selectedImage) {
            setError('Please upload an image first!');
            return;
        }

        // Prepare the FormData to send the image file
        const formData = new FormData();
        formData.append('image', selectedImage);  // Append the file object, not the URL

        try {
            // Send the image to the backend
            const response = await axios.post('http://localhost:5000/api/analyze-face', formData, {
                headers: {
                    'Content-Type': 'multipart/form-data',
                },
            });

            // Get the mood from the response
            if (response.data.mood) {
                setMood(response.data.mood);
                setError(null);  // Reset any previous errors
                console.log("Detected Mood:", response.data.mood);
                navigate('/post-analysis');  // Redirect to the analysis page (or display the mood here)
            }
        } catch (err) {
            setError('Error analyzing the face. Please try again.');
            setMood(null);
            console.log("Error analyzing the image:", err);
        }
    };

    return (
        <>
            <div className={styles.navBar}>
                <NavBarActivity />
            </div>

            <div className={styles.background}></div>
            {/* Main Content */}
            <div className={styles.page}>
                <div className={styles.questionBox}>
                    <h2 className={styles.gradientText}>What's the Wibe?</h2>
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
                                src={selectedImage ? URL.createObjectURL(selectedImage) : defaultProfile}
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
                            onClick={handleAnalyze}  // Call handleAnalyze to send the image to the backend
                        >
                            Analyze
                        </button>

                        {/* Show detected mood or error */}
                        {mood && <p>Detected Mood: {mood}</p>}
                        {error && <p style={{ color: 'red' }}>{error}</p>}
                    </div>
                )}
            </div>
        </>
    );
};

export default ActivityPage;
