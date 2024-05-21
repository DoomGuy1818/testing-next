import styles from "./creatingWish.module.scss"
import SideNavBar from "@/components/sideNavbar/index"
import {UseUploadPhoto} from "@/hooks/useUploadPhoto";
import {UseCreateWishQuery} from "@/hooks/useCreateWishQuery";
import React, {useState} from 'react'
import { CreateWish } from "@/services/fetch";


export default function CreatingWish() {

    const [ formData , setFormData ] = useState(
        { ID: "", Name: "", "" });

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value
        });
    };

    const handleCreateWishlistClick = async () => {
        try {
            await CreateWish(formData);
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



        return(
        <div className={styles.container}>

            <div className={styles.sector}>

                <div className={styles.sideNavbar}><SideNavBar/></div>
                <div className={styles.addGift}>

                    <a href="#" className="#">Назад</a>
                    <h1 className={styles.title}>Добавить подарок</h1>

                    <div className={styles.blocklink}>
                        <span className={styles.text}>Ссылка</span>
                        <input className={styles.link}></input>
                    </div>

                    <div className={styles.bigblock}>

                        <div className={styles.import}>
                            <span className={styles.text}>Фото</span>
                            <input className={styles.img} type="file" name="photo" onChange={handleFileChange}></input>
                        </div>

                        <div>
                            <div className={styles.block1}>
                                <span className={styles.text}>Название</span>
                                <input className={styles.name}></input>
                            </div>

                            <div className={styles.block2}>
                                <span className={styles.text}>Цена</span>
                                <div className={styles.price}>
                                    <input></input>
                                    <div className={styles.rectangle}>руб</div>
                                </div>

                            </div>


                            <div className={styles.block3}>
                                <span className={styles.text}>Комментарий</span>
                                <input></input>
                            </div>

                            <div className={styles.buttonBox}>
                                <button className={styles.createButton}>
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
}