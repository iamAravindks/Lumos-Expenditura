/* eslint-disable react-hooks/exhaustive-deps */
import { Button, Grid, TextField, Typography } from "@material-ui/core";
import { HowToReg, Visibility, VisibilityOff } from "@material-ui/icons";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import useStyles from "./SignupStyles";
import { isValidEmail, isValidName } from "../../utils/formValidation";
const initialState = {
  emailError: null,
  nameError: null,
  passwordError: null,
};
const SignupForm = () => {
  const classes = useStyles();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [rePassword, setRePassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [error, setError] = useState(initialState);

  useEffect(() => {
    if (password !== rePassword) {
      setError((prevState) => ({
        ...prevState,
        passwordError: "passwords doesn't match",
      }));
    } else {
      setError((prevState) => ({
        ...prevState,
        passwordError: null,
      }));
    }
  }, [rePassword]);

  const handleEmail = (e) => {
    setEmail(e.target.value);
    if (!isValidEmail(e.target.value))
      setError((prevState) => ({
        ...prevState,
        emailError: "invalid email",
      }));
    else {
      setError((prevState) => ({
        ...prevState,
        emailError: null,
      }));
    }
  };
  const handleName = (e) => {
    setName(e.target.value);
    if (!isValidName(e.target.value)) {
      setError((prevState) => ({
        ...prevState,
        nameError: "invalid name",
      }));
    } else {
      setError((prevState) => ({
        ...prevState,
        nameError: null,
      }));
    }
  };

  return (
    <Grid container spacing={2} className={classes.SignupForm}>
      <Grid item xs={12} style={{ height: "100px" }}>
        <HowToReg className={classes.PersonPin} />
        <Typography align='center' variant='h5' gutterBottom>
          Signup
        </Typography>
      </Grid>
      <Grid item xs={12} lg={12} className={classes.Inputs}>
        <Grid xs={12} lg={6} item>
          <TextField
            type='text'
            label='Name'
            size='medium'
            fullWidth
            value={name}
            error={error.nameError ? true : false}
            onChange={handleName}
            className={classes.Input}
            onBlur={handleName}
          />
          {error.nameError && (
            <Typography align='left' color='error' variant='subtitle2'>
              {error.nameError}
            </Typography>
          )}
        </Grid>
        <Grid xs={12} lg={6} item>
          <TextField
            type='email'
            label='Email'
            size='medium'
            fullWidth
            value={email}
            onChange={handleEmail}
            error={error.emailError ? true : false}
            className={classes.Input}
            onBlur={handleEmail}
          />
          {error.emailError && (
            <Typography align='left' color='error' variant='subtitle2'>
              {error.emailError}
            </Typography>
          )}
        </Grid>
        <Grid
          xs={12}
          lg={6}
          item
          style={{ display: "flex", position: "relative" }}
        >
          <TextField
            type={showPassword ? "text" : "password"}
            label='Password'
            fullWidth
            className={classes.Input}
            value={password}
            error={error.passwordError ? true : false}
            onChange={(e) => setPassword(e.target.value)}
          />
          <div
            className={classes.VisibleIcon}
            onClick={() => setShowPassword((prevState) => !prevState)}
          >
            {showPassword ? <Visibility /> : <VisibilityOff />}
          </div>
        </Grid>
        <Grid xs={12} lg={6} item>
          <TextField
            type={showPassword ? "text" : "password"}
            label='Re-enter the password'
            fullWidth
            className={classes.Input}
            value={rePassword}
            error={error.passwordError ? true : false}
            onChange={(e) => setRePassword(e.target.value)}
          />
          {error.passwordError && (
            <Typography align='left' color='error' variant='subtitle2'>
              {error.passwordError}
            </Typography>
          )}
        </Grid>
        <Button
          className={classes.button}
          variant='contained'
          color='primary'
          fullWidth
          disabled={
            error.emailError === null &&
            error.nameError === null &&
            error.passwordError === null
              ? false
              : true
          }
        >
          Signup
        </Button>
        <Typography
          align='center'
          color='primary'
          variant='subtitle2'
          gutterBottom
          style={{
            marginTop: "7px",
          }}
        >
          Already have an account ?<Link to='/login'> Login</Link>
        </Typography>
      </Grid>
    </Grid>
  );
};

export default SignupForm;
