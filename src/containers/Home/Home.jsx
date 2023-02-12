import React from "react";

import watchVideo from "../../files/Images/watch_video.png";
import introImage from "../../files/Images/intro_image.png";
import MedicalServices from "./MedicalServices";
import Testimonial from "./Testimonial";
import Articles from "./Articles";

import home from "./home.module.css";

const Home = () => {
  return (
    <div className={home.mainContainer}>
      <div className={home.sectionOne}>
        <div className={home.introFirst}>
          <h1>
            <b>We care</b>
            <br />
            about your health
          </h1>
          <p>
            Good health is the state of mental, physical and social well being
            and it does not just mean absence of diseases.
          </p>
          <div className={home.introFirstButton}>
            <button>
              Search for hospital &nbsp;&nbsp;&nbsp;&nbsp; <span>&#x27F6;</span>
            </button>
            <button>
              <img src={watchVideo} alt="wayy-easy" />
              Watch Video
            </button>
          </div>
        </div>
        <div className={home.introSecond}>
          <div className={home.introSecondCircle}>
            <div className={home.introSecondCircle2}>
              <img src={introImage} alt="intro-image" />
            </div>
          </div>
        </div>
      </div>
      <MedicalServices />
      {/* <Testimonial /> */}
      <Articles />
    </div>
  );
};

export default Home;
