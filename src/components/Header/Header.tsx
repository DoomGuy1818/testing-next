'use client';

import styles from './Header.module.scss'
import Image from "next/image";
import { useState, useEffect } from "react";

const BurgerMenu = () => {

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

  return (
    <div className={styles.all}>
      <div className={styles.biggift}>
              <Image src="Images/giftbig.svg" width={windowWidth * 0.33} height={windowWidth * 0.335} alt="Not found" />
          </div>
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <section className={styles.topNav}>
        <div className={styles.logo}>
        <Image src="Images/logo.svg" width={logoWidth} height={logoHeight} alt="Not found" />
        </div>
        <input id="menu-toggle" type="checkbox" className={styles.menuToggle} />
        <label className={styles.menuButtonContainer} htmlFor="menu-toggle">
          <div className={styles.menuButton}></div>
        </label>
        <ul className={styles.menu}>
          <li>Подборки</li>
          <li>Подарки</li>
          <li>Мои вишлисты</li>
          <li>Подарки друзьям</li>
          <li>Мой профиль</li>
        </ul>
      </section>
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
          
    </div>
  );
};

export default BurgerMenu;
