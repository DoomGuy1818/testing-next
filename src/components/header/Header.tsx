// 'use client'
// import Image from 'next/image'
// import styles from './Header.module.scss'

// export default function Header() {
// 	return (
// 		<nav className={styles.headerNav}>
// 			<ul className={styles.header__list}>
// 				<li className={styles.header__logo}>
// 					<Image
// 						src="/images/logo.svg"
// 						width={50}
// 						height={32}
// 						alt="Not found"
// 					/>
// 				</li>
// 				<li className={styles.header__logo__text}>Wishlistik</li>
// 				<li className={styles.header__item}>Подборки</li>
// 				<li className={styles.header__item}>Подарки</li>
// 				<li className={`${styles.header__item} ${styles.header__lastItem}`}>
// 					Мои вишлисты
// 				</li>
// 				<li className={styles.header__item_img}>
// 					<Image
// 						src="Images/profw.svg"
// 						width={35}
// 						height={26}
// 						alt="Not found"
// 					/>
// 				</li>
// 				<li className={styles.header__item__img}>
// 					<Image
// 						src="Images/heartw.svg"
// 						width={35}
// 						height={26}
// 						alt="Not found"
// 					/>
// 				</li>
// 			</ul>
// 			{/* <ul className={styles.header__list__main}>
// 				<li className={styles.header__item__main}>
// 					Что подарить<br></br>хозяюшке
// 				</li>
// 				<li className={styles.header__item__text}>
// 					Идеи полезных и нужных подарков для дома, кухни, облегчения бытовых
// 					дел и экономии времени
// 				</li>
// 			</ul> */}
// 		</nav>
// 	)
// }

import Image from 'next/image';
import styles from './Header.module.scss';

export default function Header() {
    return (
        <nav className={styles.headerNav}>
            <div className={styles.headerLeft}>
                <div className={styles.headerLogo}>
                    <Image
                        src="/images/logo.svg"
                        width={50}
                        height={32}
                        alt="Not found"
                    />
                </div>
                <div className={styles.headerLogoText}>Wishlistik</div>
            </div>
            <div className={styles.headerRight}>
                <ul className={styles.headerList}>
                    <li className={styles.headerItem}>Подборки</li>
                    <li className={styles.headerItem}>Подарки</li>
                    <li className={`${styles.headerItem} ${styles.headerLastItem}`}>
                        Мои вишлисты
                    </li>
                    <li className={styles.headerItemImg}>
                        <Image
                            src="/images/profw.svg"
                            width={35}
                            height={26}
                            alt="Not found"
                        />
                    </li>
                    <li className={styles.headerItemImg}>
                        <Image
                            src="/images/heartw.svg"
                            width={35}
                            height={26}
                            alt="Not found"
                        />
                    </li>
                </ul>
            </div>
        </nav>
    );
}
