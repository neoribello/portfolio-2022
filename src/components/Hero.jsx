import React, { useEffect, useState } from 'react';
import axios from 'axios';
import useAxios from '../lib/data';

import { Grid, Box, Typography } from '@mui/material';


function Hero() {
  const [data, setData] = useState([]);
  const [todo, isError, isLoading] = useAxios({
    url: 'heroes',
    method: 'get',
  });
  useEffect(() => {
    if(todo && todo.data) setData(todo.data.data[0].attributes)
 }, [todo]);


  return (
    <>  
    {isLoading ? (
      <p>isLoading...</p>
      ) : (
        <div>
          {isError && <p>{isError.message}</p>}
          <Grid>
          <Box>
            <Typography variant="h1">
              {data.heroName}
            </Typography>
            <Typography variant="h2">
              {data.heroHeadline}
            </Typography>
          </Box>
          <Box>
            
          </Box>
            </Grid>
        </div>
      )} 
    </>
  );
}

export default Hero;
