import React, { useState } from "react";
import styles from "./Header.module.css";

const Header = () => {
  const [toogle, setToggle] = useState("");
  const [menu, setMenu] = useState("");
  const toogleMenu = () => {
    setToggle(toogle === "" ? "on" : "");
    setMenu(menu === "" ? "show" : "");
  };
  return (
    <div className={styles.header}>
      <div className="container">
        <div className={styles.headerInner}>
          <div className={styles.headerShape}>
            <img src="/assets/images/header-shape.png"></img>
          </div>
          <div className={styles.logo}>
            <img alt="" src="/assets/images/logo.png" />
          </div>
          <div onClick={toogleMenu} id={styles.toggle} className={`${toogle}`}>
            <div className="one"></div>
            <div className="two"></div>
            <div className="three"></div>
          </div>
          <div className={`${styles.navBar} `}>
            <nav className={`${styles.nav} ${menu}`}>
              <a href="/#About ">About</a>
              <a href="/#Portfolio">Portfolio</a>
              <a href="/#Hire">Contact</a>
              <a className={styles.getStarted} href="/python/">
                Get Started
              </a>
            </nav>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
