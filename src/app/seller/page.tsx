import styles from "./page.module.css";
import Image from "next/image";
import landingBackground from "/public/seller_landing_background.jpg";

export default function SellerLanding() {
  return (
    <div className={styles.landing}>
      <Image
        // className={styles.logo}
        src={landingBackground}
        alt="Seller Landing Background"
        priority
      />
      <p className={styles.heading}>Завтра предзащита фронта</p>
      <p className={styles.subheading}>И я хер знает смогу ли эту балалайку сверстать</p>
      <button className={styles.sellerButton}>Нам пизда!</button>
    </div>
  );
}
