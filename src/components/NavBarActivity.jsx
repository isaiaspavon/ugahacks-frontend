import styles from './NavBarActivity.module.css';
import logo from '../assets/LOGO for WibeCheck.jpg';

function NavBar() {
  return (
    <>
    <nav className={styles.navBar}> 
      <div className={styles.leftSection}>
        <img className={styles.logo} src={logo} alt="Company Logo" width="40" height="40" />
        <h2 className={styles.companyName}>WibeCheck</h2>
      </div>
      <div className={styles.rightSection}>
        <div className={styles.profilePic}></div>
        <span className={styles.userGreeting}>Hello, User</span>
      </div>
    </nav>
    </>
  );
}

export default NavBar;
