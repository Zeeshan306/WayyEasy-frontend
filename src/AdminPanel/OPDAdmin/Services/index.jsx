import { useState, useEffect } from "react";
import { Button, Container, CircularProgress } from "@material-ui/core";
import AddIcon from "@material-ui/icons/Add";
import { useHistory } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";

// Import actions
import useStyles from "./styles";
import { fetchOPDServices } from "../../../redux/actions/admin/opdAdmin/services";
import Service from "./Service";

const Services = () => {
  const history = useHistory();
  const classes = useStyles();
  const dispatch = useDispatch();
  const store = useSelector((state) => state?.OPDServices?.allServices);
  const services = store?.serviceList;

  const createService = () => {
    history.push("/admin/opd/services/manageServices/");
  };

  useEffect(() => {
    dispatch(fetchOPDServices());
  }, [dispatch]);

  return (
    <Container className={classes.Container}>
      <div className={classes.globalBtn}>
        <Button variant="contained" color="primary" onClick={createService}>
          Add
          <AddIcon />
        </Button>
      </div>
      {services ? (
        services &&
        services?.map((service) => (
          <Service key={service?._id} service={service} />
        ))
      ) : (
        <CircularProgress style={{ marginTop: "10px" }} />
      )}
    </Container>
  );
};

export default Services;
