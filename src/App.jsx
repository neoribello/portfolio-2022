import React, { useEffect, useState } from 'react';
// import useAxios from './lib/data';
import PortfolioTheme from './lib/theme/PortfolioTheme';
import axios from 'axios';
import Navbar from './components/Navbar';
import Hero from './components/Hero';


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
  
  return (
    <>
    <PortfolioTheme>
      <Navbar/>
      <Hero
        heroData={heroData}
        isError={err}
        isLoading={loading}
      />
    </PortfolioTheme>
    </>
  );
}

export default App;
