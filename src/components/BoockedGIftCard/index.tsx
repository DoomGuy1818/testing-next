import React from 'react';
import Image from 'next/image';
import styles from './boockedGiftCard.module.scss';

interface GiftCardProps {
    imgSrc: string;
    title: string;
    price: string;
    link: string;
  }
  
  const GiftCard: React.FC<GiftCardProps> = ({ imgSrc, title, price, link }) => {
    return (
        <div className={styles.allcard}>
            <div className={styles.card}>
                <div className={styles.imageContainer}>
                    <Image src={imgSrc} alt={title} layout="fill" objectFit="cover" className={styles.image} />
                </div>
            <div className={styles.details}>
                <h2 className={styles.title}>{title}</h2>
                <p className={styles.price}>{price}Р</p>
                <a href={link} className={styles.link}>В магазин →</a>
                <button className={styles.button}>Отменить бронь</button>
            </div>
        </div>
        <div className={styles.footer}>
          <div className={styles.logo}>Ахтемка</div>
          <div className={styles.wishlist}>Перейти в wishlist →</div>
        </div>
      </div>
    );
  };
  
  export default GiftCard;