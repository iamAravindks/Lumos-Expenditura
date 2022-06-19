import {  Grid } from "@material-ui/core";
import Hero from "../Hero/Hero";
import LoginForm from "./LoginForm";
import useStyles from "./LoginStyles";
import projections from "../../assets/projectionsWhite.svg";
const Login = () =>
{
    const classes = useStyles();
  return (
    <Grid container spacing={0} className={classes.grid}>
      <Grid item xs={12} sm={12} lg={6} className={classes.FormContainer}>
        <LoginForm />
      </Grid>
      <Grid item xs={12} sm={12} lg={6} className={classes.Hero}>
        <Hero
          Image={projections}
          title='Manage the money on go'
          subtitle='The right app make the easy to manage your expenses on the go'
        />
      </Grid>
    </Grid>
  );
}

export default Login