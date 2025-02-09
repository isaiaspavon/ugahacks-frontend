"use client";

import React from "react";
import { useState } from "react";

export default function FaceRecognition() {
  const [imageFile, setImageFile] = useState<File | null>(null);
  const [imageUrl, setImageUrl] = useState("");
  const [result, setResult] = useState(null);
  const [loading, setLoading] = useState(false);

  const API_URL = "https://api.luxand.cloud/photo/emotions";
  const API_KEY = "fe98cb4a24da40a3b701c945bb8b91d2"; // Replace with your actual API key

  // Handle File Upload
  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (event.target.files && event.target.files[0]) {
      setImageFile(event.target.files[0]);
      setImageUrl(""); // Reset URL if a file is uploaded
    }
  };

  // Handle Emotion Detection
  const handleRecognition = async () => {
    setLoading(true);
    try {
      const formData = new FormData();

      if (imageFile) {
        formData.append("photo", imageFile); // Upload file
      } else if (imageUrl) {
        formData.append("image_url", imageUrl); // Use URL
      } else {
        throw new Error("Please select an image or enter an image URL.");
      }

      const response = await fetch(API_URL, {
        method: "POST",
        headers: {
          "token": API_KEY, // Use Luxand authentication
        },
        body: formData,
      });

      if (!response.ok) {
        throw new Error(`API error: ${response.status}`);
      }

      const data = await response.json(); // Parse JSON response
      setResult(data);
    } catch (error) {
      console.error("Error recognizing face:", error.message);
      setResult({ error: error.message });
    }
    setLoading(false);
  };

  return (
    <div className="p-4 bg-gray-100 rounded-lg shadow-md">
      <h1 className="text-xl font-bold mb-4">Face Recognition</h1>

      {/* Image File Upload */}
      <input type="file" accept="image/*" onChange={handleFileChange} className="mb-2" />

      {/* OR Image URL Input */}
      <input
        type="text"
        placeholder="Enter Image URL"
        value={imageUrl}
        onChange={(e) => setImageUrl(e.target.value)}
        className="p-2 border rounded w-full mb-2"
      />

      {/* Recognize Button */}
      <button
        onClick={handleRecognition}
        disabled={loading}
        className="bg-blue-500 text-white px-4 py-2 rounded"
      >
        {loading ? "Recognizing..." : "Recognize Face"}
      </button>

      {/* Display Results */}
      {result && (
        <div className="mt-4 p-2 bg-white rounded shadow">
          <h2 className="text-lg font-semibold">Results:</h2>
          <pre className="bg-gray-200 p-2 rounded text-sm">
            {JSON.stringify(result, null, 2)}
          </pre>
        </div>
      )}
    </div>
  );
}
