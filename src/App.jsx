import { useState } from 'react'
import { BrowserRouter as Router, Routes, Route, useNavigate } from 'react-router-dom';
import SignupPage from './pages/SignupPage.jsx';
import LoginPage from './pages/LoginPage.jsx';
import "./App.css"

function Home() {
  const navigate = useNavigate();

  return (
    <div>
      <button onClick={() => navigate('/signup')}>Go to Signup</button>
    </div>
  );
  return (
    <div>
      <button onClick={() => navigate('/login')}>Go to Signup</button>
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
      </Routes>
    </Router>
  );
}
export default App
