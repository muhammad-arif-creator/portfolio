import React from "react";
import styles from "./Banner.module.css";

const Banner = () => {
  return (
    <div className={styles.bannerWrapper}>
      <div className="container">
        <div className={styles.bannerInner}>
          <div className={styles.circle}>
            <img src="assets/images/circle.png"></img>
          </div>
          <div className={styles.bannerLeft}>
            <span>Hello, I am </span>
            <h1>
              Mark
              <br /> Reccardo
            </h1>
            <p>
              A young <span>UI/UX</span> designer with crazy for mobile & web
              design.
            </p>
            <div className={styles.socialProfiles}>
              <p>Find me on </p>
              <div className={styles.socialIcons}>
                <img alt="" src="./assets/images/behance.png" />
                <img alt="" src="./assets/images/dribbble.png" />
                <img alt="" src="./assets/images/insta.png" />
                <img alt="" src="./assets/images/linkedin.png" />
                <img alt="" src="./assets/images/pinterest.png" />
              </div>
            </div>
            <div className={styles.bannerButtons}>
              <button className={`btn`}>Hire Me</button>
              <button className={`btn`}>Portfolio</button>
            </div>
          </div>
          <div className={styles.bannerRight}>
            <div className={styles.userImage}>
              <img alt="" src="./assets/images/user.png"></img>
            </div>
          </div>
        </div>
      </div>
      <div className={styles.shape2}>
        <img alt="" src="./assets/images/shape2.png" />
      </div>
    </div>
  );
};

export default Banner;
