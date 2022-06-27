import React from 'react';
import { Grid, Typography, TextField, Button } from '@mui/material';
import { makeStyles } from "@material-ui/styles"
import CircularLoader from '../lib/components/CircularLoader';

const useStyles = makeStyles({
		gridContainer: {
			width: '100%',
			display: 'flex',
			justifyContent: 'center',
			alignItems: 'center',
			background: '#F5F5F5',
			flexDirection: 'column !important'
		}
  });

  
function Footer(props) {
	console.log(props)
	const classes = useStyles();
	return (
		<>
			<Grid className={classes.gridContainer}>
				<Typography variant="h3">
					Get in touch
				</Typography>
				<Typography variant="h5">
					Want to work tougether or have any questions?
				</Typography>
			</Grid>
		</>
	);
}

export default Footer;