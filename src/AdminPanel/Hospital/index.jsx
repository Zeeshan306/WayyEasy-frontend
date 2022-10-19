import { useState, useEffect } from "react";
import { Button, Container, CircularProgress } from "@material-ui/core";
import AddIcon from "@material-ui/icons/Add";
import { useHistory } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";

// Import actions
import useStyles from "./styles";
import Hospital from "./Hospital";
import { getHospitals } from "../../redux/actions/admin/hospital";

const Hospitals = () => {
  const history = useHistory();
  const [anchorEl, setAnchorEl] = useState(null);
  const classes = useStyles();
  const dispatch = useDispatch();
  const store = useSelector((state) => state?.hospitals?.allHospitals);
  const hospitals = store?.data;

  const createHospitals = () => {
    history.push("/admin/hospital/managehospital");
  };

  useEffect(() => {
    dispatch(getHospitals());
  }, [dispatch, hospitals?.length]);

  const handleClose = () => {
    setAnchorEl(null);
  };
  return (
    <Container className={classes.Container} maxWidth="md">
      <div className={classes.globalBtn}>
        <Button variant="contained" color="primary" onClick={createHospitals}>
          Add
          <AddIcon />
        </Button>
      </div>
      {hospitals ? (
        hospitals?.map((hospital) => (
          <Hospital key={hospital._id} hospital={hospital} />
        ))
      ) : (
        <CircularProgress style={{ marginTop: "10px" }} />
      )}
    </Container>
  );
};

export default Hospitals;
