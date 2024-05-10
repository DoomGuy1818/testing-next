import styles from "./loginCard.module.scss"

export default function index(){
    return(
        // <header/>

        <div className={styles.loginCard}>
            <span className={styles.text}>Логин</span>
            <input className={styles.loginUsername}></input>
            <span className={styles.text}>Пароль</span>
            <input className={styles.loginPassword}></input>
            <a href="#">забыли пароль?</a>
            <a href="#">Зарегистрироваться</a>
        </div>
        // <footer/>
    )
}