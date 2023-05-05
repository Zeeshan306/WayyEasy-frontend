import React, { useState } from "react";
import { FormControlLabel, Grid, Switch } from "@material-ui/core";
import { withStyles } from "@material-ui/core/styles";

import Cards from "../../components/cards/services/ServicesCard.jsx";
import physicianWhite from "../../files/Images/doc-white.png";
import physicianBlue from "../../files/Images/doc-blue.png";
import hospitalWhite from "../../files/Images/hos-white.png";
import hospitalBlue from "../../files/Images/hos-blue.png";
import pathLabWhite from "../../files/Images/path-lab-white.png";
import pathLabBlue from "../../files/Images/path-lab-blue.png";
import opdWhite from "../../files/Images/opd-white.png";
import opdBlue from "../../files/Images/opd-blue.png";

import home from "./home.module.css";

const IOSSwitch = withStyles((theme) => ({
  root: {
    width: 42,
    height: 26,
    padding: 0,
    margin: theme.spacing(1),
  },
  switchBase: {
    padding: 1,
    "&$checked": {
      transform: "translateX(16px)",
      color: theme.palette.common.white,
      "& + $track": {
        backgroundColor: "#4200ff",
        opacity: 1,
        border: "none",
      },
    },
    "&$focusVisible $thumb": {
      color: "#52d869",
      border: "6px solid #e6e6e6",
    },
  },
  thumb: {
    width: 24,
    height: 24,
  },
  track: {
    borderRadius: 26 / 2,
    border: `1px solid ${theme.palette.grey[400]}`,
    backgroundColor: theme.palette.grey[50],
    opacity: 1,
    transition: theme.transitions.create(["background-color", "border"]),
  },
  checked: {},
  focusVisible: {},
}))(({ classes, ...props }) => {
  return (
    <Switch
      focusVisibleClassName={classes.focusVisible}
      disableRipple
      classes={{
        root: classes.root,
        switchBase: classes.switchBase,
        thumb: classes.thumb,
        track: classes.track,
        checked: classes.checked,
      }}
      {...props}
    />
  );
});

const MedicalServices = () => {
  const cardsList = [
    {
      key: "physician",
      value: "physician",
      title: "Looking for a Doctor",
      image: physicianBlue,
      hoverImage: physicianWhite,
      background: "white",
      hoverBackground: "#4200FF",
      color: "black",
      hoverColor: "white",
    },
    {
      key: "opd",
      value: "opd",
      title: "Test from OPD",
      image: opdBlue,
      hoverImage: opdWhite,
      background: "white",
      hoverBackground: "#4200FF",
      color: "black",
      hoverColor: "white",
    },
    {
      key: "pathLabs",
      value: "pathLab",
      title: "Test from Path Lab",
      image: pathLabBlue,
      hoverImage: pathLabWhite,
      background: "white",
      hoverBackground: "#4200FF",
      color: "black",
      hoverColor: "white",
    },
    {
      key: "hospital",
      value: "hospital",
      title: "Book Hospital",
      image: hospitalBlue,
      hoverImage: hospitalWhite,
      background: "white",
      hoverBackground: "#4200FF",
      color: "black",
      hoverColor: "white",
    },
  ];

  const [searchType, setSearchType] = useState(null);

  const [state, setState] = React.useState({
    checkedA: true,
    checkedB: true,
  });

  const handleChange = (event) => {
    setState({ ...state, [event.target.name]: event.target.checked });
  };

  const handleSearch = () => {
    console.log(searchType);
  };

  return (
    <div className={home.mSContainer}>
      <h1>What are you looking for?</h1>
      <Grid container justifyContent="space-around" className={home.cards}>
        {cardsList?.map((data) => (
          <Cards
            key={data.key}
            value={data.value}
            image={data.image}
            hoverImage={data.hoverImage}
            background={data.background}
            hoverBackground={data.hoverBackground}
            color={data.color}
            hoverColor={data.hoverColor}
            title={data.title}
            handleSearch={handleSearch}
            setSearchType={setSearchType}
          />
        ))}
      </Grid>
      {searchType ? (
        <div className={home.searchHeader}>
          <h3>Find a {searchType}</h3>
          <div className={home.searchSection}>
            <input placeholder="Search with hospital name" />
            {searchType === "physician" ? (
              <div className={home.availibility}>
                <p>Availibility</p>
                <IOSSwitch
                  checked={state.checkedB}
                  onChange={handleChange}
                  name="checkedB"
                />
              </div>
            ) : (
              <input placeholder="Search by city, pincode" />
            )}
            <botton className={home.searchButton}>Search</botton>
          </div>
        </div>
      ) : (
        ""
      )}
    </div>
  );
};

export default MedicalServices;
