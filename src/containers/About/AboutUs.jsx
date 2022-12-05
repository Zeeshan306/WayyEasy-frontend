import React from "react";

import image from "../../files/Images/about-us-top.jpg";
import about from "./aboutus.module.css";

const AboutUs = () => {
  return (
    <div className={about.mainContainer}>
      <div className={about.sectionOne}>
        <div className={about.oneFirstHalf}>
          <h1>Our Mission</h1>
          WayyEasy is on a mission to bridge the gap between the end users/needy
          ones with the health services. With WayyEasy user can:
          <ul>
            <li>connect with doctors for consultancy.</li>
            <li>
              have their different diagonastic test from their preferred OPDs
            </li>
            <li>
              have extreme health care support from their preferred Path Labs
            </li>
            <li>
              book a hospital directly from their home sitting in their couch
            </li>
          </ul>
        </div>
        <div className={about.oneSecondHalf}>
          <img src={image} alt="about-us" />
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
