import {
  Button,
  CardMedia,
  Container,
  Grid,
  Typography,
} from "@material-ui/core";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { useHistory } from "react-router-dom";

import { doc, updateDoc, deleteField } from "firebase/firestore";
import { db } from "../../FireBase/Firebase";

import { editPhysicians } from "../../redux/actions/admin/physiciansAdmin/physicians";

import not from "./notification.module.css";
import { useEffect } from "react";

const Notification = () => {
  const history = useHistory();
  const dispatch = useDispatch();
  let notification = history?.location?.state;
  const [updatedData, setUpdatedData] = useState(notification.data);

  const updateDoctor = async (notification) => {
    dispatch(editPhysicians(notification.data.mongoId, updatedData, history));

    const docRef = doc(db, "doctors", notification.firebaseId);
    await updateDoc(docRef, {
      address: deleteField(),
      image: deleteField(),
      proofDocs: deleteField(),
      status: "active",
    });
  };

  useEffect(() => {
    setUpdatedData({ ...updatedData, status: "active" });
  }, []);

  return (
    <Container>
      <Grid container direction="row" justifyContent="space-evenly">
        <Typography>Name:</Typography>
        <Typography>{notification?.data?.name}</Typography>
      </Grid>
      <Grid container direction="row" justifyContent="space-evenly">
        <Typography>Description:</Typography>
        <Typography>{notification?.data?.description}</Typography>
      </Grid>
      <Grid container direction="row" justifyContent="space-evenly">
        <Typography>Email:</Typography>
        <Typography>{notification?.data?.email}</Typography>
      </Grid>
      <Grid container direction="row" justifyContent="space-evenly">
        <Typography>Address:</Typography>
        <Typography>{notification?.data?.address}</Typography>
      </Grid>
      <Grid container direction="row" justifyContent="space-evenly">
        <Typography>Mobile:</Typography>
        <Typography>{notification?.data?.mobile}</Typography>
      </Grid>
      <Grid container direction="row" justifyContent="space-evenly">
        <Typography>Price:</Typography>
        <Typography>{notification?.data?.price}</Typography>
      </Grid>
      <Grid container direction="row" justifyContent="space-evenly">
        <Typography>Qualifiation:</Typography>
        <Typography>{notification?.data?.qualification}</Typography>
      </Grid>
      <Grid container direction="row" justifyContent="space-evenly">
        <Typography>Speciality:</Typography>
        <Typography>{notification?.data?.specialityType}</Typography>
      </Grid>
      <Grid container direction="row" justifyContent="space-evenly">
        <Typography>Status:</Typography>
        <Typography>{notification?.data?.status}</Typography>
      </Grid>
      <CardMedia
        className={not.media}
        component="img"
        src={`data:image/jpeg;base64,${notification?.data?.proofDocs}`}
        title="Document Proof"
      />
      <div className={not.buttons}>
        <Button color="secondary" variant="contained">
          Reject
        </Button>
        <Button
          color="primary"
          variant="contained"
          onClick={() => updateDoctor(notification)}
        >
          Approve
        </Button>
      </div>
    </Container>
  );
};

export default Notification;
