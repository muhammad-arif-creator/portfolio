import React from "react";
import styles from "./Capabilities.module.css";
import CapabilitiesCard from "./Capabilitiescard";

const Capabilities = () => {
  return (
    <div className={styles.CapabilitiesWrapper}>
      <div className="container">
        <div className={styles.CapabilitiesInner}>
          <h2>My Capabilities</h2>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
            eiusmod tempor incididunt ut labore et t enim ad minim veniam, quis
            nostrud exercitation.
          </p>
          <div className={styles.CapabilitiesBoxes}>
            <CapabilitiesCard />
            <CapabilitiesCard />
            <CapabilitiesCard />
            <CapabilitiesCard />
            <CapabilitiesCard />
            <CapabilitiesCard />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Capabilities;
