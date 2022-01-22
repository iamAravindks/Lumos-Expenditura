import {  Grid } from "@material-ui/core";
import Hero from "../Hero/Hero";
import SignupForm from "./SignupForm";
import useStyles from "./SignupStyles";
import welcome from "../../assets/welcome.svg";
const Signup = () =>
{
  const classes = useStyles();
  return (
    <Grid container spacing={0} className={classes.grid} >
      <Grid item xs={12} sm={12} lg={6} className={classes.FormContainer}>
        <SignupForm />
      </Grid>
      <Grid item xs={12} sm={12} lg={6} className={classes.Hero}>
        <Hero
          Image={welcome}
          title='Visualize your expenses'
          subtitle='Save your money with conscious spending'
        />
      </Grid>
    </Grid>
  );
}

export default Signup