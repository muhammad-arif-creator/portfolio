import React from "react";
import styles from "./About.module.css";

const About = () => {
  return (
    <div id="About" className={styles.aboutWrapper}>
      <div className="container">
        <div className={styles.aboutInner}>
          <div className={styles.aboutleft}>
            <h2>About Me</h2>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat
            </p>
            <p>
              Duis aute irure dolor in reprehenderit in voluptate velit esse
              cillum dolore eu fugiat nulla pariatur.
            </p>
            <div className={styles.downloadCv}>
              <button className={`btn`}>Download CV</button>
            </div>
          </div>
          <div className={styles.aboutRight}>
            <img alt="" src="./assets/images/about.png" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
