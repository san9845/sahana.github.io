import styles from "../styles/Projects.module.css";
import { makeStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";

const useStyles = makeStyles((theme) => ({
	paper: {
		padding: "15px 25px",
		height: 250,
	},
	secondaryTail: {
		backgroundColor: theme.palette.secondary.main,
	},
}));
export default function BackgroundTimeline() {
	const classes = useStyles();
	return (
		<div className={styles.projects} style={{ margin: "20px 0px" }}>
			<h2>Projects</h2>
			<div className={styles.projects__grids}>
				<div className={styles.projects__item}>
					<Paper elevation={3} className={styles.paper}>
						<h3>Stock Recommendation System</h3>
						<ul>
							<li>
								Predicts the future value of stock using Machine learning
								algorithms and Forecasting model in R programming. Extracts the
								historic and current value of data from the stock exchange, runs
								Fundamental, Technical and sentimental analysis after sorting
							</li>
							{/* <li>the data and predicts the value variation in the future.</li> */}
						</ul>
					</Paper>
				</div>
				<div className={styles.projects__item}>
					<Paper elevation={3} className={styles.paper}>
						<h3>Micro air vehicles </h3>
						<ul>
							<li>
								Designed and built micro air vehicles and optimized its
								performance by using artificial neural networks
							</li>
							<li>used shape memory alloys to reduce its weight</li>
						</ul>
					</Paper>
				</div>
				<div className={styles.projects__item}>
					<Paper elevation={3} className={styles.paper}>
						<h3>Control system for Tejas </h3>
						<ul>
							<li>
								Simulating design of the control system of a fighter aircraft
								using MatLab
							</li>
							<li>Simulation of aircraft CG variation</li>
							<li>
								Study and design analysis of landing gear retraction/ extension
								counter circuit.
							</li>
						</ul>
					</Paper>
				</div>
				<div className={styles.projects__item}>
					<Paper elevation={3} className={styles.paper}>
						<h3>Future Baby analysis </h3>
						<ul>
							<li>
								Analysis the DNA samples uploaded by the male and female,
								identifies the prominent features in the genes and gives the
								picture of the baby they could have. It also gives the important
								personality traits and the hereditary genetic diseases that the
								baby could carry.
							</li>
						</ul>
					</Paper>
				</div>
				<div className={styles.projects__item}>
					<Paper elevation={3} className={styles.paper}>
						<h3>Frequency synthesizer </h3>
						<ul>
							<li>
								Designed a frequency synthesizer for a radio telescope at RRI
								and Gauribidanur array.
							</li>
							{/* <li>Line following robot </li> */}
						</ul>
					</Paper>
				</div>
				<div className={styles.projects__item}>
					<Paper elevation={3} className={styles.paper}>
						<h3>Line following robot </h3>
						<ul>
							<li>
								Line follower is a machine that can follow a path. The path can
								be either visible as a black line on a white surface (or
								vice-versa) or it can be invisible as in a magnetic field.
							</li>
							{/* <li>Line following robot </li> */}
						</ul>
					</Paper>
				</div>
				<div className={styles.projects__item}>
					<Paper elevation={3} className={styles.paper}>
						<h3>Mobile sniffer </h3>
						<ul>
							<li>
								This circuit can detect the use of a GSM mobile in
								mobile-phone-restricted areas such as examination halls and
								other ‘do not disturb’ areas. It can detect the activity of the
								phone from a distance of eight meters or more.
							</li>
							{/* <li>Line following robot </li> */}
						</ul>
					</Paper>
				</div>
			</div>
		</div>
	);
}
