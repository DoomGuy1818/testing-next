'use client'
import styles from "./wishlist.module.scss";
import Image from "next/image";
import SideNavbar from "@/components/sideNavbar";
import { UseGetWishlistQuery } from "@/hooks/useGetWishlistQuery";
import Link from "next/link";

function wishlist() {
    const { data: Wishlist} = UseGetWishlistQuery();
    return (
        <div className={styles.container}>
            <div className={styles.pageWrap}>
                <div className={styles.sidebarDiv}>
                    <SideNavbar />
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
                    {Wishlist?.map((wishlist) => (

                        <div key = {wishlist.ID} className={styles.wishlistCard}>
                            <Link href="#">
                                <button>{wishlist.Name}</button>
                            </Link>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}

export default wishlist;