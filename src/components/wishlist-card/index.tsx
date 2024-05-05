import styles from "./wishlist-card.module.sass"

export default function index(){
    return(
        <a href="#" className = {styles.card}>

            <a href="#" className = {styles.editbutton}>
                <div className={styles.editbutton}>
                <Image                             /*TODO: сделать картинку, чтобы крутая была, разобраться с ошибкой, которая тут возникает*/
                    fill
                    src="/assets/images/pizzas/01.png"
                    alt="pizza"
                />
                </div>
            </a>
            <span>Название</span>
            <span>Описание</span>

        </a>
    )
}
