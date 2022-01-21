import {  Button, Grid, TextField, Typography } from "@material-ui/core";
import {  PersonPin } from "@material-ui/icons";
import useStyles from "./LoginStyles";
const LoginForm = () =>
{
    const classes = useStyles()
  return (
    <Grid container spacing={2} className={classes.LoginForm}>
      <Grid item xs={12} style={{ height: "100px" }}>
        <PersonPin className={ classes.PersonPin}/>
        <Typography align='center' variant='h5' gutterBottom>
          Login
        </Typography>
      </Grid>
      <Grid item xs={12} className={classes.Inputs}>
        <Grid xs={12} item>
          <TextField type='email' label='email' fullWidth />
        </Grid>
        <Grid xs={12} item>
          <TextField type='password' label='Password' fullWidth />
        </Grid>
        <Button
          className={classes.button}
          variant='contained'
          color='primary'
          fullWidth
        >
          Login
        </Button>
      </Grid>
    </Grid>
  );
};

export default LoginForm;
