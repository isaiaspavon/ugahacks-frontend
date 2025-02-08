import { useState } from 'react'
import { BrowserRouter as Router, Routes, Route, useNavigate } from 'react-router-dom';
import SignupPage from './pages/SignupPage.jsx';
import LoginPage from './pages/LoginPage.jsx';
import styles from "./App.module.css";
import logo from "./assets/LOGO for WibeCheck.jpg";

function Home() {
  const navigate = useNavigate();

  return (
  <>
  <div className = {styles.page}>
    <div className={styles.navBar}>
    <img className={styles.logo} src={logo} alt="LOGO" width="50" height="50"></img>
      <div className={styles.firstButtons}>
        <button className={styles.button}>About</button>
        <button className={styles.button}>Content</button>
      </div>
      <div className={styles.nextButtons}>
        <button className={styles.button}>Login</button>
        <button className={styles.button}>Get Started</button>
      </div>
    </div>
    </div>


    <div>
      <button onClick={() => navigate('/signup')}>Go to Signup</button>
      <button onClick={() => navigate('/login')}>Go to Login</button>
  </div> 
  </>
  );
}

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/signup" element={<SignupPage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/activity" element={<Activitypage />} /> {/*NewRoute*/}
      </Routes>
    </Router>
  );
}
export default App;
