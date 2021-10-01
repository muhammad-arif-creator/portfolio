import React from "react";
import styles from "./Footer.module.css";
const Footer = () => {
  return (
    <div className={styles.footerWrapper}>
      <div className="container">
        <div className={styles.footerInner}>
          <div className={styles.footerLogo}>
            <img alt="" src="/assets/images/logo.png" />
          </div>
          <div className={styles.footerLiks}>
            <nav className={`${styles.nav} `}>
              <a href="/html/">About</a>
              <a href="/css/">Portfolio</a>
              <a href="/js/">Contact</a>
            </nav>
          </div>
          <p className={styles.cotactAddress}>
            NY / <a href="tel:+1234567"> +1 123456 7890</a>
            <span> / </span>
            <a href="mailto:hello@graphics.studio.com">
              hello@graphics.studio.com
            </a>
          </p>
          <div className={styles.socialIcons}>
            <img alt="" src="./assets/images/behance.png" />
            <img alt="" src="./assets/images/dribbble.png" />
            <img alt="" src="./assets/images/insta.png" />
            <img alt="" src="./assets/images/linkedin.png" />
            <img alt="" src="./assets/images/pinterest.png" />
          </div>
        </div>
      </div>
      <div className={styles.copyRights}>
        <p>Copyright © 2019 Graphics Studio | All rights reserved</p>
      </div>
    </div>
  );
};

export default Footer;
