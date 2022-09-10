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
import { isValidEmail } from "../../utils/formValidation";
import { HomeRounded } from "@material-ui/icons";
import makeStyles from "./styles";
import { ErrorContext } from "../../context/errorContext/ErrorContext";
import Alert from "../Alert/Alert";
import Loader from "../Loader/Loader";
const ForgotPassword = () => {
  const history = useHistory();
  const { userInfo, sendTokenRequest, loading ,mailSend} = useContext(AuthContext);
  const { error: err } = useContext(ErrorContext);
  useEffect(() => {
    if (userInfo) history.push("/");
  }, [userInfo]);

  useEffect(() =>
  {
    
    const timer = () => setTimeout(() => history.push("/password-reset"), 2000);
    if(mailSend) timer()
   
  },[mailSend])
  const classes = makeStyles();

  const [email, setEmail] = useState("");
  const [error, setError] = useState("");

  const handleEmail = (e) => {
    setEmail(e.target.value);
    if (!isValidEmail(e.target.value)) setError("invalid email");
    else {
      setError("");
    }
  };

  const handleOnClick = () => {
    sendTokenRequest(email);

  };

  if (loading) return <Loader />;
  return (
    <div>
      {err && <Alert severity="error" message={err} />}
      {mailSend && (
        <Alert
          severity={"success"}
          message="Check your mail for reset the password"
        />
      )}
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
          <Card className={classes.Card}>
            <Typography variant="subtitle1" color="primary" align="center">
              Enter your email
            </Typography>

            <Typography
              variant="h6"
              color="textSecondary"
              align="center"
              style={{ fontSize: "15px", margin: "5px" }}
            >
              We will send a mail to reset your password
            </Typography>
            <TextField
              type="email"
              label="Email"
              size="medium"
              fullWidth
              value={email}
              onChange={handleEmail}
              error={error ? true : false}
              className={classes.Input}
              onBlur={handleEmail}
            />
            {error && (
              <Typography align="left" color="error" variant="subtitle2">
                {error}
              </Typography>
            )}
            <Button
              className={classes.button}
              variant="contained"
              color="primary"
              fullWidth
              disabled={!error ? false : true}
              onClick={handleOnClick}
            >
              Send Request
            </Button>
          </Card>
        </Grid>
      </Grid>
    </div>
  );
};

export default ForgotPassword;
