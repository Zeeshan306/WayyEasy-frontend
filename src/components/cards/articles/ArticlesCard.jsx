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
    padding: 20,
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
        height: 400,
        marginTop: 30,
        maxWidth: 320,
        flexDirection: "column",
      },
    };
  } else {
    alignStyle = {
      style: {
        height: width > 959 ? 200: 400,
        maxWidth: width > 959 ? 560: 320,
        flexDirection: width <= 959 ? "column" : "row",
      },
    };
  }
  return (
    <Card className={classes.root} elevation={3} style={alignStyle.style}>
      {" "}
      <div>
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
      <CardContent>
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
