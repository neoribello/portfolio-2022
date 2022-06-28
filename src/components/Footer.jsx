import React from 'react';
import { Grid, Typography, Link } from '@mui/material';
import { makeStyles } from "@material-ui/styles"
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import FeedIcon from '@mui/icons-material/Feed';

const useStyles = makeStyles({
		gridContainer: {
			width: '100%',
			display: 'flex',
			justifyContent: 'center',
			alignItems: 'center',
			background: '#F5F5F5',
			flexDirection: 'column !important',
			padding: '60px'
		},
		linkContainer: {
			width: '400px',
			display: 'flex',
			justifyContent: 'space-around',
			alignItems: 'center',
			paddingTop: '30px'
		},
  });

  
function Footer(props) {
	console.log(props)
	const classes = useStyles();
	return (
		<>
			<Grid className={classes.gridContainer}>
				<Typography variant="h3">
					{props.footerData.footerTitle}
				</Typography>
				<Typography variant="h5">
					{props.footerData.footerSubheader}
				</Typography>
				<Grid className={classes.linkContainer}>
					<Grid item xs={3.5} sm={3.5} md={3.5} lg={3.5}>
						<Link
							target="_blank"
							href="https://github.com/neoribello"
						>
							<GitHubIcon style={{ color:'black' }}/>
						</Link>
					</Grid>
					<Grid item xs={3.5} sm={3.5} md={3.5} lg={3.5}>
						<Link
							target="_blank"
							href="https://www.linkedin.com/in/neil-oribello-65a724139/"
						>
							<LinkedInIcon style={{ color:'black' }}/>
						</Link>
					</Grid>
					<Grid item xs={3.5} sm={3.5} md={3.5} lg={3.5}>
						<Link
							target="_blank"
							href="https://www.pdf.investintech.com/preview-frames.php?id=WGMxUkVjRVMxVTZqTTBFZ25yOFhwbEY0SWZDNmlCbERtZE1xVGRSWkdlZnNndmI1WWM5aUJqVnVaWTU1MmpraWJmSFRpV1BOQ0twTDFPSGpOV2xnZGh1YmdkK0xuaEMrTFZiUm90Si9PNXNuZE5namR1QUlTc090bWdhQzROcms="
						>
						<FeedIcon style={{ color:'black' }}/>
					</Link>
					</Grid>
				</Grid>
			</Grid>
		</>
	);
}

export default Footer;