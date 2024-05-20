'use client';
import styles from "./wishlist.module.scss";
import Image from "next/image";
import SideNavBar from "@/components/sideNavbar";
import { UseGetWishlistQuery } from "@/hooks/useGetWishlistQuery";
import Link from "next/link";




function Wishlist() {

    const { data, isLoading, isError } = UseGetWishlistQuery();
    console.log(isLoading);
    console.log(isError);
    console.log(data);

    // Если данные загружаются, отобразите сообщение о загрузке
    if (isLoading) {
        return <div>Loading...</div>;
    }

    // Если произошла ошибка при загрузке данных, отобразите сообщение об ошибке
    if (isError) {
        return <div>Error fetching wishlist</div>;
    }

    return (
        <div className={styles.container}>
            <div className={styles.pageWrap}>
                <div className={styles.sidebarDiv}>
                    <SideNavBar/>
                </div>

                <div className={styles.page}>
                    <h1>placeholderName</h1>
                    <a href="#" className={styles.refToEdit}>
                        редактировать
                    </a>
                </div>
            </div>

            <div className={styles.myWishlists}>
                <h1>Мои Вишлисты</h1>
                <a href="#" className={styles.createButton}></a>
                <div className={styles.wishlistGrid}>
                    {data?.map((wishlist) => (
                       <button key={wishlist.ID}>{wishlist.Name}</button>
                    ))}
                </div>
            </div>
        </div>
    );
}

export default Wishlist;
