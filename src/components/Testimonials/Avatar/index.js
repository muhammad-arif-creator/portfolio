import React from "react";
import styles from "./Avatar.module.css";

const Avatar = (props) => {
  const test = () => {
    console.log("tetssst");
  };
  return <img alt="" alt={props.image} src={props.image} />;
};

export default Avatar;
