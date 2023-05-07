import { Typography, Divider } from "@material-ui/core/";
import GetAppRoundedIcon from "@material-ui/icons/GetAppRounded";

import classes from "./singleItemStyles.module.css";
import { api } from "../../components/config/urlConfig";

const SingleSearchItemDetails = (props) => {
  let data = props?.location?.state;

  console.log(data);

  return (
    <>
      <div className={classes.card}>
        <div className={classes.section}>
          <Typography variant="h3" component="h2">
            {data?.name}
          </Typography>
          <Typography
            gutterBottom
            variant="h5"
            color="textSecondary"
            component="h2"
          >
            {data?.specialityType}
          </Typography>
          <Typography gutterBottom variant="h6" color="textSecondary">
            {data?.qualification}
          </Typography>
          <Typography gutterBottom variant="body1" component="p">
            {data?.description}
          </Typography>
          <div className={classes.price}>
            <Typography variant="h6">Price: </Typography>
            <Typography variant="h5">
              <span>&#8377;</span>
              {data.price}
            </Typography>
          </div>
          <Divider style={{ margin: "20px 0" }} />
          <div className={classes.otherDetails}>
            <div className={classes.otherDetailsChild}>
              {" "}
              <Typography gutterBottom variant="body1" component="p">
                Availibility:
              </Typography>
              <Typography
                style={{
                  color: data?.available ? "green" : "red",
                  fontWeight: "bold",
                }}
                gutterBottom
                variant="body1"
                component="p"
              >
                {data?.available ? "Available" : "Un-available"}
              </Typography>
            </div>
            <div className={classes.otherDetailsChild}>
              <Typography gutterBottom variant="body1" component="p">
                Status:
              </Typography>
              <Typography
                style={{
                  color: data?.status === "active" ? "green" : "red",
                  fontWeight: "bold",
                }}
                gutterBottom
                variant="body1"
                component="p"
              >
                {data?.status}
              </Typography>
            </div>
          </div>
          <Divider style={{ margin: "20px 0" }} />
          <div>
            <Typography gutterBottom variant="body1" component="p">
              Shift Timing:
            </Typography>
            <Typography gutterBottom variant="body1" component="p">
              {data?.shiftStart} {"  -  "} {data?.shiftEnd}
            </Typography>
          </div>
        </div>
        <div className={classes.imageSection}>
          <img
            className={classes.media}
            src={`${api}webSearch/${data?.image}`}
            alt="item-image"
          />
        </div>
      </div>
      <div className={classes.action}>
        <Typography gutterBottom variant="body1" component="p">
          Download our mobile app to book this doctor
        </Typography>
        <span className={classes.bookBtn}>
          <GetAppRoundedIcon />
          Download Now
        </span>
      </div>
    </>
  );
};

export default SingleSearchItemDetails;
