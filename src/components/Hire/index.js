import React from "react";
import styles from "./Hire.module.css";

const Hire = () => {
  return (
    <div id="Hire" className={styles.hireWrapper}>
      <div className="container">
        <div className={styles.hireInner}>
          <div className={styles.hireContent}>
            <h2>Let’s Make Something Great Together</h2>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
              eiusmod tempor incididunt ut labore et t enim ad minim veniam,
              quis nostrud exercitation.
            </p>
          </div>
          <div className={styles.hireForm}>
            <div className={`${styles.inputDiv} ${styles.nameInput}`}>
              <input placeholder="name" type="text" name="name" />
            </div>
            <div className={`${styles.inputDiv} ${styles.emailInput}`}>
              <input placeholder="email" type="email" name="email" />
            </div>
            <div className={`${styles.inputDiv} ${styles.phoneInput}`}>
              <input placeholder="phone#" type="number" name="name" />
            </div>
            <div className={`${styles.inputDiv} ${styles.buddgetInput}`}>
              <input placeholder="budget" type="text" name="name" />
            </div>
            <div className={`${styles.inputDiv} ${styles.messgaeTextarea}`}>
              <textarea placeholder="message" rows="6" name="message" />
            </div>
            <div className={styles.hireSubmit}>
              <button className={`btn ${styles.btnHire}`}>Hire Me</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hire;
