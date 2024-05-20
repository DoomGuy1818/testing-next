import styles from "./GenericButton.module.scss"

export default function Button({ text }) {
  return (
    <button type="button" className={styles.sellerButton}>{text ? text : "Button"}</button>
  );
}
