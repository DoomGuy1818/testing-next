import styles from "./Sidebar.module.scss"
import Logo from "@/components/SellerDashboard/Logo"

export default function Sidebar() {
  return (
    <div className={styles.sidebarContainer}>
      <Logo />
      <div className={styles.parent}>
	<a href="/seller/dashboard/gift">
	  <div className={styles.section}>Подарки</div>
	</a>
	<a href="/seller/dashboard/service">
	  <div className={styles.section}>Услуги</div>
	</a>
	<a href="/seller/dashboard/reviews">
	  <div className={styles.section}>Отзывы</div>
	</a>
      </div>
    </div>
  );
}
