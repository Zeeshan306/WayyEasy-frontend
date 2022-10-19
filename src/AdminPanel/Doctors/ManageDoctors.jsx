import {
  TextField,
  Typography,
  TextareaAutosize,
  Box,
  Button,
  FormControl,
  MenuItem,
  Select,
  InputLabel,
  Grid,
} from "@material-ui/core";
import ExitToAppIcon from "@material-ui/icons/ExitToApp";
import { useHistory } from "react-router-dom";
import FileBase from "react-file-base64";
import { useDispatch, useSelector } from "react-redux";

import useStyles from "./styles";
import { useEffect, useState } from "react";
import {
  createDoctor,
  fetchSingleDoctor,
  updateDoctor,
} from "../../redux/actions/admin/doctors";
import { getHospitals } from "../../redux/actions/admin/hospital";

const ManageDoctors = (hospital) => {
  const initialData = {
    name: "",
    age: "",
    qualification: "",
    specialist: "",
    charges: "",
    experience: "",
    mobile: "",
    description: "",
    hospital: "",
    image: "",
  };
  const [doctorsData, setDoctorsData] = useState(initialData);
  const classes = useStyles();
  const history = useHistory();
  const dispatch = useDispatch();
  const store = useSelector((state) => state);
  const data = store?.doctors?.singleDoctor?.data;
  const hospitals = store?.hospitals?.allHospitals?.data;
  let id = hospital?.location?.state;

  useEffect(() => {
    if (id) dispatch(fetchSingleDoctor(id));
    else setDoctorsData(initialData);
  }, [id]);

  useEffect(() => {
    if (data) setDoctorsData(data);
  }, [data]);

  useEffect(() => {
    dispatch(getHospitals());
  }, [dispatch]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (id) {
      try {
        dispatch(updateDoctor(id, doctorsData, history));
      } catch (error) {
        console.log(error);
      }
    } else {
      try {
        dispatch(createDoctor(doctorsData, history));
      } catch (error) {
        console.log(error);
      }
    }
  };

  return (
    <div className={classes.containerManage}>
      <h1 style={{ marginTop: "0px", marginBottom: "20px" }}>Doctors</h1>
      <div className={classes.inputSection}>
        <ExitToAppIcon
          onClick={() => history.push("/admin/doctors")}
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
            <Typography variant="h6">Name</Typography>
          </Grid>
          <Grid item xs={7} md={10}>
            <TextField
              size="small"
              value={doctorsData.name}
              onChange={(e) =>
                setDoctorsData({ ...doctorsData, name: e.target.value })
              }
              style={{ marginTop: "10px", marginBottom: "10px" }}
              fullWidth
              variant="outlined"
            />
          </Grid>
          <Grid item xs={5} md={2}>
            <Typography variant="h6">Age</Typography>
          </Grid>
          <Grid item xs={7} md={4}>
            <TextField
              type="number"
              size="small"
              value={doctorsData.age}
              onChange={(e) =>
                setDoctorsData({ ...doctorsData, age: e.target.value })
              }
              style={{ marginTop: "10px", marginBottom: "10px" }}
              fullWidth
              variant="outlined"
            />
          </Grid>
          <Grid item xs={5} md={2}>
            <Typography variant="h6">Qualification</Typography>
          </Grid>
          <Grid item xs={7} md={4}>
            <TextField
              size="small"
              value={doctorsData.qualification}
              onChange={(e) =>
                setDoctorsData({
                  ...doctorsData,
                  qualification: e.target.value,
                })
              }
              style={{ marginTop: "10px", marginBottom: "10px" }}
              fullWidth
              variant="outlined"
            />
          </Grid>
          <Grid item xs={5} md={2}>
            <Typography variant="h6">Specialist in</Typography>
          </Grid>
          <Grid item xs={7} md={10}>
            <TextField
              size="small"
              value={doctorsData.specialist}
              onChange={(e) =>
                setDoctorsData({ ...doctorsData, specialist: e.target.value })
              }
              style={{ marginTop: "10px", marginBottom: "10px" }}
              fullWidth
              variant="outlined"
            />
          </Grid>
          <Grid item xs={5} md={2}>
            <Typography variant="h6">Experience</Typography>
          </Grid>
          <Grid item xs={7} md={10}>
            <TextField
              size="small"
              value={doctorsData.experience}
              onChange={(e) =>
                setDoctorsData({ ...doctorsData, experience: e.target.value })
              }
              style={{ marginTop: "10px", marginBottom: "10px" }}
              fullWidth
              variant="outlined"
            />
          </Grid>
          <Grid item xs={5} md={2}>
            <Typography variant="h6">Mobile</Typography>
          </Grid>
          <Grid item xs={7} md={4}>
            <TextField
              type="text"
              size="small"
              value={doctorsData.mobile}
              onChange={(e) =>
                setDoctorsData({ ...doctorsData, mobile: e.target.value })
              }
              style={{ marginTop: "10px", marginBottom: "10px" }}
              fullWidth
              variant="outlined"
            />
          </Grid>
          <Grid item xs={5} md={2}>
            <Typography variant="h6">Charges <br />(in rupees)</Typography>
          </Grid>
          <Grid item xs={7} md={4}>
            <TextField
              type="number"
              size="small"
              value={doctorsData.charges}
              onChange={(e) =>
                setDoctorsData({ ...doctorsData, charges: e.target.value })
              }
              style={{ marginTop: "10px", marginBottom: "10px" }}
              fullWidth
              variant="outlined"
            />
          </Grid>
          <Grid item xs={5} md={2}>
            <Typography variant="h6">Description</Typography>
          </Grid>
          <Grid item xs={7} md={10}>
            <TextareaAutosize
              value={doctorsData.description}
              onChange={(e) =>
                setDoctorsData({
                  ...doctorsData,
                  description: e.target.value,
                })
              }
              style={{ width: "100%" }}
              minRows={5}
              maxRows={5}
            />
          </Grid>
          <Grid item xs={5} md={2}>
            <Typography variant="h6">Hospital</Typography>
          </Grid>
          <Grid item xs={7} md={10}>
            <Select
              variant="outlined"
              style={{ height: "40px", backgroundColor: "#fff" }}
              value={doctorsData.hospital}
              onChange={(e) =>
                setDoctorsData({ ...doctorsData, hospital: e.target.value })
              }
              fullWidth
            >
              {hospitals?.map((hospital) => (
                <MenuItem value={hospital?._id}>{hospital?.name}</MenuItem>
              ))}
            </Select>
          </Grid>
          <Grid item xs={6} md={2}>
            <Typography variant="h6">Image</Typography>
          </Grid>
          <Grid style={{ marginTop: "10px" }} item xs={7} md={10}>
            <FileBase
              type="file"
              fullWidth
              multiple={false}
              value={doctorsData.image}
              onDone={({ base64 }) =>
                setDoctorsData({ ...doctorsData, image: base64 })
              }
            />
          </Grid>
        </Grid>
      </div>
    </div>
  );
};

export default ManageDoctors;
