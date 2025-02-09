import React, { useState } from 'react';
import axios from 'axios';

const UploadImage = () => {
  const [image, setImage] = useState(null);
  const [mood, setMood] = useState(null);
  const [error, setError] = useState(null);

  const handleFileChange = (e) => {
    setImage(e.target.files[0]);  // Store the uploaded image
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!image) {
      setError('Please select an image!');
      return;
    }

    const formData = new FormData();
    formData.append('image', image);

    try {
      // Send the image to the backend (Flask server)
      const response = await axios.post('http://localhost:5000/api/analyze-face', formData, {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      });

      // Set the detected mood based on the backend response
      setMood(response.data.mood);
      setError(null);
    } catch (err) {
      // Handle errors (e.g., if the API request fails)
      setError('Error analyzing the face. Please try again.');
      setMood(null);
    }
  };

  return (
    <div>
      <h2>Upload an image to detect mood</h2>
      <form onSubmit={handleSubmit}>
        <input type="file" onChange={handleFileChange} />
        <button type="submit">Analyze Mood</button>
      </form>

      {/* Display the detected mood */}
      {mood && <p>Detected Mood: {mood}</p>}
      {/* Display any error */}
      {error && <p style={{ color: 'red' }}>{error}</p>}
    </div>
  );
};

export default UploadImage;
