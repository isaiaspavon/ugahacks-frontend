import { useState } from 'react'
import { BrowserRouter as Router, Routes, Route, useNavigate } from 'react-router-dom';
import SignupPage from './pages/SignupPage.jsx';
import LoginPage from './pages/LoginPage.jsx';
import ActivityPage from './pages/ActivityPage.jsx';
import PostAnalysisPage from "./pages/PostAnalysisPage.jsx";
import styles from "./App.module.css";
import logo from "./assets/LOGO for WibeCheck.jpg";
import ResultPage from "./pages/ResultPage.jsx"
import ContactPage from "./pages/ContactPage.jsx";

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
          <button className={styles.contact} onClick={() => navigate('/contact')}>Contact</button>
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
    <h3 className = {styles.smallInfoTitle}>Personalize a playlist for your mood: <span className={styles.sad}>sad</span>, <span className={styles.angry}>angry</span>, <span className={styles.happy}>happy</span>, or <span className={styles.sleepy}>sleepy</span>.</h3>
    <div className = {styles.activityButtonContainer}>
      <h3 className = {styles.smallerInfoTitle}>Ready to get started?</h3>
      <button className = {styles.activityButton} onClick={() => navigate('/signup')}>Let's do it.</button>
    </div>
  </div> 

  <div className = {styles.divForUserStats}>
    <h1 className = {styles.headingForUserStats}>What's up listeners</h1>
    <p className = {styles.displayParagraphForUserStats}>The Stats are ready.</p>
    <p className = {styles.bottomOfHeadingForUserStats}>Are you?</p>
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
        <Route path ="/contact" element={<ContactPage />} />
      </Routes>
    </Router>
  );
}
export default App;