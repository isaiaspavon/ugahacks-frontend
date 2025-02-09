import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import NavBarActivity from "../components/NavBarActivity";
import styles from "./ActivityPage.module.css";
import defaultProfile from "../assets/profileLogo.jpg";

const ActivityPage = () => {
    const [showImagePart, setShowImagePart] = useState(false);
    const navigate = useNavigate();
    const [selectedImage, setSelectedImage] = useState(null);
    const [imageFile, setImageFile] = useState(null);

    // Handle file selection
    const handleImageUpload = (event) => {
        const file = event.target.files[0];
        if (file) {
            const imageUrl = URL.createObjectURL(file);
            setSelectedImage(imageUrl);
            setImageFile(file); // Store the actual file
        }
    };

    // Navigate to post-analysis with image data
    const handleFaceRecognition = () => {
        if (!imageFile) {
            alert("Please upload an image first.");
            return;
        }

        navigate("/post-analysis", { state: { imageFile } });
    };

    return (
        <>
            <div className={styles.navBar}>
                <NavBarActivity />
            </div>

            <div className={styles.background}></div>

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

                {showImagePart && (
                    <div className={styles.imageContainer}>
                        <div className={`${styles.imagePart} ${showImagePart ? styles.show : ""}`}>
                            <img
                                src={selectedImage || defaultProfile}
                                alt="Uploaded Preview"
                                width="200"
                                height="200"
                            />
                            <p className={styles.imageWords}>Drag and drop an image or select one from storage.</p>

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

                        <div className={styles.buttonContainer}>
                            <button className={styles.analyzeButton} onClick={handleFaceRecognition}>
                                Analyze Face
                            </button>
                        </div>
                    </div>
                )}
            </div>
        </>
    );
};

export default ActivityPage;
