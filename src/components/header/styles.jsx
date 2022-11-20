import { alpha, makeStyles } from "@material-ui/core/styles";

export default makeStyles((theme) => ({
  grow: {
    flexGrow: 1,
  },
  title: {
    display: "none",
    [theme.breakpoints.up("sm")]: {
      display: "block",
    },
  },
  inputRoot: {
    color: "inherit",
  },
  inputInput: {
    padding: theme.spacing(1, 1, 1, 0),
    paddingLeft: `calc(1em + ${theme.spacing(4)}px)`,
    transition: theme.transitions.create("width"),
    width: "100%",
    [theme.breakpoints.up("md")]: {
      width: "20ch",
    },
  },
  sectionDesktop: {
    position: "absolute",
    right: "5vw",
    display: "none",
    [theme.breakpoints.up("md")]: {
      display: "flex",
    },
    "& a": {
      textDecoration: "none",
      marginRight: "30px",
      marginTop: "12px",
      fontSize: "18px",
      color: "black",
    },
  },
  sectionMobile: {
    position: "absolute",
    right: 0,
    [theme.breakpoints.up("md")]: {
      display: "none",
    },
  },
}));
