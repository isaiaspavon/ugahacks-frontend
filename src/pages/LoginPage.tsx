import React from 'react';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import styles from './LoginPage.module.css'; // Import CSS module
import logo from '../assets/LOGO for WibeCheck.jpg';

function LoginPage() {
  const navigate = useNavigate();

  // State for email & password
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState<string | null>(null);

  // Handle login form submission
  const handleLogin = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setError(null); // Reset error state before making request

    try {
      const response = await fetch('/api/login', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email, password }),
      });

      if (response.ok) {
        console.log('Login successful!');
        navigate('/dashboard'); // Redirect on success
      } else {
        setError('Invalid email or password. Please try again.');
      }
    } catch (err) {
      console.error('Login failed:', err);
      setError('Something went wrong. Please try again later.');
    }
  };

  return (
    <div className={styles.container}>
      <div className={styles.card}>
        <button className={styles.logo} onClick={() => navigate('/')}>
          <img className={styles.logo} src={logo.src} alt="LOGO" height="80" width="80" />
        </button>
        <h1 className={styles.headerText}>Sign In to WibeCheck</h1>
        <p className={styles.subtext}>Welcome back! Please sign in to continue.</p>

        {/* OAuth Button */}
        <div className={styles.authButtons}>
          <button className={styles.authButton}>Google</button>
        </div>

        <div className={styles.hrContainer}>
          <hr />
          <span className={styles.orText}>or</span>
          <hr />
        </div>

        {/* Login Form */}
        <form onSubmit={handleLogin} className={styles.formContainer}>
          {/* Email Input */}
          <div className={styles.emailContainer}>
            <label htmlFor="email" className={styles.emailLabel}>Email Address</label>
            <input
              type="email"
              id="email"
              className={styles.emailInput}
              placeholder="Enter your email address"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>

          {/* Password Input */}
          <div className={styles.emailContainer}>
            <label htmlFor="password" className={styles.emailLabel}>Password</label>
            <input
              type="password"
              id="password"
              className={styles.emailInput}
              placeholder="Enter your password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>

          {/* Error Message */}
          {error && <p className={styles.errorMessage}>{error}</p>}

          {/* Submit Button */}
          <button type="submit" className={styles.continueButton}>Continue</button>
        </form>

        {/* Signup Redirect */}
        <div className={styles.noAccount}>
          <span className={styles.noAccountText}>No Account?</span>
          <span className={styles.createOne} onClick={() => navigate('/signup')}>Create One</span>
        </div>
      </div>
    </div>
  );
}

export default LoginPage;
