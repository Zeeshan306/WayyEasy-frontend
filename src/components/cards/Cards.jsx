import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Typography from "@material-ui/core/Typography";

import useStyles from "./styles.jsx";

const Cards = (props) => {
  const classes = useStyles();
  return (
    <Card className={classes.root} style={{ background: props.background }}>
      <CardActionArea className={classes.media}>
        <img src={props?.image} alt="wayy-easy" />
      </CardActionArea>
      <CardContent>
        <Typography gutterBottom variant="h6" component="h2">
          {props?.title}
        </Typography>
      </CardContent>
    </Card>
  );
};

export default Cards;
