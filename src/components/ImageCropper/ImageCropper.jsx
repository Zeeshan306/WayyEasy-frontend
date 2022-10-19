import React from "react";
import Cropper from "react-easy-crop";
import { withStyles } from "@material-ui/core/styles";
import MuiDialogTitle from "@material-ui/core/DialogTitle";
import MuiDialogContent from "@material-ui/core/DialogContent";
import MuiDialogActions from "@material-ui/core/DialogActions";
import CloseIcon from "@material-ui/icons/Close";
import { Button, Dialog, IconButton, Typography } from "@material-ui/core/";

import style from "./ImageCropper.module.css";
import { getCroppedImage } from "./Cropper";

const styles = (theme) => ({
  root: {
    margin: 0,
    padding: theme.spacing(2),
  },
  closeButton: {
    position: "absolute",
    right: theme.spacing(1),
    top: theme.spacing(1),
    color: theme.palette.grey[500],
  },
});

const DialogTitle = withStyles(styles)((props) => {
  const { children, classes, onClose, ...other } = props;
  return (
    <MuiDialogTitle disableTypography className={classes.root} {...other}>
      <Typography variant="h6">{children}</Typography>
      {onClose ? (
        <IconButton
          aria-label="close"
          className={classes.closeButton}
          onClick={onClose}
        >
          <CloseIcon />
        </IconButton>
      ) : null}
    </MuiDialogTitle>
  );
});

const DialogContent = withStyles((theme) => ({
  root: {
    padding: theme.spacing(2),
  },
}))(MuiDialogContent);

const DialogActions = withStyles((theme) => ({
  root: {
    margin: 0,
    padding: theme.spacing(1),
  },
}))(MuiDialogActions);

const ImageCropper = ({ setImage,  image }) => {
  const [data, setData] = React.useState(null);
  const [croppedArea, setCroppedArea] = React.useState(null);
  const [crop, setCrop] = React.useState({ x: 0, y: 0 });
  const [zoom, setZoom] = React.useState(1);
  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };
  
  const handleAddImage = () => {
    getCroppedImage(data, croppedArea, setImage, image);
    setOpen(false);
  };

  const onCropComplete = (croppedAreaPercentage, croppedAreaPixels) => {
    setCroppedArea(croppedAreaPixels);
  };

  const onSelectFile = (event) => {
    if (event.target.files && event.target.files.length > 0) {
      const reader = new FileReader();
      reader.readAsDataURL(event.target.files[0]);
      reader.addEventListener("load", () => {
        setData(reader.result);
      });
    }
  };

  return (
    <div className={style.container}>
      <Button className={style.addImageBtn} variant="outlined" color="primary" onClick={handleClickOpen}>
        Add Image
      </Button>
      <Dialog aria-labelledby="customized-dialog-title" open={open}>
        <DialogTitle
          id="customized-dialog-title"
          onClose={(e) => setOpen(false)}
        >
          Select Image
        </DialogTitle>
        <DialogContent dividers style={{ height: "50vh", width: "100%" }}>
          <div className={style.containerButtons}>
            <input type="file" accept="image/*" onChange={onSelectFile} />
          </div>
          <div className={style.containerCropper}>
            {data ? (
              <>
                <div className={style.cropper}>
                  <Cropper
                    image={data}
                    crop={crop}
                    zoom={zoom}
                    aspect={16 / 9}
                    onCropChange={setCrop}
                    onZoomChange={setZoom}
                    onCropComplete={onCropComplete}
                  />
                </div>
              </>
            ) : null}
          </div>
        </DialogContent>
        <DialogActions>
          <Button autoFocus onClick={handleAddImage} color="primary">
            Confirm
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
};

export default ImageCropper;
