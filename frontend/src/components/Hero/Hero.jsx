import React from 'react';
import { Grid, ThemeProvider, Typography } from "@material-ui/core";
import useStyles,{theme} from './HeroStyles'


const Hero = ({Image,title,subtitle}) =>
{
    const classes = useStyles()
  return (
    <ThemeProvider theme={theme}>
      <Grid container className={classes.HeroContainer}>
        <Grid item xs={12} className={classes.HeroImgContainer}>
          <img
            src={Image}
            className={classes.HeroImg}
            alt='Welcome'
          />
        </Grid>
        <Grid item xs={12} className={classes.HeroTitle}>
          <Typography align='left' variant='h2' >
            {title}
          </Typography>
          <Typography
            align='left'
            variant='subtitle1'
          >
            {subtitle}
          </Typography>
        </Grid>
      </Grid>
    </ThemeProvider>
  );
};

export default Hero;
