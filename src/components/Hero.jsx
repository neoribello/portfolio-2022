import React from 'react';
import { Grid, Typography } from '@mui/material';
import { makeStyles } from "@material-ui/styles"

import heroImg from '../lib/img/heroImg.jpg';

const useStyles = makeStyles({
  gridContainer: {
    width: '100%',
    maxWidth: '1280px'
  },
  heroImg: {
    width: '100%'
  },
  heroIntro:  {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center'
  }
});

function Hero(props) {
  const classes = useStyles();
  console.log(props)
  return (
    <>  
    {props.isLoading ? (
      <p>isLoading...</p>
      ) : (
        <>
          {props.isError && <p>{props.isError.message}</p>}
          <Grid container spacing={2} className={classes.gridContainer}>
            <Grid 
              item xs={12} sm={12} md={6} lg={6} 
              className={classes.heroIntro}
              flexDirection="column"
            >
              <Typography variant="h1">
                {props.heroData.heroName}
              </Typography>
              <Typography variant="h2">
                {props.heroData.heroHeadline}
              </Typography>
            </Grid>
            <Grid item xs={12} sm={12} md={6} lg={6}>
            <img src={heroImg} alt="hero" className={classes.heroImg}/>
            </Grid>
          </Grid>
        </>
      )} 
    </>
  );
}

export default Hero;
