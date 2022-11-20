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
    width: 280,
    marginBottom: 10,
    padding: 20,
    zIndex: 1,
  },
  media: {
    position: "relative",
    width: 250,
    margin: "auto",
    borderRadius: 20,
    zIndex: 3,
  },
  blue: {
    position: "relative",
    margin: "auto",
    width: 260,
    marginTop: -50,
    zIndex: 2,
    borderRadius: 20,
    height: 60,
    backgroundColor: "#4200FF",
  },
});

const ArticlesCard = (props) => {
  const classes = useStyles();
  return (
    <Card
      className={classes.root}
      elevation={3}
      style={{
        height: props?.main ? 350 : 200,
        marginTop: props?.main ? 50 : 0,

      }}
    >
      <CardMedia
        style={{ height: props?.main ? 160 : 120 }}
        className={classes.media}
        title="articles image"
        image={image}
      />
      <div className={classes.blue}></div>
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
