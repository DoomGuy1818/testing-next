import styles from "./login.module.scss"
import Button from "@/components/GenericButton";

export default function LoginCard( { back, pass, registration, recover } ){
    return(
        <div className={styles.container}>
            <div className={styles.loginBox}>
                <div className={styles.loginContent}>
                    <a href={ back ? back : "/nope!" } className={styles.backButton}>Назад</a>
                    <h1>Вход</h1>
                    <div className={styles.loginInput}>
                        <span>логин</span>
                        <input></input>

                    </div>
                    <div className={styles.passwordInput}>
                        <span>пароль</span>
                        <input type="password" id="pass"></input>
                    </div>
                    <a href={ pass ? pass : "/nope!" }>
                        <Button text={ "Войти" } />
                    </a>
                    <div className={styles.support}>
                        <a href={ recover ? recover : "/nope!" } className={styles.forgotPass}>Забыли пароль?</a>
                        <a href={registration? registration : "/nope!" } className={styles.register}>Зарегистрироваться</a>
                    </div>
                </div>

            </div>
        </div>
    )
}
