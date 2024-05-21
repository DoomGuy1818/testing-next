import Image from 'next/image'
import styles from './selectionCard.module.scss'

export default function SelectionCard() {
  return (
    <div className={styles.selectionCard}>
      <Image
        src="images/selectionCard/8Mart.svg"
        width={408}
        height={354}
        alt="selection Card"
      />
    </div>
  )
}
