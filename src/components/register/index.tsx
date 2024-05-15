import styles from "./regCard.module.scss"

export default function register(){
    return (
        // <header/>
        <div className={styles.container}>
            <div className={styles.regBox}>
                <div className={styles.regContent}>
                    <a href="#" className={styles.backButton}>Назад</a>
                    <h1>Регистрация</h1>
                    <div className={styles.nameInput}>
                        <span>Имя</span>
                        <input></input>
                    </div>

                    <div className={styles.emailInput}>
                        <span>почта</span>
                        <input></input>
                    </div>

                    <div className={styles.passwordInput}>
                        <span>пароль</span>
                        <input></input>
                    </div>
                    <button>Зарегистрироваться</button>
                </div>
            </div>
        </div>
        // <footer/>
    )
}