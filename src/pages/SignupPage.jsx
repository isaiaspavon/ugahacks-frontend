import { useNavigate } from 'react-router-dom';
import styles from './SignupPage.module.css'; // Import CSS module
import logo from '../assets/LOGO for WibeCheck.jpg';

function SignupPage() {
  const navigate = useNavigate();

  return (
    <div className={styles.container}>
      <div className={styles.card}>
        {/* Logo */}
        <button className={styles.logo} onClick={() => navigate('/')}>
          <img src={logo} alt="LOGO" width="100" height="100" />
        </button>

        {/* Title */}
        <h1 className={styles.headerText}>Create Your Account</h1>
        <p className={styles.subtext}>Welcome! Please fill in the details to get started.</p>

        {/* Auth Buttons */}
        <div className={styles.authButtons}>
          <button className={styles.authButton}>GitHub</button>
          <button className={styles.authButton}>Google</button>
        </div>

        {/* Divider */}
        <div className={styles.hrContainer}>
          <hr />
          <span className={styles.orText}>or</span>
          <hr />
        </div>

        {/* Name Inputs */}
        <div className={styles.formColumn}>
          <div className={styles.inputGroup}>
            <label htmlFor="firstName">First Name</label>
            <input type="text" id="firstName" placeholder="First Name" />
          </div>
          <div className={styles.inputGroup}>
            <label htmlFor="lastName">Last Name</label>
            <input type="text" id="lastName" placeholder="Last Name" />
          </div>
        </div>

        {/* Email & Password */}
        <div className={styles.formColumn}>
          <div className={styles.inputGroup}>
            <label htmlFor="email">Email Address</label>
            <input type="email" id="email" placeholder="Enter your email" />
          </div>
          <div className={styles.inputGroup}>
            <label htmlFor="password">Password</label>
            <input type="password" id="password" placeholder="Enter your password" />
          </div>
        </div>

        {/* Continue Button */}
        <button className={styles.continueButton}>Continue</button>

        {/* Already Have an Account */}
        <div className={styles.noAccount}>
          <span>Already have an account?</span>
          <button className={styles.createOne} onClick={() => navigate('/login')}>Go to Login</button>
        </div>
      </div>
    </div>
  );
}

export default SignupPage;
