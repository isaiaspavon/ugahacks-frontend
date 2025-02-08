import { useState } from 'react'
import { BrowserRouter as Router, Routes, Route, useNavigate } from 'react-router-dom';
import SignupPage from './pages/SignupPage.jsx';
import LoginPage from './pages/LoginPage.jsx';
import ActivityPage from './pages/ActivityPage.jsx';
import PostAnalysisPage from "./pages/PostAnalysisPage.jsx";
import styles from "./App.module.css";
import logo from "./assets/LOGO for WibeCheck.jpg";

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
    <h1 className = {styles.bigInfoTitle}>What is WibeCheck?</h1>
    <button className = {styles.activityButton} onClick={() => navigate('/activity')}>Activity Page</button>
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
      </Routes>
    </Router>
  );
}
export default App;
