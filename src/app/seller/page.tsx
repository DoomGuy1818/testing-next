import styles from "./landing.module.scss";
import Image from "next/image";
import Link from "next/link";
import landingBackground from "/public/seller_landing_background.jpg";

import Button from "@/components/GenericButton";

export default function SellerLanding() {
  return (
    <>
      <div className={styles.greetings}>
        <div className={styles.text}>
          <h1 className={styles.heading}>Помогайте дарить и радовать</h1>
          <p className={styles.subheading}>Зарегистрируйтесь как продавец и продвигайте свои услуги</p>
        </div>
        <Link href="/seller/login">
          <Button text={ "Стать продавцом!" } />
        </Link>
      </div>
      <Image
        className={styles.background}
        src={landingBackground}
        alt="Seller Landing Background"
        priority
        quality={100}
      />
    </>
  );
}
