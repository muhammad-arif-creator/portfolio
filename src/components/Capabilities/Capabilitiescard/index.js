import React from "react";
import styles from "./CapabilitiesCard.module.css";

const CapabilitiesCard = () => {
  return (
    <div className={styles.CapabilitiesBox}>
      <div className={styles.CapabilitiesDiv}>
        <img alt="" src="./assets/images/capabilities.png"></img>
        <h4>Web Design</h4>
        <p>Get awesome design services from inkyy.com</p>
      </div>
    </div>
  );
};
export default CapabilitiesCard;
