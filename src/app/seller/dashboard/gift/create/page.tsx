import styles from "./dashboard.module.scss"
import Sidebar from "@/components/SellerDashboard/Sidebar"
import Header from "@/components/SellerDashboard/Header"

export default function CreateGift() {
  return (
    <>
      <Sidebar/>
      <div className={styles.dashboardContainer}>
        <div className={styles.workSpace}>
          <Header text={ "Создать подарок" }/>
          <div className={styles.createForm}>
            <div className={styles.textRow}>
              <div className={styles.textInputs}>
                <input className={styles.input} value={ "Название" }></input>
                <input className={styles.input} value={ "Описание (опционально)" }></input>
                <input className={styles.input} value={ "Цена (в рублях)" }></input>
              </div>
              <button className={styles.createButton}>Создать подарок!</button>
            </div>
            <div className={styles.photoBox}>Добавьте красивое фото!
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
