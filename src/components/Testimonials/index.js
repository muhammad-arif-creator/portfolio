import React, { useState } from "react";
import styles from "./Testimonials.module.css";
import clientsData from "../../clientsData.js";
import Avatar from "./Avatar";

const Testimonials = () => {
  const [clients, setClients] = useState(clientsData);
  const [review, setReview] = useState([clientsData[0]]);
  const initialState = clientsData;

  const handleClient = (clientName) => {
    const clientItem = initialState.filter((item) => clientName === item.name);
    setReview(clientItem);
    console.log(clientItem);
  };
  return (
    <div className={styles.testimonialsWrapper}>
      <div className={styles.testimonialsInner}>
        <div className="container">
          <h2>What my Client Says</h2>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
            eiusmod tempor incididunt ut labore et t enim ad minim veniam, quis
            nostrud exercitation.
          </p>
        </div>
        <div className={styles.clientsWrapper}>
          <div className={styles.clientsLeft}>
            <div className={styles.Clients}>
              <div className={styles.mapImage}>
                <img alt="" src="./assets/images/map.png" />
              </div>

              <div className={styles.avatarWrapper}>
                {clients.map((client, index) => {
                  return (
                    <div
                      onClick={() => handleClient(client.name)}
                      className={styles.Avatar}
                    >
                      <Avatar image={client.image} key={index} />
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
          <div className={styles.clientsRight}>
            <img alt="" src="./assets/images/quote1.png" />
            {review.map((reviewText) => {
              return (
                <>
                  <p>
                    {reviewText.review}
                    <img alt="" src="./assets/images/quote1.png" />
                  </p>
                  <h5>-{reviewText.name}</h5>
                  <span>{reviewText.designation}</span>
                </>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Testimonials;
