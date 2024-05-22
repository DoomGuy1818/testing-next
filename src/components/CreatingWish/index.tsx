'use client'
import styles from "./creatingWish.module.scss"
import SideNavBar from "@/components/sideNavbar/index"
import {UseUploadPhoto} from "@/hooks/useUploadPhoto";
import {UseCreateWishQuery} from "@/hooks/useCreateWishQuery";
import React, {useState} from 'react'
import { CreateGift } from "@/services/fetch";


export default function CreatingWish() {

    const [ formData , setFormData ] = useState(
        { id: "", name: "", price: "", description: "", photo: "", link: "", category: "" });

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value
        });
    };

    const handleCreateWishClick = async () => {
        try {
            await CreateGift(formData);
            console.log(formData)
            console.log("Пользователь успешно зарегистрирован!");

        } catch (error) {
            console.log(formData)
            console.error("Ошибка во время регистрации пользователя:", error);
        }
    };

    const PhotoUpload = () => {
        const handleFileChange = (event) => {
            const file = event.target.files[0];
            const category = localStorage.setItem("category", "selection")
        };
    };


        return(
        <div className={styles.container}>
            <div className={styles.sector}>
                <div className={styles.sideNavbar}><SideNavBar/></div>
                <div className={styles.addGift}>
                    <a href="#" className="#">Назад</a>
                    <h1 className={styles.title}>Добавить подарок</h1>

                    <div className={styles.blocklink}>
                        <span className={styles.text}>Ссылка</span>
                        <input className={styles.link} type='text' name="link" value={formData.link}
                               onChange={handleInputChange}></input>
                    </div>

                    <div className={styles.bigblock}>

                        <div className={styles.import}>
                            <span className={styles.text}>Фото</span>
                            <input className={styles.img} type="file" name="photo" onChange={handleInputChange}></input>
                        </div>

                        <div>
                            <div className={styles.block1}>
                                <span className={styles.text}>Название</span>
                                <input className={styles.link} type='text' name="name" value={formData.name} onChange={handleInputChange}></input>
                            </div>

                            <div className={styles.block2}>
                                <span className={styles.text}>Цена</span>
                                <div className={styles.price}>
                                    <input className={styles.link} type='decimal' name="price" value={formData.price}
                                           onChange={handleInputChange}></input>
                                </div>

                            </div>


                            <div className={styles.block3}>
                                <span className={styles.text}>Комментарий</span>
                                <input className={styles.link} type='text' name="description" value={formData.description}
                                       onChange={handleInputChange}></input>
                            </div>

                            <div className={styles.buttonBox}>
                                <button className={styles.createButton} onClick={handleCreateWishClick}>
                                    Создать!
                                </button>
                            </div>
                        </div>

                    </div>

                    </div>


                </div>
            </div>

        )

}
