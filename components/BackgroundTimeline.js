import styles from "../styles/WorkTimeline.module.css";
import { makeStyles } from "@material-ui/core/styles";
import Timeline from "@material-ui/lab/Timeline";
import TimelineItem from "@material-ui/lab/TimelineItem";
import TimelineSeparator from "@material-ui/lab/TimelineSeparator";
import TimelineConnector from "@material-ui/lab/TimelineConnector";
import TimelineContent from "@material-ui/lab/TimelineContent";
import TimelineOppositeContent from "@material-ui/lab/TimelineOppositeContent";
import TimelineDot from "@material-ui/lab/TimelineDot";
import FastfoodIcon from "@material-ui/icons/Fastfood";
import LaptopMacIcon from "@material-ui/icons/LaptopMac";
import HotelIcon from "@material-ui/icons/Hotel";
import SchoolIcon from "@material-ui/icons/School";
import Paper from "@material-ui/core/Paper";
import Typography from "@material-ui/core/Typography";
const useStyles = makeStyles((theme) => ({
	paper: {
		padding: "6px 16px",
	},
	secondaryTail: {
		backgroundColor: theme.palette.secondary.main,
	},
}));
export default function BackgroundTimeline() {
	const classes = useStyles();
	return (
		<div className={styles.timeline} style={{ margin: "20px 0px" }}>
			<h2>Educational Background</h2>
			<Timeline align="alternate">
				<TimelineItem>
					<TimelineOppositeContent>
						{/* <Typography variant="body2" color="textSecondary">
							10:00 am
						</Typography> */}
						<p>2018 - 2020</p>
					</TimelineOppositeContent>
					<TimelineSeparator>
						<TimelineDot color="primary">
							<SchoolIcon />
						</TimelineDot>
						<TimelineConnector />
					</TimelineSeparator>
					<TimelineContent>
						<Paper
							elevation={3}
							className={classes.paper}
							style={{ padding: "10px 25px" }}
						>
							<Typography variant="h6" component="h1">
								WorldQuant University
							</Typography>
							<Typography>Master's degree, Financial engineering</Typography>
						</Paper>
					</TimelineContent>
				</TimelineItem>
				<TimelineItem>
					<TimelineOppositeContent>
						<p>2016 - 2018</p>
					</TimelineOppositeContent>
					<TimelineSeparator>
						<TimelineDot>
							<SchoolIcon />
						</TimelineDot>
						<TimelineConnector />
					</TimelineSeparator>
					<TimelineContent>
						<Paper
							elevation={3}
							className={classes.paper}
							style={{ padding: "10px 25px" }}
						>
							<Typography variant="h6" component="h1">
								New York University - Leonard N. Stern School of Business
							</Typography>
							<Typography>Master’s Degree  </Typography>
						</Paper>
					</TimelineContent>
				</TimelineItem>

				<TimelineItem>
					<TimelineOppositeContent>
						{/* <Typography variant="body2" color="textSecondary">
							10:00 am
						</Typography> */}
						<p>2010 - 2014</p>
					</TimelineOppositeContent>
					<TimelineSeparator>
						<TimelineDot color="primary">
							<SchoolIcon />
						</TimelineDot>
						{/* <TimelineConnector className={classes.secondaryTail} /> */}
					</TimelineSeparator>
					<TimelineContent>
						<Paper
							elevation={3}
							className={classes.paper}
							style={{ padding: "10px 25px" }}
						>
							<Typography variant="h6" component="h1">
								Sir M Visvesvaraya Institute Of Technology
							</Typography>
							<Typography>Research Assistant</Typography>
							<ul>
								<li>
									Gold Medalist for being the Topper of Visvesvaraya
									Technological University (VTU).
								</li>
								<li>
									Have maintained First Class with Distinction throughout and
									have received a Certificate of appreciation and gold medal for
									the same from Sir MVIT.{" "}
								</li>
								<li>
									Received the Best Student Award for all round performance.{" "}
								</li>
								<li>
									Active member of National Entrepreneurship Network (NEN).
								</li>
								<li>
									A core member of Alphabots, the robotics society of Sir. MVIT
									and have hosted for the Robotics fest and many other events in
									college. Participated and won in Mutics and Thinklabs IIT
									robotics workshop.
								</li>
								<li>Winner of Great Idea award in Avishkara science forum</li>
							</ul>
						</Paper>
					</TimelineContent>
				</TimelineItem>
			</Timeline>
		</div>
	);
}
