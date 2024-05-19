import styles from "./dashboard.module.scss"
import Sidebar from "@/components/SellerDashboard/Sidebar"
import Header from "@/components/SellerDashboard/Header"

export default function CreateService() {
  return (
    <>
      <Sidebar/>
      <div className={styles.dashboardContainer}>
        <div className={styles.workSpace}>
          <Header text={ "Создать услугу" }/>
          <div className={styles.createForm}>
            <div className={styles.textRow}>
              <div className={styles.textInputs}>
                <input className={styles.input} value={ "Название" }></input>
                <input className={styles.input} value={ "Адрес (опционально)" }></input>
                <input className={styles.input} value={ "Цена (в рублях)" }></input>
              </div>
              <button className={styles.createButton}>Создать услугу!</button>
            </div>
            <div className={styles.photoBox}>Добавьте красивое фото!
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
