import React from 'react';
import { Grid, Typography, CardMedia, CardContent, Link } from '@mui/material';
import GitHubIcon from '@mui/icons-material/GitHub';
import { makeStyles } from "@material-ui/styles"

import ProjectTags from '../lib/components/ProjectTags';
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
	},
	projectTagContainer: {
		marginTop: "40px",
		alignItems: "flex-start",
    gap: "20px"
	},
	titleGrid: {
		display: "flex",
		justifyContent: "space-between",
		alignItems: "center",
		marginBottom: "16px"
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
					 className={classes.gridContainer}
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
									<Grid className={classes.titleGrid}>
										<Typography gutterBottom variant="h5" component="div">
											{item.attributes.projectTitle}
										</Typography>
										<Link
											target="_blank"
											href={item.attributes.projectGithub}
										>
											<GitHubIcon/>
										</Link>
									</Grid>
									<Typography variant="body2" color="text.secondary">
										{item.attributes.projectDescription}
									</Typography>
									<Grid container className={classes.projectTagContainer}>
										{item.attributes.projectTags.name.map((tag, index) => (
											<ProjectTags
												className={classes.gridItem}
												key={index}
												label={tag}
											/>
										))}
									</Grid>
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