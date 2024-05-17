// import Image from "next/image";
import Header from "../components/Header/Header";
import Main from "../components/Main/index"
import Cube from "../components/fioletcube/index"
import styles from "./page.module.css";

export default function Home() {
  return (
    <div className={styles.cub}>
      <div>
        <Header/>
      </div>
      <div>
        <Main/>
      </div>
      <div>
        <Cube/>
      </div>
    </div>
    );
  }
  
