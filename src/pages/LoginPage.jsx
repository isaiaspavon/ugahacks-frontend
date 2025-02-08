import { useState } from 'react';
import { BrowserRouter as Router, Routes, Route, useNavigate } from 'react-router-dom';
import './LoginPage.css';
import logo from '../assets/LOGO for WibeCheck.jpg';

function LoginPage() {
  const [count, setCount] = useState(0);
  const navigate = useNavigate();

  return (
    <div className="container">
      <div className="card">
        <img className="logo" src={logo} alt="LOGO"></img>
        <h1 className="header-text">Sign In to WibeCheck</h1>
        <p className="subtext">Welcome back! Please sign in to continue.</p>

        <div className="auth-buttons">
          <button className="auth-button">Google</button>
        </div>  

        <div className="hr-container">
          <hr />
          <span className="or-text">or</span>
          <hr />
        </div>

        {/* Email Input */}
        <div className="email-container">
          <label htmlFor="email" className="email-label">Email Address</label>
          <input type="email" id="email" className="email-input" placeholder="Enter your email address" />
        </div>

        <button className="continue-button">Continue</button>

        <div className="no-account">
          <span className="no-account-text">No Account?</span>
          <button className="create-one" onClick={() => navigate('/signup')}>Create One</button>
        </div>
      </div>
    </div>
  );
}

export default LoginPage;
