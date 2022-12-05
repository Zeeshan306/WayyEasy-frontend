import { makeStyles } from "@material-ui/core/styles";

export default makeStyles({
  container: {
    position: "relative",
    paddingTop: "40px",
    paddingLeft: "20px",
  },
  singleCard: {
    position: "relative",
    marginTop: "20px",
    marginRight: "20px",
    minHeight: "120px",
    display: "flex",
  },
  actionBtns: {
    position: "absolute",
    width: "150px",
    right: "0px",
    display: "flex",
    height: "100%",
    flexDirection: "column",
    alignItems: "flex-end",
    background: "LightGray",
  },
  containerManage: {
    position: "relative",
    padding: "20px",
    marginBottom: "20px",
  },
  buttonSection: {
    position: "relative",
    display: "flex",
    justifyContent: "flex-end",
    marginBottom: "30px",
  },
});
