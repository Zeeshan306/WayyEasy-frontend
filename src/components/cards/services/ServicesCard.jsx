import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";

const useStyles = makeStyles({
  root: {
    width: 240,
    margin: 10,
  },
  container: {
    width: 240,
    height: 260,
  },
  media: {
    height: 100,
  },
});

const ServicesCard = (props) => {
  const classes = useStyles();

  return (
    <Card className={classes.root}>
      <CardActionArea
        className={classes.container}
        style={{ background: props?.background }}
      >
        <img src={props.image} alt="medical-service" />
        <CardContent>
          <Typography
            variant="h6"
            component="h2"
            style={{ color: props?.color }}
          >
            {props.title}
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  );
};

export default ServicesCard;
