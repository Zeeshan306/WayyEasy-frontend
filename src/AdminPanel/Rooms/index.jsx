import React, { useEffect } from "react";
import { useHistory } from "react-router-dom";
import { Container, Button, CircularProgress } from "@material-ui/core";
import AddIcon from "@material-ui/icons/Add";
import { useDispatch, useSelector } from "react-redux";

import Room from "./Room";
import useStyles from "./styles";
import { fetchRooms } from "../../redux/actions/admin/rooms";

const Rooms = () => {
  const history = useHistory();
  const classes = useStyles();
  const dispatch = useDispatch();
  const store = useSelector((state) => state?.rooms?.allRooms);
  const rooms = store?.data;

  useEffect(() => {
    dispatch(fetchRooms());
  }, [dispatch, rooms?.length]);

  return (
    <Container className={classes.Container} maxWidth="md">
      <div className={classes.globalBtn}>
        <Button
          variant="contained"
          color="primary"
          onClick={() => history.push("/admin/room/manageRoom")}
        >
          Add
          <AddIcon />
        </Button>
      </div>
      {rooms ? (
        rooms?.map((room, index) => <Room key={index} room={room} />)
      ) : (
        <CircularProgress style={{ marginTop: "10px" }} />
      )}
    </Container>
  );
};

export default Rooms;
