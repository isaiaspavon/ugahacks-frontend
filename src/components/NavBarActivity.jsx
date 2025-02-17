import styles from './NavBarActivity.module.css';
import logo from '../assets/LOGO for WibeCheck.jpg';
import { useNavigate } from 'react-router-dom';

function NavBar() {
  const navigate = useNavigate();

  return (
    <>
            <div className={styles.navBar}>
                <div className={styles.test}>
                    <div className={styles.nameOfApp}>
                        <button className={styles.logoButton} onClick={() => navigate('/')}>
                          <img className={styles.logoButton} src={logo} alt="LOGO" width="50" height="50"></img>
                        </button>
                        <h2 className = {styles.title}>WibeCheck</h2>
                        <button className={styles.about} onClick={() => navigate('/about')}>About</button>
                        <button className={styles.about} onClick={() => navigate('/contact')}>Contact</button>
                    </div>
                </div>
            </div>

    </>
  );
}

export default NavBar;
