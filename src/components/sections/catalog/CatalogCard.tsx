import Image from 'next/image'
import Link from 'next/link'
import styles from './Catalog.module.scss'
const CatalogCard: React.FC<CategoryProps> = ({ category }) => {

  return (
    <div className={styles.catalogCard}>
      <Image
        src="images/mainCard.svg"
        width={350}
        height={350}
        alt="product photo"
      />
      <div className={styles.catalogTitle}>Ручной отпариватель Xiaomi</div>
      <div className={styles.catalogPrice}>1 727 ₽</div>
      <div className={styles.catalogAdd}>
        <button className={styles.catalogBtn}>
          <Image
            width={44}
            height={44}
            src="/images/plusButton.svg"
            alt="plusButton"
          />
          Добавить в Wishlist
        </button>
      </div>
      <Link className={styles.catalogLink} href="/">
        Перейти в магазин
      </Link>
    </div>
  )
}

export default CatalogCard
