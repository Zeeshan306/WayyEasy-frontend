import { useEffect, useState } from "react";
import {
  TextField,
  Typography,
  TextareaAutosize,
  Box,
  Button,
  Grid,
  CardMedia,
} from "@material-ui/core";
import { useDispatch, useSelector } from "react-redux";
import ExitToAppIcon from "@material-ui/icons/ExitToApp";
import { useHistory } from "react-router-dom";

import useStyles from "./styles";
import {
  getSingleHospital,
  addHospital,
  updateHospitals,
} from "../../redux/actions/admin/hospital";
import ImageCropper from "../../components/ImageCropper/ImageCropper";

const ManageHospital = (hospital) => {
  const hospitalInput = {
    name: "",
    address: "",
    contactNumber: "",
    description: "",
    pincode: "",
    images: [],
  };
  const [hospitalData, sethospitalData] = useState(hospitalInput);
  const classes = useStyles();
  const history = useHistory();
  let id = hospital?.location?.state;
  const dispatch = useDispatch();
  const store = useSelector((data) => data?.hospitals);
  const data = store?.singleHospital?.data;
  const [image, setImage] = useState([]);

  useEffect(() => {
    if (id) {
      dispatch(getSingleHospital(id));
    } else {
      sethospitalData(hospitalInput);
    }
  }, [id]);

  useEffect(() => {
    if (data) {
      sethospitalData(data);
      setImage(data?.images);
    }
  }, [data]);

  const handleSubmit = async (e) => {
    hospitalData.images = hospitalInput.images.concat(image);
    e.preventDefault();
    if (id) {
      try {
        dispatch(updateHospitals(id, hospitalData, history));
      } catch (error) {
        console.log(error);
      }
    } else {
      try {
        dispatch(addHospital(hospitalData, history));
      } catch (error) {
        console.log(error);
      }
    }
  };

  console.log("data", hospitalData);

  return (
    <div className={classes.containerManage}>
      <h1 style={{ marginTop: "0px", marginBottom: "20px" }}>Hospitals</h1>
      <div className={classes.inputSection}>
        <ExitToAppIcon
          onClick={() => history.push("/admin/Hospital")}
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
            {id ? "Update" : "Save"}
          </Button>
        </Box>
        <Grid container spacing={2}>
          <Grid item xs={5} md={2}>
            <Typography variant="h6">Name</Typography>
          </Grid>
          <Grid item xs={7} md={10}>
            <TextField
              size="small"
              value={hospitalData?.name}
              onChange={(e) =>
                sethospitalData({ ...hospitalData, name: e.target.value })
              }
              style={{ marginTop: "10px", marginBottom: "10px" }}
              fullWidth
              type="text"
              variant="outlined"
            />
          </Grid>
          <Grid item xs={5} md={2}>
            <Typography variant="h6">Address</Typography>
          </Grid>
          <Grid item xs={7} md={10}>
            <TextField
              size="small"
              value={hospitalData?.address}
              onChange={(e) =>
                sethospitalData({ ...hospitalData, address: e.target.value })
              }
              style={{ marginTop: "10px", marginBottom: "10px" }}
              fullWidth
              type="text"
              variant="outlined"
            />
          </Grid>
          <Grid item xs={5} md={2}>
            <Typography variant="h6">Pincode</Typography>
          </Grid>
          <Grid item xs={7} md={10}>
            <TextField
              size="small"
              value={hospitalData?.pincode}
              onChange={(e) =>
                sethospitalData({ ...hospitalData, pincode: e.target.value })
              }
              style={{ marginTop: "10px", marginBottom: "10px" }}
              fullWidth
              type="number"
              variant="outlined"
            />
          </Grid>
          <Grid item xs={5} md={2}>
            <Typography variant="h6">
              Hospital <br />
              Contact No
            </Typography>
          </Grid>
          <Grid item xs={7} md={10}>
            <TextField
              size="small"
              value={hospitalData?.contactNumber}
              onChange={(e) =>
                sethospitalData({
                  ...hospitalData,
                  contactNumber: e.target.value,
                })
              }
              style={{ marginTop: "10px", marginBottom: "10px" }}
              fullWidth
              type="text"
              variant="outlined"
            />
          </Grid>
          <Grid item xs={5} md={2}>
            <Typography variant="h6">Description</Typography>
          </Grid>
          <Grid item xs={7} md={10}>
            <TextareaAutosize
              value={hospitalData?.description}
              onChange={(e) =>
                sethospitalData({
                  ...hospitalData,
                  description: e.target.value,
                })
              }
              style={{ width: "99.3%" }}
              minRows={5}
              maxRows={5}
            />
          </Grid>{" "}
          <Grid item xs={5} md={2}>
            <Typography variant="h6">Image</Typography>
          </Grid>
          <Grid container xs={7} md={10}>
            <Grid item xs={12} md={2}>
              <ImageCropper setImage={setImage} image={image} />
            </Grid>
            {image?.map((data) => (
              <Grid
                item
                xs={12}
                md={3}
                style={{ marginLeft: "10px", marginTop: "10px" }}
              >
                <CardMedia
                  component="img"
                  height="140"
                  image={data}
                  alt="Wayy Easy"
                />
              </Grid>
            ))}
          </Grid>
        </Grid>
      </div>
    </div>
  );
};

export default ManageHospital;
