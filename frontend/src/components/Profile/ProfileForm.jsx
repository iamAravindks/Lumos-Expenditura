import { Button, Grid, TextField, Typography } from "@material-ui/core";
import { Visibility, VisibilityOff } from "@material-ui/icons";
import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../context/authContext/authContext.js";
import { ErrorContext } from "../../context/errorContext/ErrorContext.js";

import useStyles from "./ProfileStyles.js";
const ProfileForm = () => {
  const classes = useStyles();
  const { userInfo, loading } = useContext(AuthContext);
  const { setError: setServerError } = useContext(ErrorContext);
  const [showPassword, setShowPassword] = useState(false);
  const [disable, setDisable] = useState(true);
  const [error, setError] = useState(null);
  const [name, setName] = useState(userInfo.name)
  const [email, setEmail] = useState(userInfo.email)
  const [password, setPassword] = useState("")
  const [rePassword,setRePassword]=useState("")

  const handleCancel = () =>
  {
    setEmail(userInfo.email)
    setName(userInfo.name)
    setPassword("")
    setRePassword("")
    setDisable(true);
  }
    useEffect(() => {
      if (password !== rePassword) {
        setError("passwords doesn't match");
      } else {
        setError(null);
      }
    }, [rePassword]);
  return (
    <Grid container spacing={2} className={classes.ProfileForm}>
      <Grid item xs={12}>
        <Grid item xs={12} lg={6}>
          <TextField
            type='text'
            label='Name'
            size='medium'
            fullWidth
            disabled={disable}
            className={classes.Input}
            onChange={(e) => setName(e.target.value)}
            value={name}
          />
        </Grid>
        <Grid item xs={12} lg={6}>
          <TextField
            type='email'
            label='Email'
            size='medium'
            fullWidth
            disabled={disable}
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className={classes.Input}
          />
        </Grid>
        {!disable && (
          <>
            <Grid
              xs={12}
              item
              style={{ display: "flex", position: "relative" }}
            >
              <TextField
                type={showPassword ? "text" : "password"}
                label='New Password'
                fullWidth
                value={password}
                className={classes.Input}
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
                value={rePassword}
                className={classes.Input}
                onChange={(e) => setRePassword(e.target.value)}
              />
              {error && (
                <Typography align='left' color='error' variant='subtitle2'>
                  {error}
                </Typography>
              )}
            </Grid>
          </>
        )}
      </Grid>
      <Button
        className={classes.button}
        variant='contained'
        color='primary'
        fullWidth
        onClick={() => setDisable(false)}
      >
        Update Profile
      </Button>
      {!disable && (
        <Button
          className={classes.button}
          variant='contained'
          color='secondary'
          fullWidth
          onClick={handleCancel}
        >
          cancel
        </Button>
      )}
    </Grid>
  );
};

export default ProfileForm;
