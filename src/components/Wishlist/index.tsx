import React from 'react';
import styles from './wishlist.module.scss';
import SideNavbar from '../sideNavbar/index';
import WishlistCard from '../WishlistCard/index';
import Image from "next/image";

export default function CreatingWish() {
    return (
        <div className={styles.container}>
            <div className={styles.sector}>
                <div className={styles.sideNavbar}><SideNavbar /></div>
                <div className={styles.mainContent}>
                    <div className={styles.header}>
                        <h1 className={styles.title}>Вишлист</h1>
                        <button className={styles.addButton}>добавить подарок</button>
                        <div className={styles.shareButton}>
                            <Image 
                                src="/images/share.svg" 
                                alt="Share Icon" 
                                width={24} 
                                height={24} 
                                className={styles.shareIcon} 
                            />
                            <span className={styles.shareTxt}>поделиться</span>
                        </div>
                    </div>
                    <div className={styles.giftList}>
                        <WishlistCard 
                            imgSrc="/images/mainCard.svg"
                            title="Отпариватель"
                            price="1727"
                            link="https://market.yandex.ru/product--otparivatel-xiaomi-mijia-handheld-ironing-machine/890989735?sponsored=1&sku=102095827869&shopId=431782&do-waremd5=HYNy99xmvFjCtu0B4_QoGg&cpc=VENfffemVQ9UWHmD_PVzUVGtXikeGsiC0gBlnW-jeutYcF5k4iThmWsZB9ngwDJlcK_XsUKqVkCEL6xqdJn9UIg17z-GYdn-56ErrwgUhNPndLueOtcW4aE70LhaYNaHCyJoscBnGOQ-pyOr2WSRH3p0xO92pIzQL-0QhXepDYgR1JNZ28h3IpBc-qORVTwJFf76HL_YbX9RuIW675IyyDjcw4GAJTgH9SC8jCVCryXiRDXvBdXeLBkgcnUPhgvlHKU3y68pE4c-I0rXcu02ftQIgObrmN3S&cc=CjIxNzE2MTI1NjQ5MjMzLzM0ZDZkZTMyMWUxYTExMGNiODY2YjZhM2NlMTgwNjAwLzEvMRDmAYB95u0G&uniqueId=62750572"
                        />
                        <WishlistCard 
                            imgSrc="/images/mainCard.svg"
                            title="Отпариватель"
                            price="1727"
                            link="https://example.com"
                        />
                        <WishlistCard 
                            imgSrc="/images/mainCard.svg"
                            title="Отпариватель"
                            price="1727"
                            link="https://example.com"
                        />
                    </div>
                </div>
            </div>
        </div>
    );
}
