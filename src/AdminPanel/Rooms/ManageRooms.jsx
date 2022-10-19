import {
  TextField,
  Typography,
  Select,
  Box,
  Button,
  MenuItem,
  Grid,
  FormControl,
  NativeSelect,
  InputLabel,
  IconButton,
} from "@material-ui/core";
import AddIcon from "@material-ui/icons/Add";
import RemoveIcon from "@material-ui/icons/Remove";
import ExitToAppIcon from "@material-ui/icons/ExitToApp";
import { useHistory } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import FileBase from "react-file-base64";

import useStyles from "./styles";
import { useEffect, useState } from "react";
import {
  createRoom,
  fetchSingleRoom,
  updateRoom,
} from "../../redux/actions/admin/rooms";
import { getHospitals } from "../../redux/actions/admin/hospital";

const ManageRoom = (hospital) => {
  const createRooms = {
    hospital: "",
    rooms: {
      roomType: "",
      total: "",
      price: "",
      roomDetails: [],
      image: [],
    },
  };
  const [roomData, setRoomData] = useState(createRooms);
  const [roomDetail, setRoomDetail] = useState([
    {
      roomNo: "",
      available: "",
    },
  ]);
  const classes = useStyles();
  const dispatch = useDispatch();
  const history = useHistory();
  const store = useSelector((data) => data);
  const hospitals = store?.hospitals?.allHospitals?.data;
  const room = store?.rooms?.singleRoom?.data;
  let id = hospital?.location?.state;

  const roomsType = [
    { value: "Twin Sharing", name: "Twin Sharing" },
    { value: "Premium Twin Sharing", name: "Premium Twin Sharing" },
    { value: "Delux", name: "Delux" },
    { value: "Suite", name: "Suite" },
    { value: "Day Care", name: "Day Care" },
    { value: "General", name: "General" },
    { value: "Cabin", name: "Cabin" },
    { value: "Deluxe Suite", name: "Deluxe Suite" },
    { value: "Special Economy", name: "Special Economy" },
    { value: "CTVS-ICU", name: "CTVS-ICU" },
    { value: "CCU", name: "CCU" },
    { value: "Medical ICU", name: "Medical ICU" },
    { value: "Neuro ICU", name: "Neuro ICU" },
    { value: "Burn Unit", name: "Burn Unit" },
    { value: "HDU ICU", name: "HDU ICU" },
    { value: "Gynae Unit", name: "Gynae Unit" },
    { value: "PICU", name: "PICU" },
    { value: "Paed Care Unit", name: "Twin Sharing" },
    { value: "Nursery", name: "Nursery" },
    { value: "Neonatal ICU", name: "Neonatal ICU" },
    { value: "Casuality", name: "Casuality" },
    { value: "CTVS Step Down", name: "CTVS Step Down" },
    { value: "CCU Step Down", name: "CCU Step Down" },
  ];

  useEffect(() => {
    if (id) {
      dispatch(fetchSingleRoom(id));
    } else setRoomData(createRooms);
  }, [id]);

  useEffect(() => {
    if (room) setRoomData(room);
  }, [room]);

  useEffect(() => {
    dispatch(getHospitals());
  }, [dispatch]);

  const handleSubmit = async () => {
    roomData.rooms.roomDetails = roomData.rooms.roomDetails.concat(roomDetail);
    if (!roomData.hospital) {
      window.alert("Please select hospital!!!");
      return;
    }
    if (!roomData.rooms.roomDetails.length > 0) {
      window.alert("No room found!!!");
      return;
    }
    if (id) {
      try {
        dispatch(updateRoom(id, roomData, history));
      } catch (error) {
        console.log(error);
      }
    } else {
      try {
        dispatch(createRoom(roomData, history));
      } catch (error) {
        console.log(error);
      }
    }
  };

  const handeAddRoomDetails = () => {
    setRoomDetail([...roomDetail, { roomNo: "", available: "" }]);
  };

  const handeRemoveRoomsDetails = (index) => {
    const delVal = [...roomDetail];
    delVal.splice(index, 1);
    setRoomDetail(delVal);
  };

  const habdlleChangeRoomDetails = (data, index) => {
    const values = [...roomDetail];
    values[index][data.target.name] = data.target.value;
    setRoomDetail(values);
  };

  const selectImage = (e) => {
    roomData.rooms.image = roomData.rooms.image.concat(
      e.map((img) => img.base64)
    );
  };

  return (
    <div className={classes.containerManage}>
      <h1 style={{ marginTop: "0px", marginBottom: "20px" }}>Rooms</h1>
      <div className={classes.inputSection}>
        <ExitToAppIcon
          onClick={() => history.push("/admin/rooms")}
          style={{ cursor: "pointer", transform: "rotate(180deg)" }}
          fontSize="large"
          color="secondary"
        />
        <Box className={classes.buttonSection}>
          <Button
            variant="contained"
            onClick={handleSubmit}
            style={{ marginRight: "10px" }}
            color="primary"
          >
            Save
          </Button>
        </Box>
        <Grid container spacing={2}>
          <Grid item xs={5} md={2}>
            <Typography variant="h6">Room Type</Typography>
          </Grid>
          <Grid item xs={7} md={10}>
            <Select
              variant="outlined"
              value={roomData.rooms.roomType}
              style={{ height: "40px", backgroundColor: "#fff" }}
              onChange={(e) => {
                setRoomData({
                  ...roomData,
                  rooms: { ...roomData.rooms, roomType: e.target.value },
                });
              }}
              fullWidth
            >
              {roomsType &&
                roomsType?.map((data, index) => (
                  <MenuItem key={index} value={data.value}>
                    {data.name}
                  </MenuItem>
                ))}
            </Select>
          </Grid>

          {/* Room Details */}
          {roomDetail.map((data, index) => {
            return (
              <>
                <Grid item xs={5} md={2}>
                  <Typography variant="h6">Room Number</Typography>
                </Grid>
                <Grid item xs={7} md={4}>
                  <TextField
                    size="small"
                    name="roomNo"
                    value={roomDetail.roomNo}
                    onChange={(e) => habdlleChangeRoomDetails(e, index)}
                    style={{ marginTop: "10px", marginBottom: "10px" }}
                    fullWidth
                    type="search"
                    variant="outlined"
                  />
                </Grid>
                <Grid item xs={5} md={2}>
                  <Typography variant="h6">Availability</Typography>
                </Grid>
                <Grid item xs={4} md={2}>
                  <FormControl fullWidth>
                    <InputLabel
                      variant="standard"
                      htmlFor="uncontrolled-native"
                    />
                    <NativeSelect
                      name="available"
                      value={roomDetail.available}
                      onChange={(e) => habdlleChangeRoomDetails(e, index)}
                    >
                      <option default value={0}>
                        Select
                      </option>
                      <option value={"yes"}>Available</option>
                      <option value={"no"}>Un-available</option>
                    </NativeSelect>
                  </FormControl>
                </Grid>
                <Grid item xs={3} md={2} align="right">
                  <IconButton onClick={() => handeRemoveRoomsDetails(index)}>
                    <RemoveIcon />
                  </IconButton>
                  <IconButton onClick={() => handeAddRoomDetails()}>
                    <AddIcon />
                  </IconButton>
                </Grid>
              </>
            );
          })}

          <Grid item xs={5} md={2}>
            <Typography variant="h6">Total rooms</Typography>
          </Grid>
          <Grid item xs={7} md={4}>
            <TextField
              size="small"
              value={roomData.rooms.total}
              onChange={(e) =>
                setRoomData({
                  ...roomData,
                  rooms: { ...roomData.rooms, total: e.target.value },
                })
              }
              style={{ marginTop: "10px", marginBottom: "10px" }}
              fullWidth
              variant="outlined"
            />
          </Grid>
          <Grid item xs={5} md={2}>
            <Typography variant="h6">Price/day</Typography>
          </Grid>
          <Grid item xs={7} md={4}>
            <TextField
              size="small"
              value={roomData.rooms.price}
              onChange={(e) =>
                setRoomData({
                  ...roomData,
                  rooms: { ...roomData.rooms, price: e.target.value },
                })
              }
              style={{ marginTop: "10px", marginBottom: "10px" }}
              fullWidth
              type="number"
              variant="outlined"
            />
          </Grid>
          <Grid item xs={5} md={2}>
            <Typography variant="h6">Hospital</Typography>
          </Grid>
          <Grid item xs={7} md={10}>
            <Select
              variant="outlined"
              style={{ height: "40px", backgroundColor: "#fff" }}
              value={roomData.hospital}
              onChange={(e) =>
                setRoomData({ ...roomData, hospital: e.target.value })
              }
              fullWidth
            >
              {hospitals?.map((hospital, index) => (
                <MenuItem key={index} value={hospital?._id}>
                  {hospital?.name}
                </MenuItem>
              ))}
            </Select>
          </Grid>
          <Grid item xs={5} md={2}>
            <Typography variant="h6">Image</Typography>
          </Grid>
          <Grid style={{ marginTop: "10px" }} item xs={7} md={10}>
            <FileBase
              type="file"
              fullWidth
              multiple={true}
              onDone={(e) => selectImage(e)}
            />
          </Grid>
        </Grid>
      </div>
    </div>
  );
};

export default ManageRoom;
