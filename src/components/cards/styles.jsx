import { makeStyles } from "@material-ui/core/styles";

export default makeStyles({
  root: {
    width: 200,
    height: 200,
    marginBottom: 15,
    paddingBottom: 15,
  },
  media: {
    height: 150,
  '& img': {
    height: 50,
  }
  },
});
