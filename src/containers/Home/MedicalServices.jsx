import React, { useState } from "react";
import { Grid, Switch } from "@material-ui/core";
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
import SearchCard from "../../components/cards/search/SearchCard.jsx";

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

  const data = [
    {
      id: 1,
      name: "Aleena Mumtaz",
      address: "46/a G. J. Khan Rood",
      description: "Very beautiful and lovely doctor",
      specialityType: "Chest Medicine"
    }, {
      id: 2,
      name: "Aleena Mumtaz 2",
      address: "46/a G. J. Khan Rood",
      description: "Very beautiful and lovely doctor",
      specialityType: "Chest Medicine"
    }, {
      id: 3,
      name: "Aleena Mumtaz 3",
      address: "46/a G. J. Khan Rood",
      description: "Very beautiful and lovely doctor",
      specialityType: "Chest Medicine"
    },
  ]

  const [searchQuery, setSearchQuery] = useState({
    name: null,
    address: null,
    searchType: null,
    availibility: true,
  });

  const handleSearch = () => {
    console.log(searchQuery);
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
            searchQuery={searchQuery}
            setSearchQuery={setSearchQuery}
          />
        ))}
      </Grid>
      {searchQuery?.searchType ? (
        <div className={home.searchHeader}>
          <h3>Find a {searchQuery.searchType}</h3>
          <div className={home.searchSection}>
            <input placeholder={`Search with ${searchQuery.searchType} name`}
              checked={searchQuery.name}
              onChange={e => setSearchQuery({ ...searchQuery, name: e.target.value })} />
            {searchQuery.searchType === "physician" ? (
              <div className={home.availibility}>
                <p>Availibility</p>
                <IOSSwitch
                  checked={searchQuery.availibility}
                  onChange={e => setSearchQuery({ ...searchQuery, availibility: e.target.checked })}
                  name="checkedB"
                />
              </div>
            ) : (
              <input placeholder="Search by city, pincode"
                checked={searchQuery.address}
                onChange={e => setSearchQuery({ ...searchQuery, address: e.target.value })} />
            )}
            <botton onClick={handleSearch} className={home.searchButton}>Search</botton>
          </div>
        </div>
      ) : (
        ""
      )}
      <Grid>
        {data.map(data => (
          <SearchCard key={data.id} data={data} />
        ))}
      </Grid>
    </div>
  );
};

export default MedicalServices;
