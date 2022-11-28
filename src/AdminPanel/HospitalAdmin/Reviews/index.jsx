import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getHospitals } from "../../../redux/actions/admin/hospitalAdmin/hospital";
import { Select, InputLabel, FormControl, MenuItem } from "@material-ui/core";

import useStyles from "./styles";
import Ratings from "./Ratings";
import Reviews from "./Reviews";
import { getRatingsByHospital } from "../../../redux/actions/admin/hospitalAdmin/ratings";

const RatingAndReview = () => {
  const classes = useStyles();
  const dispatch = useDispatch();
  const store = useSelector((state) => state);
  const hospitals = store?.hospitals?.allHospitals?.data;
  const ratings = store?.ratings?.allRatings;
  const [hospitalId, setHospitalId] = useState("");

  const getRatings = (id) => {
    dispatch(getRatingsByHospital(id));
  };

  useEffect(() => {
    dispatch(getHospitals());
  }, [dispatch]);

  return (
    <>
      <FormControl variant="outlined" className={classes.formControl}>
        <InputLabel id="demo-simple-select-outlined-label">
          Select hospital
        </InputLabel>
        <Select
          labelId="demo-simple-select-outlined-label"
          id="demo-simple-select-outlined"
          label="Select hospital"
          onChange={(e) => {
            getRatings(e.target.value);
          }}
          fullWidth
        >
          {hospitals?.map((hospital) => (
            <MenuItem value={hospital?._id} key={hospital?.id}>{hospital?.name}</MenuItem>
          ))}
        </Select>
      </FormControl>
      <Ratings ratings={ratings} />
      <Reviews ratings={ratings} />
    </>
  );
};

export default RatingAndReview;
