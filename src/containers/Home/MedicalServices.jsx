import React from "react";

import Cards from "../../components/cards/services/ServicesCard.jsx";
import support from "../../files/Images/support.png";
import book from "../../files/Images/booking.png";
import details from "../../files/Images/details.png";
import location from "../../files/Images/location.png";

import home from "./home.module.css";

const MedicalServices = () => {
  return (
    <div className={home.mSContainer}>
      <h1>Our Medical Services</h1>
      <p>
        We are dedicated to serve you
        <br />
        best medical services
      </p>
      <div className={home.cards}>
        <Cards
          image={details}
          background="white"
          color="black"
          title="Get all details"
        />
        <Cards
          image={location}
          background="blue"
          color="white"
          title="Track location"
        />
        <Cards
          image={book}
          background="white"
          color="black"
          title="Book hospital"
        />
        <Cards
          image={support}
          background="white"
          color="black"
          title="24x7 Support"
        />
      </div>
    </div>
  );
};

export default MedicalServices;
