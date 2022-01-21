import {  Grid } from "@material-ui/core";
import Hero from "../Hero/Hero";
import LoginForm from "./LoginForm";
import useStyles from "./LoginStyles";
const Login = () =>
{
    const classes = useStyles();
  return (
    <Grid container spacing={0} className={classes.grid}>
      <Grid item xs={12} sm={12} lg={6} className={classes.FormContainer}>
        <LoginForm />
      </Grid>
      <Grid item xs={12} sm={12} lg={6} className={classes.Hero}>
        <Hero/>
      </Grid>
    </Grid>
  );
}

export default Login