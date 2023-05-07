import React, { useState } from "react";
import {
  Grid,
  Select,
  MenuItem,
  FormControl,
  InputLabel,
} from "@material-ui/core";

import { useDispatch, useSelector } from "react-redux";

import Cards from "../../components/cards/services/ServicesCard.jsx";
import physicianWhite from "../../files/Images/doc-white.png";
import physicianBlue from "../../files/Images/doc-blue.png";
import hospitalWhite from "../../files/Images/hos-white.png";
import hospitalBlue from "../../files/Images/hos-blue.png";
import pathLabWhite from "../../files/Images/path-lab-white.png";
import pathLabBlue from "../../files/Images/path-lab-blue.png";
import opdWhite from "../../files/Images/opd-white.png";
import opdBlue from "../../files/Images/opd-blue.png";

import SearchCard from "../../components/cards/search/SearchCard.jsx";

import home from "./home.module.css";
import { userSearch } from "../../redux/actions/user/homeSearch.js";

const MedicalServices = () => {
  const dispatch = useDispatch();
  const store = useSelector((store) => store);
  let searchedData = store?.homeSearch?.allSearchedPhysicians;

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

  const physicianTypeData = ["Chest Medicine", "Colon and Rectal Surgeons"];

  const [searchQuery, setSearchQuery] = useState({
    name: "",
    addressAndSpeciality: "",
    searchType: "",
  });

  const handleSearch = () => {
    dispatch(userSearch(new URLSearchParams(searchQuery).toString()));
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
            <input
              placeholder={`Search with ${searchQuery.searchType} name`}
              checked={searchQuery.name}
              onChange={(e) =>
                setSearchQuery({ ...searchQuery, name: e.target.value })
              }
            />
            {searchQuery.searchType === "physician" ? (
              <FormControl variant="outlined" className={home.formControl}>
                <InputLabel id="demo-simple-select-outlined-label">
                  Speciality
                </InputLabel>
                <Select
                  labelId="demo-simple-select-outlined-label"
                  id="demo-simple-select-outlined"
                  label="Select hospital"
                  onChange={(e) =>
                    setSearchQuery({
                      ...searchQuery,
                      addressAndSpeciality: e.target.value,
                    })
                  }
                  fullWidth
                >
                  {physicianTypeData?.map((data, i) => (
                    <MenuItem value={data} key={i}>
                      {data}
                    </MenuItem>
                  ))}
                </Select>
              </FormControl>
            ) : (
              <input
                placeholder="Search by city, pincode"
                checked={searchQuery.addressAndSpeciality}
                onChange={(e) =>
                  setSearchQuery({
                    ...searchQuery,
                    addressAndSpeciality: e.target.value,
                  })
                }
              />
            )}
            <botton onClick={handleSearch} className={home.searchButton}>
              {searchQuery.name || searchQuery.addressAndSpeciality
                ? "Search"
                : "Search All"}
            </botton>
          </div>
        </div>
      ) : (
        ""
      )}
      <Grid>
        {searchedData.map((data) => (
          <SearchCard key={data.id} data={data} />
        ))}
      </Grid>
    </div>
  );
};

export default MedicalServices;
