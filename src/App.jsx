import { useState } from 'react'
import { BrowserRouter as Router, Routes, Route, useNavigate } from 'react-router-dom';
import SignupPage from './pages/SignupPage.jsx';
import LoginPage from './pages/LoginPage.jsx';
import Activitypage from './pages/ActivityPage.jsx';
import "./App.css"

function Home() {
  const navigate = useNavigate();

  return (
    <div>
      <button onClick={() => navigate('/signup')}>Go to Signup</button>
      <button onClick={() => navigate('/login')}>Go to Login</button>
      <button onClick={() => navigate('/activity')}>Go to Activity Page</button> {/*NewButton*/}
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
