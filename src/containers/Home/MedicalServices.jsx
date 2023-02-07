import React from "react";
import { Grid } from "@material-ui/core";

import Cards from "../../components/cards/services/ServicesCard.jsx";
import support from "../../files/Images/support.png";
import book from "../../files/Images/booking.png";
import details from "../../files/Images/details.png";
import location from "../../files/Images/location.png";

import home from "./home.module.css";

const MedicalServices = () => {
  const cardsList = [
    {
      key: "physician",
      title: "Consult a Doctor",
      image: support,
      background: "white",
      color: "black",
    },
    {
      key: "opd",
      title: "Book appoinmentfor OPD",
      image: location,
      background: "blue",
      color: "white",
    },
    {
      key: "pathLabs",
      title: "Path Labs",
      image: details,
      background: "white",
      color: "black",
    },
    {
      key: "doctor",
      title: "Consult a Doctor",
      image: book,
      background: "white",
      color: "black",
    },
  ];

  return (
    <div className={home.mSContainer}>
      <h1>What are you looking for?</h1>
      <Grid container justifyContent="space-around" className={home.cards}>
        {cardsList?.map((data) => (
          <Cards
            key={data.key}
            image={data?.image}
            background={data.background}
            color={data.color}
            title={data.title}
          />
        ))}
      </Grid>
    </div>
  );
};

export default MedicalServices;
