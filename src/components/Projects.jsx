import React from 'react';
import { Grid, Typography, ImageList, ImageListItem } from '@mui/material';
import { makeStyles } from "@material-ui/styles"

import CircularLoader from '../lib/components/CircularLoader';
import GreyContainer from '../lib/components/GreyContainer';

const useStyles = makeStyles({
  gridContainer: {
    alignItems: 'flex-start',
    marginTop: '100px',
    justifyContent: 'space-between',
  },
  gridItem: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    height: '100%',
    textAlign: 'center'
  },
	gridTitle: {
		display: 'flex',
		justifyContent: 'center',
		padding: '0 0 60px'
	}
});

const Projects = (props) => {
	console.log(props)
	const classes = useStyles();
	return (
		<>
			{props.isError && <p>{props.isError.message}</p>}
			<Grid container className={classes.gridContainer}>
				<Grid item xs={12} sm={12} md={12} lg={12} className={classes.gridTitle}>
				<Typography variant="h3">
					Personal Projects
				</Typography>
				</Grid>
				<Grid 
					item xs={12} sm={12} md={3.5} lg={3.5}
				>
					<GreyContainer>

					</GreyContainer>
				</Grid>
				<Grid 
					item xs={12} sm={12} md={3.5} lg={3.5}
				>
					<GreyContainer>
						
					</GreyContainer>
				</Grid>
				<Grid 
					item xs={12} sm={12} md={4} lg={4}
				>
					<GreyContainer>
						
					</GreyContainer>
				</Grid>
      </Grid>
		</>
	);
};

export default Projects;