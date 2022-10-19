import {
  Card,
  CardContent,
  Typography,
  CardActions,
  Button,
} from "@material-ui/core";
import { useDispatch } from "react-redux";
import { useHistory } from "react-router-dom";

import useStyles from "./styles";
import { deleteRoom } from "../../redux/actions/admin/rooms";

const Room = ({ room }) => {
  const classes = useStyles();
  const history = useHistory();
  const dispatch = useDispatch();

  const removeRoom = async (id) => {
    dispatch(deleteRoom(id));
  };

  const editRoom = (id) => {
    history.push({
      pathname: `/admin/room/manageRoom/${id}`,
      state: room._id,
    });
  };

  return (
    <>
      <Card container className={classes.singleRoom}>
        <CardContent>
          <Typography variant="h4" color="text.secondary">
            {room?.rooms?.roomType}
          </Typography>
          <Typography variant="h5" color="text.secondary">
            {room?.rooms?.total}
          </Typography>
        </CardContent>
        <CardActions className={classes.actionBtns}>
          <Button
            onClick={() => editHospital(hospital._id)}
            style={{ width: "100%" }}
          >
            View
          </Button>
          <Button onClick={() => editRoom(room._id)} style={{ width: "100%" }}>
            Edit
          </Button>
          <Button
            onClick={() => removeRoom(room._id)}
            style={{ width: "100%" }}
          >
            Delete
          </Button>
        </CardActions>
      </Card>
    </>
  );
};

export default Room;
