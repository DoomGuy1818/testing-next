import Button from "@/components/GenericButton"
import styles from "./login.module.scss"

export default function Login(){
    return(
        <div className={styles.container}>
            <div className={styles.loginBox}>
                <div className={styles.loginContent}>
                    <a href="/seller" className={styles.backButton}>Назад</a>
                    <h1>Вход</h1>
                    <div className={styles.loginInput}>
                        <span>логин</span>
                        <input></input>

                    </div>
                    <div className={styles.passwordInput}>
                        <span>пароль</span>
                        <input type="password" id="pass"></input>
                    </div>
                    <Button text={ "Войти" } />
                    <div className={styles.support}>
                        <a href="/seller/login/forgot-password" className={styles.forgotPass}>Забыли пароль?</a>
                        <a href="/seller/registration" className={styles.register}>Зарегистрироваться</a>
                    </div>
                </div>

            </div>
        </div>
    )
}
