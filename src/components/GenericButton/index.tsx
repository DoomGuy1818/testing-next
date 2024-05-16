import styles from "./GenericButton.module.scss"

export default function Button( text: any ) {
  return (
    <div>
	<button type="button" className={styles.sellerButton}>{text ? text : "Button"}</button>
    </div>
  );
}
