import React from 'react';
import styles from './ContactPage.module.css';
import logo from "../assets/georgiaLogo.png";

const ContactPage = () => {
    return (
        <div className={styles.contactUs}>
            <h1>Contact Us</h1>
            <div className={styles.specialName}>
                <img src={logo} height="100" alt="UGA Logo" />
                <p>University of Georgia</p>
            </div>

            <hr />

            <form action="https://formsubmit.co/jtc55494@uga.edu" method="POST"/>
                <label htmlFor="fname">Name:</label>
                <input type="text" id="fname" name="fname" required />

                <label htmlFor="emailAddress">Email:</label>
                <input type="email" id="emailAddress" name="email" required />

                <label htmlFor="theMessage">Message:</label>
                <textarea id="theMessage" name="message" required></textarea>

                <button type="submit" className={styles.submit}>Send</button>
        </div>
    );
};

export default ContactPage;
