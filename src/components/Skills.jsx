import React from 'react';
import { Grid, Typography, ImageList, ImageListItem } from '@mui/material';
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
    textAlign: 'center'
  },
  logoItem: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    padding: '20px'
  }
});

function Skills(props) {
	// console.log(props.skillsetData[0].attributes.skillsetLogos.data)
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
                <GreyContainer>
                  <Typography variant="h3">
                    {props.skillsetData[0].attributes.skillsetTitle}
                  </Typography>
                    <ImageList cols={3} >
                      {props.skillsetData[0].attributes.skillsetLogos.data.map((item) => (
                        <ImageListItem
                          className={classes.logoItem}
                        >
                          <img 
                            src={`http://localhost:1338${item.attributes.url}?w=50&h=50&fit=crop&auto=format`}
                            srcSet={`http://localhost:1338${item.attributes.url}`}
                            alt={item.attributes.name}
                            loading="lazy"
                            style={{height: '75px', width: '75px'}}
                          />
                        </ImageListItem>
                      ))}
                    </ImageList>
                </GreyContainer>
              </Grid>
              <Grid 
                item xs={12} sm={12} md={5.5} lg={5.5}
              >
                <GreyContainer>
                  <Typography variant="h3">
                    {props.skillsetData[1].attributes.skillsetTitle}
                  </Typography>
                  <ImageList cols={3} >
                      {props.skillsetData[1].attributes.skillsetLogos.data.map((item) => (
                        <ImageListItem
                          className={classes.logoItem}
                        >
                          <img 
                            src={`http://localhost:1338${item.attributes.url}?w=50&h=50&fit=crop&auto=format`}
                            srcSet={`http://localhost:1338${item.attributes.url}`}
                            alt={item.attributes.name}
                            loading="lazy"
                            style={{height: '75px', width: '75px'}}
                          />
                        </ImageListItem>
                      ))}
                    </ImageList>
                </GreyContainer>
              </Grid>
            </Grid>
        </>
      )} 
		</>
	);
}

export default Skills;