import React from 'react';
import { Grid, Typography } from '@mui/material';
import { makeStyles } from "@material-ui/styles"

import heroImg from '../lib/img/heroImg.jpg';
import CircularLoader from '../lib/components/CircularLoader';

const useStyles = makeStyles({
  gridContainer: {
    width: '100%',
    alignItems: 'center'
  },
  heroImg: {
    width: '100%',
    height: '100%'
  },
  heroIntro:  {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    height: '100%',
    gap: '20px'
  }
});

function Hero(props) {
  const classes = useStyles();
  return (
    <>  
    {props.isLoading ? (
      <>
        <CircularLoader/>
      </>
      ) : (
        <>
          {props.isError && <p>{props.isError.message}</p>}
          <Grid container spacing={10} className={classes.gridContainer}>
            <Grid 
              item xs={12} sm={12} md={6} lg={6}
              className={classes.heroIntro}
            >
              <img src={heroImg} alt="hero" className={classes.heroImg}/>
            </Grid>
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
          </Grid>
        </>
      )} 
    </>
  );
}

export default Hero;
