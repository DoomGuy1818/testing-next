// import Image from "next/image";
import Header from "../components/Header/Header";
import Main from "../components/Main/index"
import Cube from "../components/fioletcube/index"
import styles from "./page.module.css";

import CreatingWish from "../components/BoockedGift/index"
import HeaderGift from "../components/HeaderGift/HeaderGift"


export default function Home() {
  return (
    <div className={styles.cub}>
      <div>
        <HeaderGift/>
        
      </div>
      <div>
        <CreatingWish/>
        {/* <Main/> */}
      </div>
      <div>
        {/* <Cube/> */}
      </div>
    </div>
    );
  }
  
