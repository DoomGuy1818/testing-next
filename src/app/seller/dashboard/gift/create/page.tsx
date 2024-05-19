import styles from "./dashboard.module.scss"
import Sidebar from "@/components/SellerDashboard/Sidebar"
import Header from "@/components/SellerDashboard/Header"
import Summary from "@/components/SellerDashboard/Summary"
import SellerCard from "@/components/SellerDashboard/SellerCard"

export default function CreateGift() {
  return (
    <>
      <Sidebar/>
      <div className={styles.dashboardContainer}>
        <div className={styles.workSpace}>
          <div className={styles.itemContainer}>
            <Header text={ "Создать подарок" }/>
            <div className={styles.itemGrid}>
              <div className={styles.grid}>
                <div className={styles.itemWrap}>
                  <SellerCard title={ "Добавить Услугу!" } image={ "/add.svg" } />
                </div>
                <div className={styles.itemWrap}>
                  <SellerCard title={ "Упаковка подарков" } image={ "/packaging.png" } />
                </div>
                <div className={styles.itemWrap}>
                  <SellerCard title={ "Доставка на дом" } image={ "/delivery.png" } />
                </div>
                <div className={styles.itemWrap}>
                  <SellerCard title={ "Особая доставка" } image={ "/surprise.png" } />
                </div>
              </div>
            </div>
          </div>
          <div className={styles.summary}>
            <Header text={ "Сводка" } />
            <Summary revenue={ 3510 } reviewCount={ 15 } />
          </div>
        </div>
      </div>
    </>
  );
}