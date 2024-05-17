'use client';
import React, {useState} from 'react';
import styles from "./createWishlist.module.scss";
import sidebar from "../sideNavbar";
import SideNavbar from "../sideNavbar";
import {UseGetWishlistQuery} from "@/hooks/useGetWishlistQuery";
import {CreateWishlist} from "@/services/fetch";

export default function createWishlist() {
    const [ formData , setFormData ] = useState(
        { ID: "", Name: "", UserID: "" });

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value
        });
    };

    const handleCreateWishlistClick = async () => {
        try {
            await CreateWishlist(formData);
            console.log(formData)
            console.log("Пользователь успешно зарегистрирован!");

        } catch (error) {
            console.log(formData)
            console.error("Ошибка во время регистрации пользователя:", error);
        }
    };

    return(
        <div className={styles.container}>
            <div className={styles.flexbox}>
                <div className={styles.sidebarDiv}>
                    <SideNavbar/>
                </div>
                <div className={styles.createWishlist}>
                    <div className={styles.content}>
                        <a href="#">Назад</a>
                        <h1>Создать Вишлист</h1>
                        <div className={styles.titleBox}>
                            <span>Название</span>
                            <input type='text' name="Name" value={formData.Name}></input>
                        </div>
                        <div className={styles.commentBox}>
                            <span>Комментарий</span>
                            <input></input>
                        </div>

                        <button onClick={handleCreateWishlistClick} className={styles.createButton}>Создать!</button>
                    </div>
                </div>
            </div>

        </div>
    )
}