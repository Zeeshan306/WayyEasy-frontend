import React, { useState } from "react";
import {
  Grid,
  Select,
  MenuItem,
  FormControl,
  InputLabel,
  CircularProgress,
  Typography,
} from "@material-ui/core";

import { useDispatch, useSelector } from "react-redux";

import Cards from "../../components/cards/services/ServicesCard.jsx";

import SearchCard from "../../components/cards/search/SearchCard.jsx";

import { userSearch } from "../../redux/actions/user/homeSearch.js";
import home from "./home.module.css";
import { useEffect } from "react";
import { alertType, cardsList } from "../../components/helpers/uiConstants.js";
import { ShowAlert } from "../../components/utility/commonFunctions.jsx";

const MedicalServices = () => {
  const dispatch = useDispatch();
  const [progress, setProgress] = useState(false);
  const store = useSelector((store) => store?.homeSearch);

  let searchedData = store?.allSearchedPhysicians;

  useEffect(() => {
    if (store.progress) setProgress(true);
    else setProgress(false);
  }, [dispatch, store?.progress]);

  const physicianTypeData = ["Chest Medicine", "Colon and Rectal Surgeons"];

  const [searchQuery, setSearchQuery] = useState({
    name: "",
    addressAndSpeciality: "",
    searchType: "",
  });

  const handleSearch = () => {
    dispatch(userSearch(new URLSearchParams(searchQuery).toString()));
  };

  console.log("store", store);

  return (
    <div className={home.mSContainer}>
      <h1>What are you looking for?</h1>
      <p>Click below for search</p>
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
      <div className={home.searchResult}>
        {store.error ? (
          <Typography variant="p">{store?.errorMessage}</Typography>
        ) : (
          ""
        )}

        {progress ? <CircularProgress /> : ""}

        {searchedData?.length > 0 ? (
          searchedData.map((data) => <SearchCard key={data.id} data={data} />)
        ) : (
          <Typography variant="p">
            {store.isSearching ? <ShowAlert alertType={alertType.error} message={"Oops!!! no data found"} /> : ""}
          </Typography>
        )}
      </div>
    </div>
  );
};

export default MedicalServices;
