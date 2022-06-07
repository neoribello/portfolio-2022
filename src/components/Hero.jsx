import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { heroData } from '../lib/data';

import { Grid, Box, Typography } from '@mui/material';


function Hero() {
  const [data, setData] = useState([]);

  const url = 'http://localhost:1338/api/';

  useEffect(() => {
    getData();
  }, [])

  const getData = () => {
    axios.get(`${url}heroes`)
      .then((response) => {
        const sanitizedData = response.data.data[0].attributes;
        setData(sanitizedData)
      })
  }
  console.log("|||||||||", data)

  return (
    <>
        <Grid>
          <Box>
            <Typography variant="h1">
              Neil Oribello
            </Typography>
            <Typography variant="h2">
              Web Developer
            </Typography>
          </Box>
          <Box>
            
          </Box>
        </Grid>
    </>
  );
}

export default Hero;
