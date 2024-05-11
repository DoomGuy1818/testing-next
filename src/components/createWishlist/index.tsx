import styles from "./createWishlist.module.scss"
import sidebar from "../sideNavbar"
import SideNavbar from "../sideNavbar";
export default function createWishlist() {
    return(
        <div className={styles.container}>
            <div className={styles.flexbox}>
                <div className={styles.sidebarDiv}>
                    <SideNavbar/>
                </div>
                <div className={styles.createWishlist}>
                    <div className={styles.content}>
                        <a href="#">Назад</a>
                        <h1>Создать Вишлист</h1>
                        <div className={styles.titleBox}>
                            <span>Название</span>
                            <input></input>
                        </div>
                        <div className={styles.commentBox}>
                            <span>Комментарий</span>
                            <input></input>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    )
}