import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardContent from "@material-ui/core/CardContent";
import Typography from "@material-ui/core/Typography";

const useStyles = makeStyles({
  root: {
    width: 240,
    margin: 10,
    borderRadius: 20,
  },
  container: {
    width: 240,
    height: 160,
  },
  textArea: {
    height: 50,
  }
});

const ServicesCard = (props) => {
  const classes = useStyles();

  return (
    <Card className={classes.root} style={{ background: props?.background }}>
      <CardActionArea className={classes.container}>
        <img src={props.image} alt="medical-service" />
      </CardActionArea>
        <CardContent className={classes.textArea}>
          <Typography
            variant="h6"
            component="h2"
            style={{ color: props?.color }}
          >
            {props.title}
          </Typography>
        </CardContent>
    </Card>
  );
};

export default ServicesCard;
