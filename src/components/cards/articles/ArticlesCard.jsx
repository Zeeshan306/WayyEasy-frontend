import {
  Card,
  CardContent,
  CardMedia,
  makeStyles,
  Typography,
} from "@material-ui/core";
import React from "react";

import image from "../../../files/Images/articles_default.png";

const useStyles = makeStyles({
  root: {
    position: "relative",
    marginBottom: 10,
    padding: 10,
    zIndex: 1,
    display: "flex",
  },
  media: {
    position: "relative",
    margin: "auto",
    borderRadius: 20,
    zIndex: 3,
  },
  blue: {
    position: "relative",
    margin: "auto",
    marginTop: -50,
    zIndex: 2,
    borderRadius: 20,
    height: 60,
    backgroundColor: "#4200FF",
  },
});

const ArticlesCard = (props) => {
  let width = window.innerWidth;
  let alignStyle;

  const classes = useStyles();
  if (props?.main) {
    alignStyle = {
      style: {
        height: width <= 959 && width >= 700 ? 200 : 400,
        marginTop: 30,
        maxWidth: width <= 959 && width >= 700 ? 560 : 320,
        flexDirection: width <= 959 && width >= 700 ? "row" : "column",
      },
    };
  } else {
    alignStyle = {
      style: {
        height: width > 700 ? 200 : 400,
        maxWidth: width > 700 ? 560 : 320,
        flexDirection: width <= 700 ? "column" : "row",
      },
    };
  }
  return (
    <Card className={classes.root} elevation={3} style={alignStyle.style}>
      {" "}
      <div style={{ position: "relative" }}>
        <CardMedia
          style={{
            height: props?.main ? 160 : 190,
            width: props?.main ? 270 : 250,
          }}
          className={classes.media}
          title="articles image"
          image={image}
        />
        <div
          className={classes.blue}
          style={{ width: props?.main ? 280 : 260 }}
        ></div>
      </div>
      <CardContent style={{ position: "relative" }}>
        <Typography variant="h5" component="h2" gutterBottom>
          {props?.title}
        </Typography>
        <Typography
          sx={{
            display: "-webkit-box",
            overflow: "hidden",
            WebkitBoxOrient: "vertical",
            WebkitLineClamp: 1,
          }}
          variant="body1"
        >
          {props?.des}
        </Typography>
      </CardContent>
    </Card>
  );
};

export default ArticlesCard;
