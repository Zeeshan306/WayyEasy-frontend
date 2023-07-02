import { useState, useEffect } from "react";
import {
  Avatar,
  Button,
  Paper,
  Grid,
  Typography,
  Container,
} from "@material-ui/core";
import LockOutlinedIcon from "@material-ui/icons/LockOutlined";
import { useDispatch, useSelector } from "react-redux";

import useStyles from "./style";
import Input from "../../../components/inputTypes/inputTypes";
import {
  logIn,
  signUp,
} from "../../../redux/actions/admin/hospitalAdmin/owner";
import { useHistory } from "react-router-dom";
import ProgressBar from "../../../components/loaders/ProgressBar";

const user = {
  firstName: "",
  lastName: "",
  email: "",
  password: "",
  confirmPassword: "",
  role: "",
};

const Register = () => {
  const classes = useStyles();
  const dispatch = useDispatch();
  const history = useHistory();
  const [isSignup, setIsSignup] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const [formData, setFormData] = useState(user);
  const [progress, setProgress] = useState(false);
  const [adminType, setAdminType] = useState(null);

  const store = useSelector((state) => state?.owner);

  useEffect(() => {
    if (store?.progress) setProgress(true);
    else setProgress(false);
  }, [store?.progress, dispatch, sessionStorage.getItem("adminType")]);

  useEffect(() => {
    setAdminType();
    setFormData({
      ...formData,
      role: sessionStorage.getItem("adminType"),
    });
  }, [sessionStorage.getItem("adminType")]);

  const handleSubmit = (e) => {
    e.preventDefault();

    if (isSignup && formData.password !== formData.confirmPassword) {
      window.alert("Password did not match");
      return;
    }

    if (isSignup) {
      dispatch(signUp(formData, history));
    } else {
      dispatch(logIn(formData, history));
    }
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleShowPassword = () => {
    setShowPassword(!showPassword);
  };

  const switchMode = () => {
    setIsSignup(!isSignup);
  };

  return (
    <>
      {progress ? <ProgressBar /> : ""}
      <Container component="main" maxWidth="xs">
        <Paper className={classes.paper} elevation={3}>
          <Avatar className={classes.avatar}>
            <LockOutlinedIcon />
          </Avatar>
          <Typography component="h1" variant="h5">
            {isSignup ? "Sign up" : "Sign in"}
          </Typography>
          <form className={classes.form} onSubmit={handleSubmit}>
            <Grid container spacing={1}>
              {isSignup && (
                <>
                  <Input
                    name="firstName"
                    label="First Name"
                    handleChange={handleChange}
                    autoFocus
                    half
                  />
                  <Input
                    name="lastName"
                    label="Last Name"
                    handleChange={handleChange}
                    half
                  />
                </>
              )}
              <Input
                name="email"
                label="Email Address"
                handleChange={handleChange}
                type="email"
              />
              <Input
                name="password"
                label="Password"
                handleChange={handleChange}
                type={showPassword ? "text" : "password"}
                handleShowPassword={handleShowPassword}
              />
              {isSignup && (
                <Input
                  name="confirmPassword"
                  label="Repeat Password"
                  handleChange={handleChange}
                  type={showPassword ? "text" : "password"}
                />
              )}
            </Grid>
            <Button
              type="submit"
              fullWidth
              variant="contained"
              color="primary"
              className={classes.submit}
            >
              {isSignup ? "Sign Up" : "Sign In"}
            </Button>
            <Grid container justifyContent="flex-end">
              <Grid item>
                <Button onClick={switchMode}>
                  {isSignup
                    ? "Already have an account? Sign in"
                    : "Don't have an account? Sign Up"}
                </Button>
              </Grid>
            </Grid>
          </form>
        </Paper>
      </Container>
    </>
  );
};

export default Register;
