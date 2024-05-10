import styles from "./wishlist.module.scss"
import Image from "next/image";

function  wishlist(){
    return(
        <div className={styles.pageWish}>
            <div className={styles.userImg}>
                <Image fill
                       src="./images/user.png"
                       width={200} height={200}
                       alt=")"
                />
            </div>
            <span className={styles.userName}>Елизавету Ланус</span>
            <a href="#" className={styles.edit}>редактирование</a>
            <span className={styles.MyWishlists}>Мои Вишлисты</span>
            <a href="#" className={styles.createWishlist}>Создать Вишлист</a>
        </div>
    )
}

export default wishlist;