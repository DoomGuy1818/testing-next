import styles from "./landing.module.scss";
import Link from "next/link";
import BackButton from "@/components/ui/BackButton/Back";

export default function SellerLanding() {
  return (
    <>
      <div className={styles.landingContainer}>
        <div className={styles.foreground}>
          <div className={styles.textContainer}>
            <h1 className={styles.heading}>Помогайте дарить и радовать</h1>
            <p className={styles.subheading}>Зарегистрируйтесь как продавец и продвигайте свои услуги</p>
          </div>
          <BackButton link={"/seller/login"} />
        </div>
      </div>
    </>
  );
}
