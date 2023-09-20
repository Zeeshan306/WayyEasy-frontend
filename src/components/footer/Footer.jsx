import { Grid } from "@material-ui/core";
import React from "react";

import logo from "../../files/Images/icon.svg";
import fbWhite from "../../files/Images/facebook_white.png";
import instaWhite from "../../files/Images/insta_white.png";
import linkedInWhite from "../../files/Images/linkedIn_white.png";
import foot from "./footer.module.css";

const Footer = () => {
  return (
    <Grid
      container
      justifyContent="space-around"
      className={foot.mainContainer}
    >
      <div className={foot.section1}>
        <img src={logo} alt="footer-logo" />
        <h4>Our vision</h4>
        <p>The world without fear and independent from all diseases.</p>
      </div>
      <div className={foot.section2}>
        <a href="#">WayyEasy Official Blog</a>
        {/* <a href="#">WayyEasy Official Circle</a> */}
        <a href="/privacy">Privacy Policy</a>
        <a href="/terms$conditions">Terms and Conditions</a>
        <a href="/refund">Refund Policies</a>
      </div>
      <div className={foot.section3}>
        <h3>Follow Us</h3>
        <a href="https://www.facebook.com/WayyEasy" target="_blank">
          <img className={foot.imageFb} src={fbWhite} alt="social-media" />
        </a>
        <a href="https://www.linkedin.com/company/wayyeasy/" target="_blank">
          <img
            className={foot.imageLinkedIn}
            src={linkedInWhite}
            alt="social-media"
          />
        </a>
        <a href="https://www.instagram.com/wayyeasy/" target="_blank">
          <img
            className={foot.imageInsta}
            style={{ width: "32px" }}
            src={instaWhite}
            alt="social-media"
          />
        </a>
      </div>
    </Grid>
  );
};

export default Footer;
