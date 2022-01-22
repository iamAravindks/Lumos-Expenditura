import {  Button, Grid,  TextField, Typography } from "@material-ui/core";
import {  HowToReg,  } from "@material-ui/icons";
import { Link } from "react-router-dom";
import useStyles from "./SignupStyles";
const SignupForm = () =>
{
    const classes = useStyles()
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
            className={classes.Input}
          />
        </Grid>
        <Grid xs={12} lg={6} item>
          <TextField
            type='email'
            label='Email'
            size='medium'
            fullWidth
            className={classes.Input}
          />
        </Grid>
        <Grid xs={12} lg={6} item>
          <TextField
            type='password'
            label='Password'
            fullWidth
            className={classes.Input}
          />
        </Grid>
        <Grid xs={12} lg={6} item>
          <TextField
            type='password'
            label='Re-enter the password'
            fullWidth
            className={classes.Input}
          />
        </Grid>
        <Button
          className={classes.button}
          variant='contained'
          color='primary'
          fullWidth
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
          Already have an account ?
          <Link exact to='/login'>
            {" "}
            Login
          </Link>
        </Typography>
      </Grid>
    </Grid>
  );
};

export default SignupForm;
