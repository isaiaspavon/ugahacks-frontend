import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import styles from './SignupPage.module.css'; // Import CSS module
import logo from '../assets/LOGO for WibeCheck.jpg';

function SignupPage() {
const navigate = useNavigate();

  return (
    <div className={styles.container}>
      <div className={styles.card}>
        <button className = {styles.logo} onClick={() => navigate('/')}>
        <img className={styles.logo} src={logo} alt="LOGO" width="100" height="100"></img>
        </button>
        <h1 className={styles.headerText}>Create Your Account</h1>
        <p className={styles.subtext}>Welcome! Please fill in the details to get started.</p>
        <div className={styles.authButtons}>
          <button className={styles.authButton}>GitHub</button>
          <button className={styles.authButton}>Google</button>
        </div>  

        <div className={styles.hrContainer}>
          <hr />
          <span className={styles.orText}>or</span>
          <hr />
        </div>

        {/* First Name and Last Name Inputs */}
        <div className={styles.nameContainer}>
          <div className={styles.inputGroup}>
            <label htmlFor="firstName" className={styles.inputLabel}>First Name</label>
            <input type="text" id="firstName" className={styles.nameInput} placeholder="First Name"/>
          </div>
          <div className={styles.inputGroup}>
            <label htmlFor="lastName" className={styles.inputLabel}>Last Name</label>
            <input type="text" id="lastName" className={styles.nameInput} placeholder="Last Name"/>
          </div>
        </div>

        {/* Email Input */}
        <div className={styles.emailContainer}>
          <label htmlFor="email" className={styles.emailLabel}>Email Address</label>
          <input type="email" id="email" className={styles.emailInput} placeholder="Enter your email" />
        </div>

        {/* Password Input */}
        <div className={styles.emailContainer}>
          <label htmlFor="password" className={styles.emailLabel}>Password</label>
          <input type="password" id="password" className={styles.emailInput} placeholder="Enter your password" />
        </div>

        <button className={styles.continueButton}>Continue</button>

        <div className={styles.noAccount}>
          <span className={styles.noAccountText}>Already have an account?</span>
          <button className={styles.createOne} onClick={() => navigate('/login')}>Go to Login</button>
        </div> 
      </div>
    </div>
    
  );
}

export default SignupPage;
