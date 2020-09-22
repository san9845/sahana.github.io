import Head from "next/head";
import styles from "../styles/Home.module.css";
import WorkTimeline from "../components/WorkTimeline";
import BackgroundTimeline from "../components/BackgroundTimeline";
import Projects from "../components/Projects";
import PhotoWall from "../components/PhotoWall";
// import intro from "../public/assets/square_dp-min.jpg";
import LinkedInIcon from "@material-ui/icons/LinkedIn";
import InstagramIcon from "@material-ui/icons/Instagram";
import ShowChartIcon from "@material-ui/icons/ShowChart";
export default function Home() {
	return (
		<div className={styles.container}>
			<Head>
				<title>Sahana Athreya</title>
				<link rel="icon" href="/favicon.ico" />
				<link
					href="https://fonts.googleapis.com/css2?family=Roboto:wght@300;400;500;700&display=swap"
					rel="stylesheet"
				/>
				<link
					href="https://fonts.googleapis.com/css2?family=Caveat:wght@700&display=swap"
					rel="stylesheet"
				></link>
			</Head>

			<nav className={styles.nav__wrapper}>
				<h1>
					Sahana Athreya <ShowChartIcon />
				</h1>
				<ul className={styles.nav__list}>
					<li>
						<a href="#about">About</a>
					</li>
					<li>
						<a href="#work">Work</a>
					</li>
					<li>
						<a href="#background">Background</a>
					</li>
					<li>
						<a href="#projects">Projects</a>
					</li>
					<li>
						<a href="#photos">Travel & Photography</a>
					</li>
					{/* <li>Adventures</li> */}
				</ul>
			</nav>

			<div className={styles.div} id="about">
				{/* introduction section and contact  */}
				<div className={styles.introduction}>
					<div className={styles.introduction__image}>
						<img src="/assets/square_dp-min.jpg" alt="sahana" width="200" />
					</div>
					<div className={styles.introduction__content}>
						<p style={{ marginTop: 0 }}>Hi, I'm Sahana.</p>
						<p>
							I am a Quant – alpha researcher in investment management industry.
							I love to find answers to the most important investment questions
							with the help of data science. I work on evaluating the intrinsic
							value of the company and modeling different trading strategies to
							increase profits.
						</p>
						<p>
							My Eyes twinkle when you talk about Math, Finance, Economics and
							Computer Science.
						</p>
					</div>
				</div>

				{/* work  */}
			</div>
			<div className={styles.container} id="work">
				<WorkTimeline />
			</div>
			<div className={styles.container} id="background">
				<BackgroundTimeline />
			</div>
			<div className={styles.container} id="projects">
				<Projects />
			</div>
			<div className={styles.container} id="photos">
				<PhotoWall />
			</div>
			<footer className={styles.footer}>
				<div>
					{" "}
					<a
						href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
						target="_blank"
						rel="noopener noreferrer"
					>
						Powered by Nextjs
					</a>
				</div>
				<div className={styles.socialmedia}>
					<a
						href="https://www.linkedin.com/in/sahana-athreya-bb946083/"
						target="_blank"
					>
						<LinkedInIcon />
					</a>
					<a href="https://www.instagram.com/sahana_athreya/" target="_blanket">
						<InstagramIcon />
					</a>
				</div>
			</footer>
		</div>
	);
}
