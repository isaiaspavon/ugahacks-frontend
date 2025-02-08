import { useState } from 'react'
import { BrowserRouter as Router, Routes, Route, useNavigate } from 'react-router-dom';
import SignupPage from './pages/SignupPage.jsx';
import LoginPage from './pages/LoginPage.jsx';
import "./App.css"

function Home() {
  const navigate = useNavigate();

  return (
  <>
    <div className={styles.navBar}>
      <div className={styles.firstButtons}>
        <button>About</button>
        <button>Content</button>
      </div>
      <div className={styles.nextButtons}>
        <button>Login</button>
        <button>Get Started</button>
      </div>
      <img className={styles.logo} src={logo} alt="LOGO" width="100" height="100"></img>
    </div>


    <div>
      <button onClick={() => navigate('/signup')}>Go to Signup</button>
      <button onClick={() => navigate('/login')}>Go to Login</button>
  </div> 
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
export default App
