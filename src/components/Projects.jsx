import React from 'react';
import { Grid, Typography, CardMedia, CardContent, Card, CardActionArea } from '@mui/material';
import { makeStyles } from "@material-ui/styles"
import parse from 'html-react-parser';

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
	},
	gridItems: {
		display: 'flex',
		flexDirection: 'row',
		gap: '50px'
	},
	projectImage: {
		maxWidth: '100%',
		maxHeight: '100%',
		objectPosition: 'top'
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
					className={classes.gridItems}
					
					container
				>
					{props.projectData.map((item, index) => (
						<Grid item xs={12} sm={12} md={5.5} lg={5.5}>
							<GreyContainer key={index}>
								<CardMedia
									component="img"
									height="200"
									image={`http://localhost:1338${item.attributes.projectImg.data.attributes.url}`}
									alt={item.attributes.projectTitle}
									className={classes.projectImage}
								/>
								<CardContent>
									<Typography gutterBottom variant="h5" component="div">
										{item.attributes.projectTitle}
									</Typography>
									<Typography variant="body2" color="text.secondary">
										{item.attributes.projectDescription}
									</Typography>
									<Typography component={'span'} variant={'body2'}>
										{parse(item.attributes.projectTags)}
									</Typography>
								</CardContent>
							</GreyContainer>
						</Grid>
					))}
				</Grid>
      </Grid>
		</>
	);
};

export default Projects;