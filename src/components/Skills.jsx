import React from 'react';
import { Grid, Typography } from '@mui/material';
import { makeStyles } from "@material-ui/styles"

import CircularLoader from '../lib/components/CircularLoader';
import GreyContainer from '../lib/components/GreyContainer';

const useStyles = makeStyles({
  gridContainer: {
    alignItems: 'center',
    marginTop: '100px',
    gap: '10px',
    justifyContent: 'space-between'
  },
  gridItem: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    height: '100%',
  }
});

function Skills(props) {
	console.log(props.skillsetData[0].attributes)
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
              <Grid 
                item xs={12} sm={12} md={5.5} lg={5.5}
              >
                <GreyContainer className={classes.gridItem}>
                  <Typography variant="h3">
                    {props.skillsetData[0].attributes.skillsetTitle}
                  </Typography>
                </GreyContainer>
              </Grid>
              <Grid 
                item xs={12} sm={12} md={5.5} lg={5.5}
              >
                <GreyContainer className={classes.gridItem}>
                  <Typography variant="h3">
                    {props.skillsetData[1].attributes.skillsetTitle}
                  </Typography>
                </GreyContainer>
              </Grid>
            </Grid>
        </>
      )} 
		</>
	);
}

export default Skills;