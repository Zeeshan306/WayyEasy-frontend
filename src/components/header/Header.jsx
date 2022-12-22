import React, { useEffect, useState } from "react";
import {
  AppBar,
  Toolbar,
  Badge,
  MenuItem,
  Menu,
  Button,
  Dialog,
  DialogTitle,
  DialogContent,
  Grid,
} from "@material-ui/core";
import IconButton from "@material-ui/core/IconButton";
import HomeIcon from "@material-ui/icons/Home";
import InfoIcon from "@material-ui/icons/Info";
import PermContactCalendarIcon from "@material-ui/icons/PermContactCalendar";
import DescriptionIcon from "@material-ui/icons/Description";
import AccountCircle from "@material-ui/icons/AccountCircle";
import MailIcon from "@material-ui/icons/Mail";
import NotificationsIcon from "@material-ui/icons/Notifications";
import MoreIcon from "@material-ui/icons/MoreVert";
import { useDispatch } from "react-redux";
import { useHistory, useLocation } from "react-router-dom";

//firebase
import { collection, getDocs } from "firebase/firestore";
import { firebaseDb } from "../../FireBase/Firebase";

import { logOut } from "../../redux/actions/admin/hospitalAdmin/owner";
import logo from "../../files/Images/icon.png";
import useStyles from "./styles";

const Header = () => {
  const classes = useStyles();
  const history = useHistory();
  const location = useLocation();
  const dispatch = useDispatch();
  const [authUser, setAuthUser] = useState(null);
  const [anchorEl, setAnchorEl] = React.useState(null);
  const [doctorsReview, setDoctorsReview] = useState([]);
  const [mobileMoreAnchorEl, setMobileMoreAnchorEl] = React.useState(null);
  const [dialogOpen, setDialogOpen] = React.useState(false);
  const isMenuOpen = Boolean(anchorEl);
  const isMobileMenuOpen = Boolean(mobileMoreAnchorEl);
  let dataList = null;
  const user = JSON.parse(localStorage.getItem("owner"))?.user;

  const fetchPost = async () => {
    await getDocs(collection(firebaseDb, "doctors")).then((querySnapshot) => {
      querySnapshot.docs.map((doc) => {
        if (doctorsReview.length > 0) {
          console.log(doctorsReview.length);
          doctorsReview.find((doctor) => {
            if (
              doctor?.data?.mongiId &&
              doctor?.data?.mongoId != doc.data()?.mongoId
            ) {
              if (doc.data().status == "pending")
                console.log("data is pending", doc.data());
              console.log("data is pending", doctor?.data);
              console.log("data is pending", doc.data()?.mongoId);
              dataList = {
                data: doc.data(),
                firebaseId: doc.id,
              };
              setDoctorsReview([...doctorsReview, dataList]);
            }
          });
        } else {
          if (doc.data().status == "pending") {
            dataList = { data: doc.data(), firebaseId: doc.id };
            setDoctorsReview([dataList]);
          }
        }
      });
    });
  };

  useEffect(() => {
    setAuthUser(JSON.parse(localStorage.getItem("owner"))?.token);
  }, [JSON.parse(localStorage.getItem("owner"))]);

  useEffect(() => {
    user?.role === "admin" && fetchPost();
  }, [location]);

  const toNotificationDetails = () => {
    history.replace({
      pathname: "/admin/notifications",
      state: doctorsReview,
    });
  };

  const handleClickOpen = () => {
    setDialogOpen(true);
  };

  const toAdmin = (adminType) => {
    sessionStorage.setItem("adminType", adminType);
    history.push("/admin/auth/");
    setDialogOpen(false);
  };

  const handleProfileMenuOpen = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleMobileMenuClose = () => {
    setMobileMoreAnchorEl(null);
  };

  const handleMenuClose = () => {
    setAnchorEl(null);
    handleMobileMenuClose();
  };

  const handleMobileMenuOpen = (event) => {
    setMobileMoreAnchorEl(event.currentTarget);
  };

  const handleLogout = () => {
    dispatch(logOut(history));
    handleMenuClose();
  };

  const menuId = "primary-search-account-menu";
  const renderMenu = (
    <Menu
      anchorEl={anchorEl}
      anchorOrigin={{ vertical: "top", horizontal: "right" }}
      id={menuId}
      keepMounted
      transformOrigin={{ vertical: "top", horizontal: "right" }}
      open={isMenuOpen}
      onClose={handleMenuClose}
    >
      <MenuItem onClick={handleMenuClose}>Profile</MenuItem>
      <MenuItem onClick={handleLogout}>Logout</MenuItem>
    </Menu>
  );

  const mobileMenuId = "primary-search-account-menu-mobile";
  const renderMobileMenu = (
    <Menu
      anchorEl={mobileMoreAnchorEl}
      anchorOrigin={{ vertical: "top", horizontal: "right" }}
      id={mobileMenuId}
      keepMounted
      transformOrigin={{ vertical: "top", horizontal: "right" }}
      open={isMobileMenuOpen}
      onClose={handleMobileMenuClose}
    >
      <MenuItem>
        <IconButton aria-label="show 4 new mails" color="inherit">
          <HomeIcon />
        </IconButton>
        <a href="/" style={{ textDecoration: "none", color: "black" }}>
          Home
        </a>
      </MenuItem>
      <MenuItem>
        <IconButton aria-label="show 4 new mails" color="inherit">
          <DescriptionIcon />
        </IconButton>
        <a href="/articles" style={{ textDecoration: "none", color: "black" }}>
          Articles
        </a>
      </MenuItem>
      <MenuItem>
        <IconButton aria-label="show 4 new mails" color="inherit">
          <PermContactCalendarIcon />
        </IconButton>
        <a href="/contact" style={{ textDecoration: "none", color: "black" }}>
          Contact Us
        </a>
      </MenuItem>
      <MenuItem>
        <IconButton aria-label="show 4 new mails" color="inherit">
          <InfoIcon />
        </IconButton>
        <a href="/about" style={{ textDecoration: "none", color: "black" }}>
          About Us
        </a>
      </MenuItem>
      {!authUser && (
        <Button
          variant="outlined"
          color="primary"
          onClick={handleClickOpen}
          style={{ margin: 5 }}
        >
          Become a Partner?
        </Button>
      )}
      {authUser && (
        <div>
          <MenuItem>
            <IconButton
              aria-label="show 4 new mails"
              color="inherit"
              onClick={toNotificationDetails}
            >
              <Badge badgeContent={doctorsReview.length} color="secondary">
                <MailIcon />
              </Badge>
            </IconButton>
            <p>Messages</p>
          </MenuItem>
          <MenuItem>
            <IconButton aria-label="show 11 new notifications" color="inherit">
              <Badge badgeContent={11} color="secondary">
                <NotificationsIcon />
              </Badge>
            </IconButton>
            <p>Notifications</p>
          </MenuItem>
          <MenuItem onClick={handleProfileMenuOpen}>
            <IconButton
              aria-label="account of current user"
              aria-controls="primary-search-account-menu"
              aria-haspopup="true"
              color="inherit"
            >
              <AccountCircle />
            </IconButton>
            <p>Profile</p>
          </MenuItem>
        </div>
      )}
    </Menu>
  );

  const customDialog = (
    <Dialog
      open={dialogOpen}
      onClose={() => setDialogOpen(false)}
      aria-labelledby="alert-dialog-title"
      aria-describedby="alert-dialog-description"
    >
      <DialogTitle id="alert-dialog-title">WayyEasy and You !!!</DialogTitle>
      <DialogContent className={classes.dialogBody}>
        <Grid style={{ display: "flex", justifyContent: "space-between" }}>
          <Button
            variant="contained"
            onClick={() => toAdmin("opd")}
            className={classes.btnStyle}
          >
            As an OPD
          </Button>
          <Button
            variant="contained"
            className={classes.btnStyle}
            onClick={() => toAdmin("doctor")}
            autoFocus
          >
            As a Doctor
          </Button>
        </Grid>
        <Grid
          style={{
            display: "flex",
            justifyContent: "space-between",
            marginTop: 10,
          }}
        >
          <Button
            variant="contained"
            onClick={() => toAdmin("pathLab")}
            className={classes.btnStyle}
          >
            As a Path Lab
          </Button>
          <Button
            variant="contained"
            className={classes.btnStyle}
            onClick={() => toAdmin("owner")}
            autoFocus
          >
            As a Hospital/Nursing Home
          </Button>
        </Grid>
      </DialogContent>
    </Dialog>
  );

  return (
    <div className={classes.grow}>
      {dialogOpen && customDialog}
      <AppBar
        position="static"
        color="default"
        style={{ background: "white" }}
        elevation={0}
      >
        <Toolbar
          style={{
            width: "86%",
            margin: "auto",
            paddingTop: "30px",
            paddingBottom: "30px",
          }}
        >
          <img src={logo} alt="brand-icon" />
          <div className={classes.sectionDesktop}>
            <a href="/">Home</a>
            <a href="/articles">Articles</a>
            <a href="/contact">Contact Us</a>
            <a href="/about">About Us</a>
            {!authUser && (
              <Button
                variant="outlined"
                color="primary"
                onClick={handleClickOpen}
                style={{ marginTop: 5 }}
              >
                Become a Partner?
              </Button>
            )}
            {authUser && (
              <div>
                <IconButton
                  aria-label="show 4 new mails"
                  color="inherit"
                  onClick={toNotificationDetails}
                >
                  <Badge badgeContent={doctorsReview?.length} color="secondary">
                    <MailIcon />
                  </Badge>
                </IconButton>
                <IconButton
                  aria-label="show 17 new notifications"
                  color="inherit"
                >
                  <Badge badgeContent={17} color="secondary">
                    <NotificationsIcon />
                  </Badge>
                </IconButton>
                <IconButton
                  edge="end"
                  aria-label="account of current user"
                  aria-controls={menuId}
                  aria-haspopup="true"
                  onClick={handleProfileMenuOpen}
                  color="inherit"
                >
                  <AccountCircle />
                </IconButton>
              </div>
            )}
          </div>
          <div className={classes.sectionMobile}>
            <IconButton
              aria-label="show more"
              aria-controls={mobileMenuId}
              aria-haspopup="true"
              onClick={handleMobileMenuOpen}
              color="inherit"
            >
              <MoreIcon />
            </IconButton>
          </div>
        </Toolbar>
      </AppBar>
      {renderMobileMenu}
      {renderMenu}
    </div>
  );
};

export default Header;
