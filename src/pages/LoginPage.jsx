import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import styles from './LoginPage.module.css'; // Import CSS module
import logo from '../assets/LOGO for WibeCheck.jpg';

function LoginPage() {
  const navigate = useNavigate();

  return (
    <div className={styles.container}>
      <div className={styles.card}>
        <button className={styles.logo} onClick={() => navigate('/')}>
            <img className={styles.logo} src={logo} alt="LOGO" height="80" width="80" ></img>
        </button>
        <h1 className={styles.headerText}>Sign In to WibeCheck</h1>
        <p className={styles.subtext}>Welcome back! Please sign in to continue.</p>
        <div className={styles.authButtons}>
          <button className={styles.authButton}>Google</button>
        </div>  

        <div className={styles.hrContainer}>
          <hr />
          <span className={styles.orText}>or</span>
          <hr />
        </div>

        {/* Email Input */}
        <div className={styles.emailContainer}>
          <label htmlFor="email" className={styles.emailLabel}>Email Address</label>
          <input type="email" id="email" className={styles.emailInput} placeholder="Enter your email address" />
        </div>

        {/* Password Input */}
        <div className={styles.emailContainer}>
          <label htmlFor="password" className={styles.emailLabel}>Password</label>
          <input type="password" id="password" className={styles.emailInput} placeholder="Enter your password" />
        </div>

        <button className={styles.continueButton}>Continue</button>

        <div className={styles.noAccount}>
          <span className={styles.noAccountText}>No Account?</span>
          <span className={styles.createOne} onClick={() => navigate('/signup')}>Create One</span>
        </div>
      </div>
    </div>
  );
}

export default LoginPage;