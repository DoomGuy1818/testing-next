import Header from "../../components/HeaderGift/HeaderGift";
import Main from "../../components/wishesInWishlist/index"
import Main2 from "../../components/wishlistik/index"
import styles from "./profile.module.scss"

export default function CreatingWish() {
    return (
      <div className={styles.all}>
        <div>
          <Header/>
        </div>
        <div>
          {/* <Main/> */}
          <Main2/>  
        </div>
      </div>
      );
    }