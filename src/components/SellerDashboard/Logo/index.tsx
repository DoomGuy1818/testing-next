import Image from "next/image";
import styles from "./Logo.module.scss"

export default function Logo() {
  return (
    <div className={styles.logo}>
        <Image
          // className={styles.logo}
          src="/wish.svg"
          alt="Wishlist Logo"
          width={180}
          height={37}
          priority
        />
	<p className={styles.text}>Wishlistik</p>
    </div>
  );
}
