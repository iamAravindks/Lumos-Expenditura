import {  Button, Grid,  TextField, Typography } from "@material-ui/core";
import {  PersonPin, Visibility, VisibilityOff } from "@material-ui/icons";
import { useContext, useEffect, useState } from "react";
import { Link ,useHistory} from "react-router-dom";
import { isValidEmail } from "../../utils/formValidation";
import useStyles from "./LoginStyles";
import {AuthContext} from '../../context/authContext/authContext'
import Loader from "../Loader/Loader";
import { ErrorContext } from "../../context/errorContext/ErrorContext";
import Alert from "../Alert/Alert";
const LoginForm = () =>
{
  const { userInfo, loading, login } = useContext(AuthContext);
  const {error,setError} = useContext(ErrorContext)
  const classes = useStyles()
  const history = useHistory()
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [showPassword, setShowPassword] = useState(false)
  const [formError, setFormError] = useState({
    emailError: null,
    passWordError:null
  })

    const handleEmail = (e) => {
      setEmail(e.target.value);
      if (!isValidEmail(e.target.value))
        setFormError((prevState) => ({
          ...prevState,
          emailError: "invalid email",
        }));
      else {
        setFormError((prevState) => ({
          ...prevState,
          emailError: null,
        }));
      }
    };
  
  const handlePassword = (e) =>
  {
          if (e.target.value.length===0)
            setFormError((prevState) => ({
              ...prevState,
              passWordError: "Password can't be empty",
            }));
          else {
            setFormError((prevState) => ({
              ...prevState,
              passWordError: null,
            }));
          }
  }
  const handleSubmission = () =>
  {
    if (email && password) login(email, password)
    else setError("Check all fields")
    
  }
  useEffect(() =>
  {
    if(userInfo) history.push("/")
  },[userInfo])

  return (
    <>
      {loading && <Loader />}

      <Grid container spacing={3} style={{minWidth:"400px"}} className={classes.LoginForm}>
        {error && <Alert severity="error" message={error} />}
        <Grid item xs={12} style={{ height: "100px" }}>
          <PersonPin className={classes.PersonPin} />
          <Typography align="center" variant="h5" gutterBottom>
            Login
          </Typography>
        </Grid>
        <Grid item xs={12} lg={12} className={classes.Inputs}>
          <Grid xs={12} lg={6} item>
            <TextField
              type="email"
              label="email"
              size="medium"
              error={formError.emailError ? true : false}
              value={email}
              onChange={handleEmail}
              fullWidth
              className={classes.Input}
            />
            {formError.emailError && (
              <Typography align="left" color="error" variant="subtitle2">
                {formError.emailError}
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
              label="Password"
              value={password}
              error={formError.passWordError ? true : false}
              onChange={(e) => setPassword(e.target.value)}
              fullWidth
              className={classes.Input}
              onBlur={handlePassword}
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
            variant="contained"
            color="primary"
            fullWidth
            disabled={
              formError.emailError || formError.passWordError ? true : false
            }
            onClick={handleSubmission}
          >
            Login
          </Button>
          <Typography
            align="center"
            color="textSecondary"
            variant="subtitle2"
            gutterBottom
            style={{
              marginTop: "7px",
            }}
          >
            Forgot password ?
            <Link  to="/forgot-password"> Reset your password</Link>
          </Typography>
          <Typography
            align="center"
            color="primary"
            variant="subtitle2"
            gutterBottom
            style={{
              marginTop: "7px",
            }}
          >
            Not registered yet?
            <Link to="/signup"> Create an Account</Link>
          </Typography>
        </Grid>
      </Grid>
    </>
  );
};

export default LoginForm;
