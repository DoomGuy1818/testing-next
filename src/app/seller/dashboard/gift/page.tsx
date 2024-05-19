import styles from "./dashboard.module.scss"
import Sidebar from "@/components/SellerDashboard/Sidebar"
import Header from "@/components/SellerDashboard/Header"
import Summary from "@/components/SellerDashboard/Summary"

export default function SellerDashboard() {
  return (
    <div className={styles.dashboardContainer}>
      <Sidebar/>
      <div className={styles.workSpace}>
        <div className={styles.itemContainer}>
          <Header text={ "Подарки" }/>
          <div className={styles.itemGrid}>
            <div className={styles.grid}>
              <div className={styles.itemWrap}>
                <div className={styles.item}></div>
              </div>
              <div className={styles.itemWrap}>
                <div className={styles.item}></div>
              </div>
              <div className={styles.itemWrap}>
                <div className={styles.item}></div>
              </div>
              <div className={styles.itemWrap}>
                <div className={styles.item}></div>
              </div>
            </div>
          </div>
        </div>
        <div className={styles.summary}>
          <Header text={ "Сводка" } />
          <Summary revenue={ 1990 } reviewCount={ 9 } />
        </div>
      </div>
    </div>
  );
}
