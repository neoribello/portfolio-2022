import React, { useEffect, useState } from 'react';
// import useAxios from './lib/data';

import { Box } from '@mui/material';
import { makeStyles } from "@material-ui/styles"

import PortfolioTheme from './lib/theme/PortfolioTheme';
import axios from 'axios';

import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Introduction from './components/Introduction';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Footer from './components/Footer';

const useStyles = makeStyles({
  boxContainer: {
    width: '100%',
    maxWidth: '1024px',
    margin: '75px auto'
  }
});

function App() {
  const [heroData, setHeroData] = useState([]);
  const [introductionData, setIntroductionData] = useState([])
  const [skillsetData, setSkillsetData] = useState([])
  const [projectData, setprojectData] = useState([])
  const [footerData, setfooterData] = useState([])
  const [err, setErr] = useState('');
  const [loading, setLoading] = useState(true);
 
  useEffect(() => {
    const fetchData = () => {
      const heroUrl = 'http://localhost:1338/api/heroes'
      const introductionUrl = 'http://localhost:1338/api/introductions'
      const skillsetUrl = 'http://localhost:1338/api/skillsets?populate=*'
      const projectUrl = 'http://localhost:1338/api/proejcts?populate=*'
      const footerUrl = 'http://localhost:1338/api/footers'

      const getSkillset = axios.get(skillsetUrl)
      const getHero = axios.get(heroUrl)
      const getIntroduction = axios.get(introductionUrl)
      const getprojectUrl = axios.get(projectUrl)
      const getfooterUrl = axios.get(footerUrl)

      axios.all([getHero, getIntroduction, getSkillset, getprojectUrl, getfooterUrl])
        .then(
          axios.spread((...allData) => {
            setHeroData(allData[0].data.data[0].attributes)
            setIntroductionData(allData[1].data.data[0].attributes)
            setSkillsetData(allData[2].data.data)
            setprojectData(allData[3].data.data)
            setfooterData(allData[4].data.data[0].attributes)
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
          <Introduction
            introductionData={introductionData}
            isError={err}
            isLoading={loading}
          />
          <Skills
            skillsetData={skillsetData}
            isError={err}
            isLoading={loading}
          />
          <Projects
            projectData={projectData}
            isError={err}
            isLoading={loading}
          />
        </Box>
      <Footer
        footerData={footerData}
        isError={err}
        isLoading={loading}
      />
    </PortfolioTheme>
    </>
  );
}

export default App;
