import { useEffect, useState } from "react";
import {
  TextField,
  Typography,
  TextareaAutosize,
  Box,
  Button,
  MenuItem,
  Select,
  Grid,
  CardMedia,
} from "@material-ui/core";
import ExitToAppIcon from "@material-ui/icons/ExitToApp";
import { useHistory } from "react-router-dom";
import FileBase from "react-file-base64";
import { useDispatch, useSelector } from "react-redux";
import ImageCropper from "../../../components/ImageCropper/ImageCropper";

import useStyles from "./styles";
import {
  createOPDServices,
  updateOPDService,
} from "../../../redux/actions/admin/opdAdmin/services";

const ManageServices = (hospital) => {
  const initialData = {
    name: "",
    address: "",
    contactNumber: "",
    description: "",
    pincode: "",
    price: "",
    images: [],
  };
  const [services, setServices] = useState(initialData);
  const [image, setImage] = useState([]);
  const classes = useStyles();
  const history = useHistory();
  const dispatch = useDispatch();
  const store = useSelector((state) => state);
  const data = store?.doctors?.singleDoctor?.data;
  const hospitals = store?.hospitals?.allHospitals?.data;
  let service = hospital?.location?.state;

  useEffect(() => {
    setServices(service);
  }, [service?.id]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    services.images = initialData.images.concat(image);
    console.log(services);
    if (service?._id) {
      try {
        dispatch(updateOPDService(service._id, services, history));
      } catch (error) {
        console.log(error);
      }
    } else {
      try {
        dispatch(createOPDServices(services, history));
      } catch (error) {
        console.log(error);
      }
    }
  };

  return (
    <div className={classes.containerManage}>
      <h1 style={{ marginTop: "0px", marginBottom: "20px" }}>Service</h1>
      <div className={classes.inputSection}>
        <ExitToAppIcon
          onClick={() => history.goBack("/admin/opd/services/")}
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
              value={services?.name}
              onChange={(e) =>
                setServices({ ...services, name: e.target.value })
              }
              style={{ marginTop: "10px", marginBottom: "10px" }}
              fullWidth
              type="text"
              variant="outlined"
            />
          </Grid>
          <Grid item xs={5} md={2}>
            <Typography variant="h6">Price</Typography>
          </Grid>
          <Grid item xs={7} md={10}>
            <TextField
              size="small"
              value={services?.price}
              onChange={(e) =>
                setServices({ ...services, price: e.target.value })
              }
              style={{ marginTop: "10px", marginBottom: "10px" }}
              fullWidth
              type="number"
              variant="outlined"
            />
          </Grid>
          <Grid item xs={5} md={2}>
            <Typography variant="h6">Address</Typography>
          </Grid>
          <Grid item xs={7} md={10}>
            <TextField
              size="small"
              value={services?.address}
              onChange={(e) =>
                setServices({ ...services, address: e.target.value })
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
              value={services?.pincode}
              onChange={(e) =>
                setServices({ ...services, pincode: e.target.value })
              }
              style={{ marginTop: "10px", marginBottom: "10px" }}
              fullWidth
              type="number"
              variant="outlined"
            />
          </Grid>
          <Grid item xs={5} md={2}>
            <Typography variant="h6">Contact No</Typography>
          </Grid>
          <Grid item xs={7} md={10}>
            <TextField
              size="small"
              value={services?.contactNumber}
              onChange={(e) =>
                setServices({
                  ...services,
                  contactNumber: e.target.value,
                })
              }
              style={{ marginTop: "10px", marginBottom: "10px" }}
              fullWidth
              type="number"
              variant="outlined"
            />
          </Grid>
          <Grid item xs={5} md={2}>
            <Typography variant="h6">Description</Typography>
          </Grid>
          <Grid item xs={7} md={10}>
            <TextareaAutosize
              value={services?.description}
              onChange={(e) =>
                setServices({
                  ...services,
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
            {image?.map((data, key) => (
              <Grid
                item
                key={key}
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

export default ManageServices;
