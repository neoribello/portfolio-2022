import React from 'react';
import PortfolioTheme from './lib/theme/PortfolioTheme';

import Navbar from './components/Navbar';
import Hero from './components/Hero';

function App() {
  return (
    <>
    <PortfolioTheme>
      <Navbar/>
      <Hero/>
    </PortfolioTheme>
    </>
  );
}

export default App;
