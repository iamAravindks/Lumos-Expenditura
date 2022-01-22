import {  Button, Grid,  TextField, Typography } from "@material-ui/core";
import {  PersonPin, Visibility, VisibilityOff } from "@material-ui/icons";
import { useState } from "react";
import { Link } from "react-router-dom";
import { isValidEmail } from "../../utils/formValidation";
import useStyles from "./LoginStyles";
const LoginForm = () =>
{
  const classes = useStyles()
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [showPassword, setShowPassword] = useState(false)
  const [error, setError] = useState(null)
    const handleEmail = (e) => {
      setEmail(e.target.value);
      if (!isValidEmail(e.target.value))
        setError("invalid email");
      else {
        setError(null);
      }
    };
  return (
    <Grid container spacing={2} className={classes.LoginForm}>
      <Grid item xs={12} style={{ height: "100px" }}>
        <PersonPin className={classes.PersonPin} />
        <Typography align='center' variant='h5' gutterBottom>
          Login
        </Typography>
      </Grid>
      <Grid item xs={12} lg={12} className={classes.Inputs}>
        <Grid xs={12} lg={6} item>
          <TextField
            type='email'
            label='email'
            size='medium'
            error={error ? true : false}
            value={email}
            onChange={handleEmail}
            fullWidth
            className={classes.Input}
          />
          {error && (
            <Typography align='left' color='error' variant='subtitle2'>
              {error}
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
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            fullWidth
            className={classes.Input}
          ></TextField>
          <div
            className={classes.VisibleIcon}
            onClick={() => setShowPassword((prevState) => !prevState)}
          >
            {showPassword ? <Visibility /> : <VisibilityOff />}
          </div>
        </Grid>
        <Button
          className={classes.button}
          variant='contained'
          color='primary'
          fullWidth
          disabled={error ? true : false}
        >
          Login
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
          Not registered yet?
          <Link exact to='/signup'>
            {" "}
            Create an Account
          </Link>
        </Typography>
      </Grid>
    </Grid>
  );
};

export default LoginForm;
