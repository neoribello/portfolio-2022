import React from 'react';
import { Grid, Typography } from '@mui/material';
import { makeStyles } from "@material-ui/styles"

import CircularLoader from '../lib/components/CircularLoader';
import GreyContainer from '../lib/components/GreyContainer';

const useStyles = makeStyles({
  gridContainer: {
    width: '100%',
    alignItems: 'center',
    marginTop: '150px'
  },
  introHeader: {
    alignItems: 'center',
    justifyContent: 'center',
    display: 'flex'
  }
});

function Introduction(props) {
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
            <Grid container className={classes.gridContainer}>
              <GreyContainer>
              <Grid 
                item xs={12} sm={12} md={12} lg={12}
                className={classes.introHeader}
                flexDirection="column"
              >
                <Typography 
                  variant="h3"
                  sx={{
                    textAlign: 'center'
                  }}
                >
                  {props.introductionData.introductionHeader}
                </Typography>
                <Typography
                  sx={{
                    width: '70%',
                    marginTop: '25px'
                  }}
                >
                  {props.introductionData.introductionContent}
                </Typography>

              </Grid>
              </GreyContainer>
            </Grid>
          </>
      )} 
    </>
  );
}

export default Introduction;