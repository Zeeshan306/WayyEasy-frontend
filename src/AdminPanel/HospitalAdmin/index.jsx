import React, { useState, useEffect } from "react";
import { io } from "socket.io-client";
import { Button, makeStyles, Typography } from "@material-ui/core";
import Drawer from "@material-ui/core/Drawer";
import { useHistory, useLocation } from "react-router-dom";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";
import { AddCircleOutlineOutlined, SubjectOutlined } from "@material-ui/icons";

import { useDispatch } from "react-redux";

// firebase
import { collection, getDocs } from "firebase/firestore";
import { firebaseDb } from "../../FireBase/Firebase";
const drawerWidth = 240;

const useStyles = makeStyles({
  page: {
    background: "#f9f9f9",
    width: "100%",
  },
  root: {
    display: "flex",
    flexDirection: "column",
  },
  mainContainer: {
    marginTop: "30px",
    position: "relative",
    display: "flex",
  },
  drawer: {
    width: drawerWidth,
  },
  drawerPaper: {
    position: "relative",
    marginTop: "20px",
    width: drawerWidth,
  },
  title: {
    textAlign: "center",
    fontWeight: "bold",
  },
  active: {
    background: "#f4f4f4",
  },
});

const Admin = ({ children }) => {
  const classes = useStyles();
  const history = useHistory();
  const location = useLocation();
  const dispatch = useDispatch();

  const [socket, setSocket] = useState(null);
  const [doctorsReview, setdoctorsReview] = useState();

  const { user } = JSON.parse(localStorage.getItem("owner"));
  const owner = JSON.parse(localStorage.getItem("owner"))?.user;

  let menuItems = null;

  if (owner.role === "admin") {
    const fetchPost = async () => {
      await getDocs(collection(firebaseDb, "doctors")).then((querySnapshot) => {
        querySnapshot.docs.map((doc) =>
          console.log(doc.data().name)
          //   {
          //   ...doc.data(),
          // }
        );
        // setdoctorsReview(newData);
      });
    };

    useEffect(() => {
      fetchPost();
    }, []);
  }

  console.log("request", doctorsReview);

  // console.log("data", user?._id);

  // useEffect(() => {
  //   setSocket(io("http://localhost:2002"));
  // }, []);

  // useEffect(() => {
  //   socket?.on("bookRequestToHospital", (data) => {
  //     console.log(data);
  //   });
  // }, [socket]);

  menuItems = [
    {
      text: "Dashboard",
      icon: <SubjectOutlined color="secondary" />,
      path: "/admin/dashboard",
    },
    {
      text: "Doctors",
      icon: <AddCircleOutlineOutlined color="secondary" />,
      path: "/admin/doctors",
    },
    {
      text: "Hospital",
      icon: <SubjectOutlined color="secondary" />,
      path: "/admin/hospital",
    },
    {
      text: "Rooms",
      icon: <AddCircleOutlineOutlined color="secondary" />,
      path: "/admin/rooms",
    },
    {
      text: "Ratings & Reviews",
      icon: <AddCircleOutlineOutlined color="secondary" />,
      path: "/admin/reviews",
    },
  ];

  return (
    <div className={classes.root}>
      <div className={classes.mainContainer}>
        <Drawer
          className={classes.drawer}
          variant="permanent"
          classes={{ paper: classes.drawerPaper }}
          anchor="left"
        >
          <div>
            <Typography variant="h5" className={classes.title}>
              Admin Panel
            </Typography>
          </div>

          <List>
            {menuItems.map((item) => (
              <ListItem
                button
                key={item.text}
                onClick={() => history.push(item.path)}
                className={
                  location.pathname == item.path ? classes.active : null
                }
              >
                <ListItemIcon>{item.icon}</ListItemIcon>
                <ListItemText primary={item.text} />
              </ListItem>
            ))}
          </List>
        </Drawer>
        <div className={classes.page}>{children}</div>
      </div>
    </div>
  );
};

export default Admin;
