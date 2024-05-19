import styles from "./Summary.module.scss"

export default function Summary( { revenue, reviewCount } ) {
	return (
		<div className={styles.summaryContainer}>
			<div className={styles.factContainer}>
				<h1 className={styles.number}>{revenue} ₽</h1>
				<span className={styles.description}>Выручка за сегодня</span>
			</div>
			<div className={styles.factContainer}>
				<h1 className={styles.number}>{reviewCount} отзыва(ов)</h1>
				<span className={styles.description}>за последнюю неделю</span>
			</div>
		</div>
	)
}
