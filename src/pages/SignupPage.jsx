import { useState } from 'react';
import { BrowserRouter as Router, Routes, Route, useNavigate } from 'react-router-dom';
import './SignupPage.css';
import logo from '../assets/LOGO for WibeCheck.jpg';

function SignupPage() {
  const [count, setCount] = useState(0);
  const navigate = useNavigate(); // Initialize navigate

  return (
    <div className="container">
      <div className="card">
        <img className="logo" src={logo} alt="LOGO" width="100" height="100"></img>
        <h1 className="header-text">Create Your Account</h1>
        <p className="subtext">Welcome! Please fill in the details to get started.</p>

        <div className="auth-buttons">
          <button className="auth-button">GitHub</button>
          <button className="auth-button">Google</button>
        </div>  

        <div className="hr-container">
          <hr />
          <span className="or-text">or</span>
          <hr />
        </div>

        {/* First Name and Last Name Inputs */}
        <div className="name-container">
          <div className="input-group">
            <label htmlFor="firstName" className="input-label">First Name</label>
            <input type="text" id="firstName" className="name-input" placeholder="First Name"/>
          </div>
          <div className="input-group">
            <label htmlFor="lastName" className="input-label">Last Name</label>
            <input type="text" id="lastName" className="name-input" placeholder="Last Name"/>
          </div>
        </div>

        {/* Email Input */}
        <div className="email-container">
          <label htmlFor="email" className="email-label">Email Address</label>
          <input type="email" id="email" className="email-input" placeholder="Enter your email" />
        </div>

        {/* Password Input */}
        <div className="email-container">
          <label htmlFor="password" className="email-label">Password</label>
          <input type="password" id="password" className="email-input" placeholder="Enter your password" />
        </div>

        <button className="continue-button">Continue</button>

        <div className="no-account">
          <span className="no-account-text">Already have an account?</span>
          <button className = "create-one" onClick={() => navigate('/login')}>Go to Login</button>
        </div> 
      </div>
    </div>
  );
}

export default SignupPage;
