'use client';

import Image from "next/image";
import styles from "./Header.module.scss"; 
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

  
  const logoWidth = windowWidth * 0.16; 
  const logoHeight = logoWidth * 0.4; 
 
    return(
        <nav className={styles.headerNav}>
          <div className={styles.header__top__nav}>
            <ul className={styles.header__list}>
              <li className={styles.header__logo}>
                <Image src="Images/logo.svg" width={logoWidth} height={logoHeight} alt="Not found" />
              </li>
              <li className={styles.header__item}>Подборки</li>
              <li className={styles.header__item}>Подарки</li>
              <li className={`${styles.header__item} ${styles.header__lastItem}`}>Мои вишлисты </li>
              <li className={styles.header__item_img}>
                <Image src="Images/peop.svg" width={windowWidth * 0.03} height={windowWidth * 0.035} alt="Not found" />
              </li>
              <li className={styles.header__item__img}>
                <Image src="Images/heart.svg" width={windowWidth * 0.03} height={windowWidth * 0.035} alt="Not found" />
              </li>
              <li className={styles.burger}>
                <span></span>
              </li>
            </ul>
          </div>
          <ul className={styles.header__list__main}>
            <li className={styles.header__item__main}>
            Привет, это wishlistik — сервис для создания вишлистов
            </li>
            <li className={styles.header__item__main__two}>
              Мы помогаем вам получать и дарить
            </li>
            
          </ul>
          <button className={styles.createButton}>
            Создать вишлист
          </button>
          <div className={styles.biggift}>
              <Image src="Images/giftbig.svg" width={windowWidth * 0.33} height={windowWidth * 0.335} alt="Not found" />
          </div>
      </nav>
     );
    }
