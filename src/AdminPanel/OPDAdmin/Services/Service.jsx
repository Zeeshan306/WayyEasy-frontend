import {
  Card,
  CardContent,
  Typography,
  CardActions,
  Button,
} from "@material-ui/core";
import EditOutlinedIcon from "@material-ui/icons/EditOutlined";
import DeleteOutlineOutlinedIcon from "@material-ui/icons/DeleteOutlineOutlined";
import VisibilityOutlinedIcon from "@material-ui/icons/VisibilityOutlined";
import { useHistory } from "react-router-dom";
import { useDispatch } from "react-redux";

import useStyles from "./styles";
import { deleteOPDService } from "../../../redux/actions/admin/opdAdmin/services";

const Service = ({ service }) => {
  const classes = useStyles();
  const history = useHistory();
  const dispatch = useDispatch();

  const deleteService = async (id) => {
    dispatch(deleteOPDService(id));
  };

  const editService = (service) => {
    history.push({
      pathname: `/admin/opd/services/manageServices/${service._id}`,
      state: service,
    });
  };

  const viewService = (service) => {
    history.push({
      pathname: `/admin/opd/services/service/${service._id}`,
      state: service,
    });
  };

  return (
    <>
      <Card className={classes.singleCard}>
        <CardContent>
          <Typography style={classes.typos} variant="h4">
            {service?.name}
          </Typography>
          <Typography style={classes.typos} variant="h6">
            {service?.price}
          </Typography>
        </CardContent>
        <CardActions className={classes.actionBtns}>
          <Button
            onClick={() => viewService(service)}
            style={{ width: "100%" }}
          >
            View &nbsp; <VisibilityOutlinedIcon />
          </Button>
          <Button
            onClick={() => editService(service)}
            style={{ width: "100%" }}
          >
            Edit &nbsp; <EditOutlinedIcon />
          </Button>
          <Button
            onClick={() => deleteService(service._id)}
            style={{ width: "100%" }}
          >
            Delete &nbsp; <DeleteOutlineOutlinedIcon />
          </Button>
        </CardActions>
      </Card>
    </>
  );
};

export default Service;
