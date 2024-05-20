import styles from "./creatingWish.module.scss"
import SideNavBar from "@/components/sideNavbar/index"

export default function CreatingWish() {
    return(
        <div className={styles.container}>

            <div className={styles.sector}>

                <div className={styles.sideNavbar}><SideNavBar/></div>
                <div className={styles.addGift}>

                    <a href="#" className="#">Назад</a>
                    <h1 className={styles.title}>Добавить подарок</h1>

                    <div className={styles.blocklink}>
                        <span className={styles.text}>Ссылка</span>
                        <input className={styles.link}></input>
                    </div>

                    <div className={styles.bigblock}>

                        <div className={styles.import}>
                            <span className={styles.text}>Фото</span>
                            <input className={styles.img}></input>
                        </div>

                        <div>
                            <div className={styles.block1}>
                                <span className={styles.text}>Название</span>
                                <input className={styles.name}></input>
                            </div>

                            <div className={styles.block2}>
                                <span className={styles.text}>Цена</span>
                                <div className={styles.price}>
                                    <input></input>
                                    <div className={styles.rectangle}>руб</div>
                                </div>

                            </div>


                            <div className={styles.block3}>
                                <span className={styles.text}>Комментарий</span>
                                <input></input>
                            </div>

                            <div className={styles.buttonBox}>
                                <button className={styles.createButton}>
                                    Создать!
                                </button>
                            </div>
                        </div>

                    </div>

                </div>


            </div>
        </div>
    )
}
