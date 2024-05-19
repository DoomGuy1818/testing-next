// import Image from "next/image";
import Header from "../components/Header/Header";
import Main from "../components/Main/index"
import Cube from "../components/fioletcube/index"
import styles from "./page.module.css";
import Wish from "../components/Wishlist/index"
import CreatingWish from "../components/BoockedGift/index"
import HeaderGift from "../components/HeaderGift/HeaderGift"


export default function Home() {
  return (
    <div className={styles.cub}>
      <div>
        <HeaderGift/>
        
      </div>
      <div>
        
        <Wish/>
        {/* <Main/> */}
      </div>
      <div>
        {/* <Cube/> */}
      </div>
    </div>
    );
  }
  