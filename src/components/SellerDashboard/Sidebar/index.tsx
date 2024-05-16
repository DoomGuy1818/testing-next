import styles from "./Sidebar.module.scss"

export default function Sidebar() {
  return (
    <div className={styles.parent}>
	<div className={styles.section}>Подарки</div>
	<div className={styles.section}>Услуги</div>
	<div className={styles.section}>Отзывы</div>
    </div>
  );
}
