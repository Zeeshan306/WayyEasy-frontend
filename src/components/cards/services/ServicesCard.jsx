import React, { useState } from "react";
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
    "&:hover": {
      cursor: "pointer",
    },
  },
  container: {
    width: 240,
    height: 160,
  },
  textArea: {
    height: 50,
  },
});

const ServicesCard = (props) => {
  const classes = useStyles();

  const [hover, setHover] = useState(false);

  const handleMouseEnter = () => {
    setHover(true);
  };

  const handleMouseLeave = () => {
    setHover(false);
  };

  return (
    <Card
      onMouseOver={handleMouseEnter}
      onMouseOut={handleMouseLeave}
      onClick={() => {
        props.setSearchType(props.value);
        props.handleSearch();
      }}
      className={classes.root}
      style={{ background: hover ? props.hoverBackground : props?.background }}
    >
      <CardActionArea className={classes.container}>
        <img
          src={hover ? props.hoverImage : props.image}
          alt="medical-service"
        />
      </CardActionArea>
      <CardContent className={classes.textArea}>
        <Typography
          variant="h6"
          component="h2"
          style={{ color: hover ? props.hoverColor : props.color }}
        >
          {props.title}
        </Typography>
      </CardContent>
    </Card>
  );
};

export default ServicesCard;
