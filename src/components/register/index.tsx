import styles from "./regCard.module.scss"

export default function regCard(){
    return(
        // <header/>
        <div className={styles.regCard}>
            <span className={styles.text}>Имя</span>
            <input className={styles.Name}></input>
            <span className={styles.text}>Email</span>
            <input className={styles.email}></input>
            <span className={styles.text}></span>
            <input className={styles.Password}></input>
            <a href="#">Зарегистрироваться</a>
        </div>
        // <footer/>
    )
}