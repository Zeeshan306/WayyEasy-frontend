import { makeStyles } from "@material-ui/core/styles";

export default makeStyles((theme) => ({
  mainContainer: {
    position: "relative",
    paddingTop: "40px",
    paddingLeft: "20px",
  },
  singleRoom: {
    position: "relative",
    marginTop: "50px",
    marginRight: "20px",
    minHeight: "120px",
    display: "flex",
    float: "left",
    flexDirection: "column",
    maxWidth: "250px",
    textAlign: "center",
  },
  containerManage: {
    position: "relative",
    padding: "20px",
  },
  buttonSection: {
    position: "relative",
    display: "flex",
    justifyContent: "flex-end",
    marginBottom: "30px",
  },
}));
