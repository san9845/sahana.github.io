import styles from "../styles/WorkTimeline.module.css";
import { makeStyles } from "@material-ui/core/styles";
import Timeline from "@material-ui/lab/Timeline";
import TimelineItem from "@material-ui/lab/TimelineItem";
import TimelineSeparator from "@material-ui/lab/TimelineSeparator";
import TimelineConnector from "@material-ui/lab/TimelineConnector";
import TimelineContent from "@material-ui/lab/TimelineContent";
import TimelineOppositeContent from "@material-ui/lab/TimelineOppositeContent";
import TimelineDot from "@material-ui/lab/TimelineDot";
// import FastfoodIcon from "@material-ui/icons/Fastfood";
import LaptopMacIcon from "@material-ui/icons/LaptopMac";
// import HotelIcon from "@material-ui/icons/Hotel";
import Paper from "@material-ui/core/Paper";
import Typography from "@material-ui/core/Typography";
import WorkIcon from "@material-ui/icons/Work";
const useStyles = makeStyles((theme) => ({
	paper: {
		padding: "6px 16px",
	},
	secondaryTail: {
		backgroundColor: theme.palette.secondary.main,
	},
}));
export default function WorkTimeline() {
	const classes = useStyles();
	return (
		<div className={styles.timeline} style={{ margin: "20px 0px" }}>
			<h2>Timeline</h2>
			<Timeline align="alternate">
				<TimelineItem>
					<TimelineOppositeContent>
						<p>June 2017 to Present</p>
					</TimelineOppositeContent>
					<TimelineSeparator>
						<TimelineDot color="primary">
							<WorkIcon />
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
								Millennium Management LLC
							</Typography>
							<Typography>Quantitative Researcher/Data Scientist</Typography>
							<ul>
								<li>
									Primarily focused on alpha research using alternative data,
									evaluated different datasets to identify the best
								</li>
								<li>
									Analyzed masses of unstructured alternative data to develop
									structured quantitative analysis
								</li>
								<li>
									Developed models for identifying and evaluating investment
									opportunities for the investment teams
								</li>
								<li>
									Designed dashboards and presented detailed reports to the
									portfolio managers
								</li>
							</ul>
							<Typography>Quantitative Analyst</Typography>
							<ul>
								<li>
									Built data engineering platform for the Equity trading
									services using Elastic Logstash and Kibana stack
								</li>
								<li>
									Worked on design and development of Low Latency trading
									engine– Next Gen platform for Algo execution
								</li>
								<li>
									Constructed anomaly detection models on system metrics data
									using machine learning algorithms
								</li>
							</ul>
						</Paper>
					</TimelineContent>
				</TimelineItem>
				<TimelineItem>
					<TimelineOppositeContent>
						{/* <Typography variant="body2" color="textSecondary">
							10:00 am
						</Typography> */}
						<p>Jan 2017 to oct 2018</p>
					</TimelineOppositeContent>
					<TimelineSeparator>
						<TimelineDot color="secondary">
							<WorkIcon />
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
								NYU Center for Data Science
							</Typography>
							<Typography>Adjunct Faculty</Typography>
							<ul>
								<li>
									DSGA 3001 - Special Topics in Data Science - Topological Data
									Analysis and Graph Signal
								</li>
								<li>DSGA 1005 - Inference and Representation data</li>
							</ul>
						</Paper>
					</TimelineContent>
				</TimelineItem>
				<TimelineItem>
					<TimelineOppositeContent>
						{/* <Typography variant="body2" color="textSecondary">
							10:00 am
						</Typography> */}
						<p>May 2017 – Jan 2018</p>
					</TimelineOppositeContent>
					<TimelineSeparator>
						<TimelineDot color="primary">
							<WorkIcon />
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
								NYU Stern School of Business
							</Typography>
							<Typography>Research Assistant</Typography>
							<ul>
								<li>
									Assist Professors and Ph.D. students with Research study and
									financial modeling on performance variation as a function of
									incentives; Primarily for SEC data analysis
								</li>
							</ul>
						</Paper>
					</TimelineContent>
				</TimelineItem>
				<TimelineItem>
					<TimelineOppositeContent>
						{/* <Typography variant="body2" color="textSecondary">
							10:00 am
						</Typography> */}
						<p>Sept 2016 - 2017</p>
					</TimelineOppositeContent>
					<TimelineSeparator>
						<TimelineDot color="secondary">
							<WorkIcon />
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
								United Nations
							</Typography>
							<Typography>Intern – Management and Program Analysis</Typography>
							<ul>
								<li>
									Prepare research, analyze and recommend policy options for
									improved support to peace operation
								</li>
								<li>
									Analyze the performance of the global mission support
									portfolio against key indicators
								</li>
								<li>
									Design core identity products that illustrate corporate vision
								</li>
								<li>
									Perform Benefit targeting and suggest budget
									allocation-distribution changes for funding granted by the
									World Bank and IMF for 17 different peace keeping missions.
								</li>
							</ul>
						</Paper>
					</TimelineContent>
				</TimelineItem>
				<TimelineItem>
					<TimelineOppositeContent>
						<p>2014 Sept – 2016 July</p>
					</TimelineOppositeContent>
					<TimelineSeparator color="primary">
						<TimelineDot>
							<WorkIcon />
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
								Altran
							</Typography>
							<Typography>Data Scientist </Typography>
							<ul>
								<li>
									Collected, analyzed, and interpreted large raw data from
									network gateways
								</li>
								<li>
									Developed and implemented new network volume forecasting
									models and channel quality prediction model which increased
									gateway’s efficiency
								</li>
								<li>
									Functioned as a liaison between the business and technical
									teams in documenting business problems and coming up with
									prospective solutions
								</li>
								<li>
									Formulated software solutions and carried out critical root
									cause analysis for problems faced by clients
								</li>
							</ul>
							<Typography> Software developer </Typography>
							<ul>
								<li>
									Performed Development and enhancement on the Product-Media
									Gateway.
								</li>
								<li>
									Worked in C, C++ in Unix development environment, and have
									used versioning tools like clear case in product development.
								</li>
								<li>
									Gained working knowledge on Communication protocol, Operating
									system, media gateway, Data structures, C and C++ programming,
									and debugging skills using GDB.
								</li>
								<li>
									Proactively taken up new work in the team, and helped team
									members in setup creation/debugging
								</li>
								<li>
									Have interacted with the clients globally for giving a work
									around for many issues
								</li>
							</ul>
						</Paper>
					</TimelineContent>
				</TimelineItem>
				<TimelineItem>
					<TimelineOppositeContent>
						{/* <Typography variant="body2" color="textSecondary">
							10:00 am
						</Typography> */}
						<p>2015-2016</p>
					</TimelineOppositeContent>
					<TimelineSeparator>
						<TimelineDot color="secondary">
							<WorkIcon />
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
								Toastmasters International
							</Typography>
							<Typography>Vice President of Public Relations</Typography>
							<ul>
								<li>
									Associate club officer- Vice President of Public Relations,
									Resonance Toastmasters Club - Developed Public relations plan,
									collaborated with the club members and other leaders in
									achieving the set target.
								</li>
							</ul>
						</Paper>
					</TimelineContent>
				</TimelineItem>
				<TimelineItem>
					<TimelineOppositeContent>
						{/* <Typography variant="body2" color="textSecondary">
							10:00 am
						</Typography> */}
						<p>Jan 2014 - Aug 2014 </p>
					</TimelineOppositeContent>
					<TimelineSeparator>
						<TimelineDot color="primary">
							<WorkIcon />
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
								National Aerospace Laboratories
							</Typography>
							<Typography>Research Intern</Typography>
							<ul>
								<li>
									Design and development of Control system for Micro Air
									Vehicles(MAV's) and implementation of Artificial Neural
									Network to increase its efficiency.
								</li>
							</ul>
						</Paper>
					</TimelineContent>
				</TimelineItem>
				<TimelineItem>
					<TimelineOppositeContent>
						{/* <Typography variant="body2" color="textSecondary">
							10:00 am
						</Typography> */}
						<p>Dec 2012 - Feb 2013 </p>
					</TimelineOppositeContent>
					<TimelineSeparator>
						<TimelineDot color="secondary">
							<WorkIcon />
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
								RAMAN RESEARCH INSTITUTE
							</Typography>
							<Typography>Project Intern</Typography>
							<ul>
								<li>
									Designed a frequency synthesizer for a radio telescope at RRI
									and Gauribidanur array
								</li>
							</ul>
						</Paper>
					</TimelineContent>
				</TimelineItem>
				<TimelineItem>
					<TimelineOppositeContent>
						{/* <Typography variant="body2" color="textSecondary">
							10:00 am
						</Typography> */}
						<p>June 2012 - Aug 2012</p>
					</TimelineOppositeContent>
					<TimelineSeparator>
						<TimelineDot color="primary">
							<WorkIcon />
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
								Hindustan Aeronautics Limited
							</Typography>
							<Typography>Project Intern - Head</Typography>
							<ul>
								<li>
									Study and design analysis of landing gear retraction/
									extension counter circuit.
								</li>
								<li>
									Simulation of aircraft CG variation and Control system of
									Fighter Aircraft using Matlab.
								</li>
								<li>
									Head intern- managed a team of 10. - Started with requirement
									analysis, planning of design and execution of the same in real
									time. - Finished two projects successfully and received
									appreciation from HAL officials.
								</li>
							</ul>
						</Paper>
					</TimelineContent>
				</TimelineItem>
				<TimelineItem>
					<TimelineOppositeContent>
						{/* <Typography variant="body2" color="textSecondary">
							10:00 am
						</Typography> */}
						<p>Jan 2010 - Dec 2010 </p>
					</TimelineOppositeContent>
					<TimelineSeparator>
						<TimelineDot color="secondary">
							<WorkIcon />
						</TimelineDot>
						{/* <TimelineConnector /> */}
					</TimelineSeparator>
					<TimelineContent>
						<Paper
							elevation={3}
							className={classes.paper}
							style={{ padding: "10px 25px" }}
						>
							<Typography variant="h6" component="h1">
								Vidh - Revolutionizing education
							</Typography>
							<Typography>Co-Founder</Typography>
							<Typography>
								Vidh was an EdTech startup with the following vision : Aims to
								develop scientific temper in privileged and underprivileged
								children by using technology in education (audio visual aids).
								Objectives: To develop scientific temper and hands on oriented
								Knowledge for students Effectively use Technology in education
								(audio visual aids) Mentor Programs for School and College
								Students Train the School Trainer programs Organize Competitions
								and promote extracurricular activities Organize Science Fair
								Awareness Program on Internet, Multimedia and Computers Arrange
								Educational Field Trips Workshops to counteract Exam Phobia and
								Stress.
							</Typography>
						</Paper>
					</TimelineContent>
				</TimelineItem>
			</Timeline>
		</div>
	);
}
