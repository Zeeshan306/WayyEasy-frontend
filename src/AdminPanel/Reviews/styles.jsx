import { makeStyles } from "@material-ui/core";

export default makeStyles((theme) => ({
  container: {
    marginLeft: "10px",
    marginTop: "30px",
    "& h1": {
      marginLeft: "30px",
      textDecoration: "underline",
    },
  },
  ratings: {
    paddingLeft: "20px",
  },
  progressSection: {
    display: "flex",
  },
  progressBar: {
    height: "20px",
    borderRadius: "15px",
    marginTop: "12px",
  },
  review: {
    paddingLeft: "20px",
    paddingBottom: "40px",
    marginTop: "40px",
    display: "flex",
    flexDirection: "column",
  },
  formControl: {
    margin: theme.spacing(2),
    minWidth: 360,
    marginLeft: "20px",
  },
  selectEmpty: {
    marginTop: theme.spacing(2),
  },
}));
