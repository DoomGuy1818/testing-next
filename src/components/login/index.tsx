import styles from "./loginCard.module.scss"

export default function Login(){
    return(
        <div className={styles.container}>
            <div className={styles.loginBox}>
                <div className={styles.loginContent}>
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
        </div>
    )
}
