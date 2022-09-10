/* eslint-disable react-hooks/exhaustive-deps */
import {
  Button,
  Card,
  Grid,
  IconButton,
  TextField,
  Typography,
} from "@material-ui/core";
import React, { useContext, useEffect, useState } from "react";
import { useHistory } from "react-router-dom";
import { AuthContext } from "../../context/authContext/authContext";

import {
  ArrowBackRounded,
  HomeRounded,
  Visibility,
  VisibilityOff,
} from "@material-ui/icons";
import makeStyles from "./styles";
import { ErrorContext } from "../../context/errorContext/ErrorContext";
import Alert from "../Alert/Alert";
import Loader from "../Loader/Loader";

const ForgotPassword = () => {
  const history = useHistory();
  const { userInfo, resetPassword, verifyTokenAndResetPassword, loading } =
    useContext(AuthContext);

  const { error: err } = useContext(ErrorContext);

  console.log(err);
  useEffect(() => {
    if (userInfo) history.push("/");
  }, [userInfo]);

  useEffect(() => {
    console.log("inside reset " + resetPassword);
    const timer = () => setTimeout(() => history.push("/login"), 2000);
    if (resetPassword) timer();
  }, [resetPassword]);

  const classes = makeStyles();

  const [token, setToken] = useState("");
  const [password, setPassword] = useState("");
  const [rePassword, setRePassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);

  const [error, setError] = useState("");

  const handleToken = (e) => {
    setToken(e.target.value);
  };

  const handleOnClick = () => {
    verifyTokenAndResetPassword(token, password);
  };

  useEffect(() => {
    if (password !== rePassword) {
      setError("passwords doesn't match");
    } else {
      setError("");
    }
  }, [rePassword, password]);

  if (loading) return <Loader />;

  return (
    <>
      {err && <Alert severity="error" message={err} />}
      {resetPassword && (
        <Alert
          severity={"success"}
          message="Password Reset success, Please login again"
        />
      )}
      <div>
        <Grid
          container
          className={classes.grid}
          alignItems="center"
          justifyContent="center"
          // style={{ minHeight: "10vh" }}
        >
          <Grid
            item
            spacing={4}
            xs={6}
            lg={6}
            className={classes.ForgotPwdContainer}
          >
            <IconButton
              aria-label="home"
              className={classes.homeBtn}
              onClick={() => history.push("/")}
            >
              <HomeRounded color="primary" />
            </IconButton>
            <IconButton
              aria-label="home"
              className={classes.backBtn}
              onClick={() => history.push("/forgot-password")}
            >
              <ArrowBackRounded color="primary" />
            </IconButton>
            <Card className={classes.Card}>
              <Typography variant="subtitle1" color="primary" align="center">
                Enter the Token
              </Typography>

              <Typography
                variant="h6"
                color="textSecondary"
                align="center"
                style={{ fontSize: "15px", margin: "5px" }}
                required
              >
                We send a token to your email.
              </Typography>
              <TextField
                type="text"
                label="token"
                size="medium"
                fullWidth
                value={token}
                onChange={handleToken}
                className={classes.Input}
                onBlur={handleToken}
                required
              />

              {/* 

*TODO: Add two field for password and reset password

        Create a function for a API call along with token and new password

 */}

              <Grid
                xs={12}
                lg={12}
                item
                style={{ display: "flex", position: "relative" }}
              >
                <TextField
                  type={showPassword ? "text" : "password"}
                  label="Password"
                  fullWidth
                  className={classes.Input}
                  value={password}
                  error={error ? true : false}
                  onChange={(e) => setPassword(e.target.value)}
                  required
                />
                <div
                  className={classes.VisibleIcon}
                  onClick={() => setShowPassword((prevState) => !prevState)}
                >
                  {showPassword ? <Visibility /> : <VisibilityOff />}
                </div>
              </Grid>
              <Grid xs={12} lg={12} item>
                <TextField
                  type={showPassword ? "text" : "password"}
                  label="Re-enter the password"
                  fullWidth
                  className={classes.Input}
                  value={rePassword}
                  error={error ? true : false}
                  onChange={(e) => setRePassword(e.target.value)}
                  required
                />
                {error && (
                  <Typography align="left" color="error" variant="subtitle2">
                    {error}
                  </Typography>
                )}
              </Grid>

              <Button
                className={classes.button}
                variant="contained"
                color="primary"
                fullWidth
                disabled={token && password && !error ? false : true}
                onClick={handleOnClick}
              >
                Reset password
              </Button>
            </Card>
          </Grid>
        </Grid>
      </div>
    </>
  );
};

export default ForgotPassword;
