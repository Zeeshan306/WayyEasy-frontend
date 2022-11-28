import {
  Card,
  CardContent,
  Typography,
  CardActions,
  Button,
} from "@material-ui/core";
import EditOutlinedIcon from "@material-ui/icons/EditOutlined";
import DeleteOutlineOutlinedIcon from "@material-ui/icons/DeleteOutlineOutlined";
import axios from "axios";
import { useHistory } from "react-router-dom";
import { useDispatch } from "react-redux";

import useStyles from "./styles";
import { deleteDoctor } from "../../../redux/actions/admin/hospitalAdmin/doctors";

const Doctor = ({ doctor }) => {
  const classes = useStyles();
  const history = useHistory();
  const dispatch = useDispatch();

  const deleteHospital = async (id) => {
    dispatch(deleteDoctor(id));
  };

  const editHospital = (id) => {
    history.push({
      pathname: `/admin/doctors/managedoctors/${id}`,
      state: doctor._id,
    });
  };

  return (
    <>
      <Card className={classes.singleCard}>
        <CardContent>
          <Typography style={classes.typos} variant="h4" color="text.secondary">
            {doctor?.name}
          </Typography>
          <Typography style={classes.typos} variant="h6" color="text.secondary">
            {doctor?.description}
          </Typography>
        </CardContent>
        <CardActions className={classes.actionBtns}>
          <Button
            onClick={() => editHospital(doctor._id)}
            style={{ width: "100%" }}
          >
            Edit &nbsp; <EditOutlinedIcon />
          </Button>
          <Button
            onClick={() => deleteHospital(doctor._id)}
            style={{ width: "100%" }}
          >
            Delete &nbsp; <DeleteOutlineOutlinedIcon />
          </Button>
        </CardActions>
      </Card>
    </>
  );
};

export default Doctor;
