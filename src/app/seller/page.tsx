import styles from "./page.module.scss";
import Image from "next/image";
import landingBackground from "/public/seller_landing_background.jpg";

import Button from "@/components/GenericButton";

export default function SellerLanding() {
  return (
    <>
      <div className={styles.greetings}>
        <h1 className={styles.heading}>Помогайте дарить и радовать</h1>
        <p className={styles.subheading}>Зарегистрируйтесь как продавец и продвигайте свои услуги</p>
        <Button text={ "Стать продавцом!" } />
      </div>
      <Image
        src={landingBackground}
        alt="Seller Landing Background"
        priority
        quality={100}
        fill
        style={{
          objectFit: 'cover',
        }}
      />
    </>
  );
}
