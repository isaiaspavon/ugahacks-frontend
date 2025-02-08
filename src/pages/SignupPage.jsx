import { useState } from 'react';
import './SignupPage.css';

function SignupPage() {
  const [count, setCount] = useState(0);

  return (
    <div className="container">
      <div className="card">
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

        {/* First Name and Last Name Inputs - Same Row */}
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
        <div className="password-container">
          <label htmlFor="password" className="input-label">Password</label>
          <input type="password" id="password" className="input-field" placeholder="Enter your password" />
        </div>

        <button className="continue-button">Continue</button>

        <div className="no-account">
          <span className="no-account-text">Already have an account?</span>
          <span className="create-one">Log in</span>
        </div>
      </div>
    </div>
  );
}

export default SignupPage;
