import Button from "@/components/GenericButton"
import styles from "./Registration.module.scss"

export default function Registration(){
    return(
        <div className={styles.container}>
            <div className={styles.loginBox}>
                <div className={styles.loginContent}>
                    <a href="#" className={styles.backButton}>Назад</a>
                    <h1>Регистрация</h1>
                    <div className={styles.formInputs}>
                        <div className={styles.loginInput}>
                            <span>как вас называть?</span>
                            <input></input>

                        </div>
                        <div className={styles.loginInput}>
                            <span>email</span>
                            <input></input>

                        </div>
                        <div className={styles.passwordInput}>
                            <span>пароль</span>
                            <input type="password" id="pass"></input>
                        </div>
                        <div className={styles.passwordInput}>
                            <span>повторите пароль</span>
                            <input type="password" id="pass"></input>
                        </div>
                    </div>
                    <Button text={ "Зарегестрироваться" } />
                    <div className={styles.support}>
                        <a href="#" className={styles.login}>Уже зарегестрированы?</a>
                    </div>
                </div>

            </div>
        </div>
    )
}
