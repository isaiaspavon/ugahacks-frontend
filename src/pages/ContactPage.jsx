import React from 'react';
import styles from './ContactPage.module.css';
// import schoolLogo from "../assets/georgiaLogo.png";
import friends from '../assets/friends.png';
import { useNavigate } from 'react-router-dom';
import logo from "../assets/LOGO for WibeCheck.jpg";

const ContactPage = () => {
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
                    </div>
                    <div className={styles.nextButtons}>
                        <button className={styles.login} onClick={() => navigate('/login')}>Login</button>
                        <button className={styles.getStarted} onClick={() => navigate('/signup')}>Get Started</button>
                    </div>
                </div>
             </div>

        <div className={styles.contactUs}>
            <h1>Contact Us</h1>
            <div className={styles.specialName}>
                <img src={friends} height="100" alt="UGA Logo" />
                <h2>University of Georgia</h2>
            </div>

            <hr />

            <form action="https://formsubmit.co/jtc55494@uga.edu" method="POST"/>
            <div className = {styles.totalForm}>
                <div className={styles.firstName}>
                <label htmlFor="fname">Name:</label>
                <input type="text" id="fname" name="fname" required />
                </div>

                <div className={styles.emailPart}>
                <label htmlFor="emailAddress">Email:</label>
                <input type="email" id="emailAddress" name="email" required />
                </div>
                
                <div className={styles.message}>
                <label htmlFor="theMessage">Message:</label>
                <textarea id="theMessage" name="message" required></textarea>
                </div>
            </div>
                <button type="submit" className={styles.submit}>Send</button>
        </div>
        </>
    );
};

export default ContactPage;
