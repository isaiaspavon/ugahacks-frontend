import React from 'react';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import styles from './SignupPage.module.css'; // Import CSS module
import logo from '../assets/LOGO for WibeCheck.jpg';
// wibe-check/src/assets/LOGO for WibeCheck.jpg

function SignupPage() {
  const navigate = useNavigate();

  // State for SignUp details
  const [fName, setfName] = useState('');
  const [lName, setlName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  // State to toggle between SignUp and Profile form
  const [isSignUpComplete, setIsSignUpComplete] = useState(false);

  const handleSignUpSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('SignUp Details:', { fName, lName, email, password });
    setIsSignUpComplete(true); // Switch to the AddProfile form after SignUp is completed
  };

  return (
    <div className={styles.container}>
      <div className={styles.card}>
        <button className={styles.logo} onClick={() => navigate('/')}>
          <img className={styles.logo} src={logo.src} alt="LOGO" width="100" height="100" />
        </button>
        <h1 className={styles.headerText}>Create Your Account</h1>
        <p className={styles.subtext}>Welcome! Please fill in the details to get started.</p>

        {/* SignUp Section */}
        {!isSignUpComplete ? (
          <>
            <form onSubmit={handleSignUpSubmit}>
              <div className={styles.inputGroup}>
                <label htmlFor="firstName" className={styles.inputLabel}>First Name</label>
                <input
                  type="text"
                  id="firstName"
                  className={styles.nameInput}
                  placeholder="First Name"
                  value={fName}
                  onChange={(e) => setfName(e.target.value)}
                  required
                />
              </div>

              <div className={styles.inputGroup}>
                <label htmlFor="lastName" className={styles.inputLabel}>Last Name</label>
                <input
                  type="text"
                  id="lastName"
                  className={styles.nameInput}
                  placeholder="Last Name"
                  value={lName}
                  onChange={(e) => setlName(e.target.value)}
                  required
                />
              </div>

              <div className={styles.inputGroup}>
                <label htmlFor="email" className={styles.inputLabel}>Email Address</label>
                <input
                  type="email"
                  id="email"
                  className={styles.nameInput}
                  placeholder="Email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                />
              </div>

              <div className={styles.inputGroup}>
                <label htmlFor="password" className={styles.inputLabel}>Password</label>
                <input
                  type="password"
                  id="password"
                  className={styles.nameInput}
                  placeholder="Password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  required
                />
              </div>

              <div className={styles.buttonContainer}>
                <button type="submit" className={styles.submitButton}>Next</button>
              </div>
            </form>
          </>
        ) : (
          // Profile Section (Here, you can add profile-related fields)
          <p>Profile form goes here (after SignUp completion).</p>
        )}
      </div>
    </div>
  );
}

export default SignupPage;
