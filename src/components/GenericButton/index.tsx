import styles from "./GenericButton.module.scss"

export default function Button() {
  return (
    <div>
	<button type="button" className={styles.button}>Button</button>
    </div>
  );
}
