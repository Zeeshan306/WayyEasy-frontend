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
    textAlign: "center",
    height: 160,
  },
  textArea: {
    height: 50,
    textAlign: "center",
  },
});

const ServicesCard = (props) => {
  const classes = useStyles();

  const handleClickEvent = () => {
    if (props.searchQuery) {
      props.setSearchQuery({ ...props.searchQuery, searchType: props.value });
    } else props.handleClickFunction(props.value);
  };

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
      onClick={handleClickEvent}
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
