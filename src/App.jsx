import React, { useEffect, useState } from 'react';
// import useAxios from './lib/data';

import { Box } from '@mui/material';
import { makeStyles } from "@material-ui/styles"

import PortfolioTheme from './lib/theme/PortfolioTheme';
import axios from 'axios';
import Navbar from './components/Navbar';
import Hero from './components/Hero';

const useStyles = makeStyles({
  boxContainer: {
    width: '100%',
    maxWidth: '1280px',
    margin: '75px auto'
  }
});

function App() {
  const [heroData, setHeroData] = useState([]);
  const [err, setErr] = useState('');
  const [loading, setLoading] = useState(true);
 
  useEffect(() => {
    const fetchData = () => {
      const heroUrl = 'http://localhost:1338/api/heroes?populate=*'
      const getHero = axios.get(heroUrl)
      axios.all([getHero])
        .then(
          axios.spread((...allData) => {
            setHeroData(allData[0].data.data[0].attributes)
          })
        )
        .catch(err => {
          setErr(err)
        })
        .finally(() => {
          setLoading(false)
        })
    }
    fetchData();
  }, []);

  const classes = useStyles();
  return (
    <>
    <PortfolioTheme>
      <Navbar/>
      <Box className={classes.boxContainer}>
        <Hero
          heroData={heroData}
          isError={err}
          isLoading={loading}
        />
      </Box>
    </PortfolioTheme>
    </>
  );
}

export default App;
