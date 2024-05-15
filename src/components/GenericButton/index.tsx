import styles from "./GenericButton.module.scss"

export default function Button() {
  return (
    <div>
      <footer>
	<button type="button" className={styles.button}>Button</button>
      </footer>
    </div>
  );
}
