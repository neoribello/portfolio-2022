import React from 'react';
import PortfolioTheme from './lib/theme/PortfolioTheme';
import {
  Typography,
  Button
} from "@mui/material";

function App() {
  return (
    <>
    <PortfolioTheme>
      <div className="App">
        <Typography variant="h4">
          hello
        </Typography>
        <Button
          variant="resume-button">
            s
          </Button>
      </div>
    </PortfolioTheme>
    </>
  );
}

export default App;
