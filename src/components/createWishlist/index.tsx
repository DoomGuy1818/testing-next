import styles from "./createWishlist.module.scss"

export default function createWishlist() {
    return(
        <div className={styles.container}>
            <div className={styles.createWishlistCard}>
                <a href="#">
                    <img src="#" alt="image)"/>
                    назад
                </a>
                <span>Создать Вишлист</span>
                <span className={styles.Naming}>Название</span>
                <input className={styles.title}></input>
                <span className={styles.createComment}>Комментарий</span>
                <input className={styles.Comment}></input>
                <button className={styles.CreateButton}>Сохранить</button>
            </div>
        </div>
    )
}