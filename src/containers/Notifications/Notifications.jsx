import {
  Card,
  CardActions,
  CardContent,
  Container,
  Typography,
  Button,
} from "@material-ui/core";
import VisibilityOutlinedIcon from "@material-ui/icons/VisibilityOutlined";
import { useHistory } from "react-router-dom";

import not from "./notification.module.css";

const Notifications = () => {
  const history = useHistory();
  const notificationList = history?.location?.state;

  const notificationDetails = (notification) => {
    history.push({
      pathname: `/admin/notification/${notification.mongoId}`,
      state: notification,
    });
  };

  return (
    <Container spacing={2} className={not.mainContainer}>
      {notificationList.map((notification) => (
        <Card className={not.cardContainer} key={notification?.mongoId}>
          <CardContent>
            <Typography variant="h4" color="initial">
              {notification?.name}
            </Typography>
            <Typography variant="h6" color="initial">
              {notification?.description}
            </Typography>
            <Typography variant="h6" color="initial">
              {notification?.specialityType}
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
