import React from 'react';
import { Grid, ThemeProvider, Typography } from "@material-ui/core";
import useStyles,{theme} from './HeroStyles'
import projections from '../../assets/projectionsWhite.svg'

const Hero = () =>
{
    const classes = useStyles()
  return (
    <ThemeProvider theme={theme}>
      <Grid container className={classes.HeroContainer}>
        <Grid item xs={12} className={classes.HeroImgContainer}>
          <img
            src={projections}
            animationDuration={1000}
            className={classes.HeroImg}
            alt='Welcome'
          />
        </Grid>
        <Grid item xs={12} className={classes.HeroTitle}>
          <Typography align='left' variant='h2' >
            Manage the money on go
          </Typography>
          <Typography
            align='left'
            variant='subtitle1'
          >
            The right app make the easy to manage your expenses on the go
          </Typography>
        </Grid>
      </Grid>
    </ThemeProvider>
  );
};

export default Hero;
