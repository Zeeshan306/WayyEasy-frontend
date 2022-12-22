import {
  Card,
  CardActions,
  CardContent,
  Container,
  Typography,
  Button,
} from "@material-ui/core";
import VisibilityOutlinedIcon from "@material-ui/icons/VisibilityOutlined";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { useHistory } from "react-router-dom";

import not from "./notification.module.css";

const Notifications = () => {
  const history = useHistory();
  const dispatch = useDispatch();
  let notifications = history?.location?.state;

  const notificationDetails = (notification) => {
    history.push({
      pathname: `/admin/notification/${notification.firebaseId}`,
      state: notification,
    });
  };

  return (
    <Container spacing={2} className={not.mainContainer}>
      {notifications.map((notification) => (
        <Card className={not.cardContainer} key={notification.firebaseId}>
          <CardContent>
            <Typography variant="h4" color="initial">
              {notification?.data?.name}
            </Typography>
            <Typography variant="h6" color="initial">
              {notification?.data?.description}
            </Typography>
            <Typography variant="h6" color="initial">
              {notification?.data?.specialityType}
            </Typography>
          </CardContent>
          <CardActions className={not.actionBtns}>
            <Button
              onClick={() => notificationDetails(notification)}
              style={{ width: "100%" }}
            >
              View &nbsp; <VisibilityOutlinedIcon />
            </Button>
          </CardActions>
        </Card>
      ))}
    </Container>
  );
};

export default Notifications;
