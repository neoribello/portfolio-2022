import React from 'react';

import { Grid, Typography } from '@mui/material';

import Image from 'material-ui-image'
import heroImg from '../lib/img/heroImg.jpg';


function Hero(props) {
  return (
    <>  
    {props.isLoading ? (
      <p>isLoading...</p>
      ) : (
        <div>
          {props.isError && <p>{props.isError.message}</p>}
          <Grid container>
            <Grid item>
              <Typography variant="h1">
                {props.heroData.heroName}
              </Typography>
              <Typography variant="h2">
                {props.heroData.heroHeadline}
              </Typography>
            </Grid>
            <Grid item>
              <Image
                src={heroImg}
              />
            </Grid>
          </Grid>
        </div>
      )} 
    </>
  );
}

export default Hero;
