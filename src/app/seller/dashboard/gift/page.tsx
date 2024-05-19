import styles from "./dashboard.module.scss"
import Sidebar from "@/components/SellerDashboard/Sidebar"
import Header from "@/components/SellerDashboard/Header"

export default function SellerDashboard() {
  return (
    <div className={styles.dashboardContainer}>
      <Sidebar/>
      <div className={styles.workSpace}>
        <div className={styles.itemGrid}>
          <Header text={ "Подарки" }/>
        </div>
        <div className={styles.summary}>
          <Header text={ "Сводка" } />
        </div>
      </div>
    </div>
  );
}
