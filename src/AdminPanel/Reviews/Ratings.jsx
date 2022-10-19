import React from "react";
import { Paper, Typography, Grid, LinearProgress } from "@material-ui/core";

import useStyles from "./styles";
const Ratings = ({ ratings }) => {
  const classes = useStyles();

  const valueForMoney = ratings?.map((rating) => rating?.valueForMoney);
  var totalValueForMoney = 0;
  for (let i = 0; i < valueForMoney?.length; i++) {
    totalValueForMoney += valueForMoney[i];
  }
  const totalValueForMoneyRat =
    parseFloat(totalValueForMoney / valueForMoney?.length) * 20;

  const clean = ratings?.map((rating) => rating?.clean);
  var totalClean = 0;
  for (let i = 0; i < clean?.length; i++) {
    totalClean += clean[i];
  }
  const totalCleanRat = parseFloat(totalClean / clean?.length) * 20;

  const location = ratings?.map((rating) => rating?.location);
  var totalLocation = 0;
  for (let i = 0; i < location?.length; i++) {
    totalLocation += location[i];
  }
  const totalLocationRat = parseFloat(totalLocation / location?.length) * 20;

  const staffs = ratings?.map((rating) => rating?.staffs);
  var totalStaffs = 0;
  for (let i = 0; i < staffs?.length; i++) {
    totalStaffs += staffs[i];
  }
  const totalStaffsRat = parseFloat(totalStaffs / staffs?.length) * 20;

  const treatement = ratings?.map((rating) => rating?.treatement);
  var totalTreatement = 0;
  for (let i = 0; i < treatement?.length; i++) {
    totalTreatement += treatement[i];
  }
  const totalTreatementRat =
    parseFloat(totalTreatement / treatement?.length) * 20;

  let overAllRat =
    (totalTreatementRat +
      totalStaffsRat +
      totalValueForMoneyRat +
      totalLocationRat +
      totalCleanRat) /
    5;

  return (
    <div className={classes.container}>
      <h1>Ratings</h1>
      <Paper>
        {/* <FormControl variant="outlined" className={classes.formControl}>
          <InputLabel id="demo-simple-select-outlined-label">
            Select hospital
          </InputLabel>
          <Select
            labelId="demo-simple-select-outlined-label"
            id="demo-simple-select-outlined"
            label="Select hospital"
            onChange={(e) => {
              setHospital(e.target.value);
              getRatings(e.target.value);
              setHospitalId(e.target.value);
            }}
            fullWidth
          >
            {hospitals?.map((hospital) => (
              <MenuItem value={hospital?._id}>{hospital?.name}</MenuItem>
            ))}
          </Select>
        </FormControl> */}
        <Grid container spacing={1}>
          <Grid item xs={12} md={4}>
            <Typography className={classes.ratings} variant="h5">
              Staffs
            </Typography>
          </Grid>
          <Grid container spacing={4} item xs={12} md={8}>
            <Grid item xs={9} md={11}>
              <LinearProgress
                className={classes.progressBar}
                variant="determinate"
                value={totalStaffsRat ? totalStaffsRat : 0}
              />
            </Grid>
            <Grid item xs={3} md={1}>
              <Typography style={{ marginTop: "7px" }} variant="h6">
                {totalStaffsRat / 10}
              </Typography>
            </Grid>
          </Grid>
          <Grid item xs={6} md={4}></Grid>
          <Grid item xs={6} md={8}></Grid>
          <Grid item xs={12} md={4}>
            <Typography className={classes.ratings} variant="h5">
              Clean
            </Typography>
          </Grid>
          <Grid container spacing={4} item xs={12} md={8}>
            <Grid item xs={9} md={11}>
              <LinearProgress
                className={classes.progressBar}
                variant="determinate"
                value={totalCleanRat ? totalCleanRat : 0}
              />
            </Grid>
            <Grid item xs={3} md={1}>
              <Typography style={{ marginTop: "7px" }} variant="h6">
                {totalCleanRat / 10}
              </Typography>
            </Grid>
          </Grid>
          <Grid item xs={12} md={4}>
            <Typography className={classes.ratings} variant="h5">
              Treatement
            </Typography>
          </Grid>
          <Grid container spacing={4} item xs={12} md={8}>
            <Grid item xs={9} md={11}>
              <LinearProgress
                className={classes.progressBar}
                variant="determinate"
                value={totalTreatementRat ? totalTreatementRat : 0}
              />
            </Grid>
            <Grid item xs={3} md={1}>
              <Typography style={{ marginTop: "7px" }} variant="h6">
                {totalTreatementRat / 10}
              </Typography>
            </Grid>
          </Grid>
          <Grid item xs={6} md={4}></Grid>
          <Grid item xs={6} md={8}></Grid>
          <Grid item xs={12} md={4}>
            <Typography className={classes.ratings} variant="h5">
              Location
            </Typography>
          </Grid>
          <Grid container spacing={4} item xs={12} md={8}>
            <Grid item xs={9} md={11}>
              <LinearProgress
                className={classes.progressBar}
                variant="determinate"
                value={totalLocationRat ? totalLocationRat : 0}
              />
            </Grid>
            <Grid item xs={3} md={1}>
              <Typography style={{ marginTop: "7px" }} variant="h6">
                {totalLocationRat / 10}
              </Typography>
            </Grid>
          </Grid>
          <Grid item xs={6} md={4}></Grid>
          <Grid item xs={6} md={8}></Grid>
          <Grid item xs={12} md={4}>
            <Typography className={classes.ratings} variant="h5">
              Valur for money
            </Typography>
          </Grid>
          <Grid container spacing={4} item xs={12} md={8}>
            <Grid item xs={9} md={11}>
              <LinearProgress
                className={classes.progressBar}
                variant="determinate"
                value={totalValueForMoneyRat ? totalValueForMoneyRat : 0}
              />
            </Grid>
            <Grid item xs={3} md={1}>
              <Typography style={{ marginTop: "7px" }} variant="h6">
                {totalValueForMoneyRat / 10}
              </Typography>
            </Grid>
          </Grid>
          <Grid item xs={6} md={4}></Grid>
          <Grid item xs={6} md={8}></Grid>
          <Grid item xs={6} md={4}></Grid>
          <Grid item xs={6} md={8}></Grid>
          <Grid item xs={12} md={4}>
            <Typography className={classes.ratings} variant="h5">
              Overall
            </Typography>
          </Grid>
          <Grid container spacing={4} item xs={12} md={8}>
            <Grid item xs={9} md={11}>
              <LinearProgress
                color="secondary"
                className={classes.progressBar}
                variant="determinate"
                value={overAllRat ? overAllRat : 0}
              />
            </Grid>
            <Grid item xs={3} md={1}>
              <Typography style={{ marginTop: "7px" }} variant="h6">
                {overAllRat / 10}
              </Typography>
            </Grid>
          </Grid>
          <Grid item xs={6} md={4}></Grid>
          <Grid item xs={6} md={8}></Grid>
        </Grid>
      </Paper>
    </div>
  );
};

export default Ratings;
