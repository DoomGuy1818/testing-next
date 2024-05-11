import styles from "./loginCard.module.scss"

export default function login(){
    return(
        <div className={styles.container}>
            <div className={styles.loginBox}>
                <a href="#" className={styles.backButton}>Назад</a>
                <h1>Вход</h1>
                <div className={styles.loginInput}>
                    <span>логин</span>
                    <input></input>

                </div>
                <div className={styles.passwordInput}>
                    <span>пароль</span>
                    <input></input>
                </div>
                <button>Войти</button>
                <div className={styles.support}>
                    <a href="#" className={styles.forgotPass}>Забыли пароль?</a>
                    <a href="#" className={styles.register}>Зарегистрироваться</a>
                </div>
            </div>
        </div>
    )
}