import styles from "../styles/PhotoWall.module.css";
// import { makeStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";

export default function PhotoWall() {
	// const classes = useStyles();
	return (
		<div className={styles.photoGallery} style={{ margin: "20px 0px" }}>
			<h2>Travel & Photography</h2>
			<div className={styles.photoGallery__grid}>
				<figure
					className={`${styles.gallery__item} ${styles.gallery__item__1}`}
				>
					<img
						src="/assets/img1-min.jpg"
						className={styles.gallery__img}
						alt="Image 1"
					/>
				</figure>
				<figure
					className={`${styles.gallery__item} ${styles.gallery__item__2}`}
				>
					<img
						src="/assets/img2-min.jpg"
						className={styles.gallery__img}
						alt="Image 2"
					/>
				</figure>
				<figure
					className={`${styles.gallery__item} ${styles.gallery__item__3}`}
				>
					<img
						src="/assets/img5-min.jpg"
						className={styles.gallery__img}
						alt="Image 3"
					/>
				</figure>
				<figure
					className={`${styles.gallery__item} ${styles.gallery__item__4}`}
				>
					<img
						src="/assets/img4-min.jpg"
						className={styles.gallery__img}
						alt="Image 4"
					/>
				</figure>
				<figure
					className={`${styles.gallery__item} ${styles.gallery__item__5}`}
				>
					<img
						src="/assets/img3-min.jpg"
						className={styles.gallery__img}
						alt="Image 5"
					/>
				</figure>
				<figure
					className={`${styles.gallery__item} ${styles.gallery__item__6}`}
				>
					<img
						src="/assets/img6-min.jpg"
						className={styles.gallery__img}
						alt="Image 6"
					/>
				</figure>
				<figure
					className={`${styles.gallery__item} ${styles.gallery__item__7}`}
				>
					<img
						src="/assets/img7-min.jpg"
						className={styles.gallery__img}
						alt="Image 7"
					/>
				</figure>
				<figure
					className={`${styles.gallery__item} ${styles.gallery__item__8}`}
				>
					<img
						src="/assets/img8-min.jpg"
						className={styles.gallery__img}
						alt="Image 8"
					/>
				</figure>
			</div>
		</div>
	);
}
