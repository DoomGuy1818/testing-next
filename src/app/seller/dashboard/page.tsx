import styles from "./dashboard.module.scss"
import Sidebar from "@/components/SellerDashboard/Sidebar"

export default function SellerDashboard() {
  return (
    <div className={styles.dashboardContainer}>
      <Sidebar/>
    </div>
  );
}
