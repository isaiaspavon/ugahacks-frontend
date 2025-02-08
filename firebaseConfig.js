// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCqKKBATPL2xfT1jXxwnbqg9q1cID_zGsE",
  authDomain: "wibe-check.firebaseapp.com",
  projectId: "wibe-check",
  storageBucket: "wibe-check.firebasestorage.app",
  messagingSenderId: "775444450357",
  appId: "1:775444450357:web:d1a704314c93f8b7daf57c",
  measurementId: "G-GH99T97C6T"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);