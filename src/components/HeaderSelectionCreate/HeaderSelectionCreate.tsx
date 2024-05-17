'use client';

import Image from "next/image";
import styles from "./HeaderSelectionCreate.module.scss"; 
import Link from "next/link";
import { useState, useEffect } from "react";

export default function Header() {
    const [windowWidth, setWindowWidth] = useState<number>(0);

  useEffect(() => {
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
    };

    window.addEventListener("resize", handleResize);
    setWindowWidth(window.innerWidth);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  
  const logoWidth = windowWidth * 0.045; 
  const logoHeight = logoWidth * 0.4;

  
    return(
        <nav className={styles.headerNav}>
          <ul className={styles.header__list}>
            <li className={styles.header__logo}>
                <Image src="Images/logotip.svg" width={logoWidth} height={logoHeight} alt="Not found" />
            </li>
            <li className={styles.header__logo__text}>Wishlistik</li>
            <li className={styles.header__item}>Подборки</li>
            <li className={styles.header__item}>Подарки</li>
            <li className={`${styles.header__item} ${styles.header__lastItem}`}>Мои вишлисты</li>
            <li className={styles.header__item_img}>
                <Image src="Images/profw.svg" width={windowWidth * 0.03} height={windowWidth * 0.035} alt="Not found" />
            </li>
            <li className={styles.header__item__img}>
                <Image src="Images/heartw.svg" width={windowWidth * 0.03} height={windowWidth * 0.035} alt="Not found" />
            </li>
          </ul>
          <ul className={styles.header__list__main}>
            <li className={styles.header__item__main}>
            Введите название вашей подборки
            </li>
            <li className={styles.header__item__main__two}>
            Опишите вашу подборку
            </li>
          </ul>
      </nav>
     );
    }