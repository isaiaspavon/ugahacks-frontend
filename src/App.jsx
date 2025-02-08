import { useState } from 'react'
import { BrowserRouter as Router, Routes, Route, useNavigate } from 'react-router-dom';
import SignupPage from './pages/SignupPage.jsx';
import LoginPage from './pages/LoginPage.jsx';
import ActivityPage from './pages/ActivityPage.jsx';
import PostAnalysisPage from "./pages/PostAnalysisPage.jsx";
import styles from "./App.module.css";
import logo from "./assets/LOGO for WibeCheck.jpg";
import ResultPage from "./pages/ResultPage.jsx"

function Home() {
  const navigate = useNavigate();

  return (
  <>
  <div className = {styles.page}>
    <div className={styles.navBar}>
      <div className={styles.test}>
        <div className={styles.nameOfApp}>
          <img className={styles.logo} src={logo} alt="LOGO" width="50" height="50"></img>
          <h2 className = {styles.title}>WibeCheck</h2>
          <button className={styles.about}>About</button>
          <button className={styles.contact}>Contact</button>
        </div>
        <div className={styles.nextButtons}>
          <button className={styles.login} onClick={() => navigate('/login')}>Login</button>
          <button className={styles.getStarted} onClick={() => navigate('/signup')}>Get Started</button>
        </div>
      </div>
    </div>
  </div>


  <div className = {styles.bigInfo}>
    <h1 className = {styles.bigInfoTitle}>Welcome to WibeCheck.</h1>
    <h3 className = {styles.smallInfoTitle}>Personalize a playlist for your mood as it goes sad, angry, happy, or sleepy.</h3>
    <div className = {styles.activityButtonContainer}>
      <h3 className = {styles.smallerInfoTitle}>Ready to get started?</h3>
      <button className = {styles.activityButton} onClick={() => navigate('/signup')}>Let's do it.</button>
    </div>
  </div> 

  <div className = {styles.divForUserStats}>
    <h1>What's up firulais</h1>
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
        <Route path="/activity" element={<ActivityPage />} />
        <Route path="/post-analysis" element={<PostAnalysisPage />} />
        <Route path ="/result" element={<ResultPage />} />
      </Routes>
    </Router>
  );
}
export default App;