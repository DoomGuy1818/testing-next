'use client'
import React, { useState } from 'react';
import styles from "./regCard.module.scss";
import { RegisterUser } from "@/services/fetch";
import { User } from "@/types/user";

export default function Register() {
    const [formData, setFormData] = useState({
        Name: "",
        LastName: "Jenkins",
        Login: "",
        Birthday: "30.10.2003",
        Coins: 0,
        Password: ""
    });

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value
        });
    };

    const handleRegisterClick = async () => {
        try {
            await RegisterUser(formData);
            console.log(formData)
            console.log("Пользователь успешно зарегистрирован!");

        } catch (error) {
            console.log(formData)
            console.error("Ошибка во время регистрации пользователя:", error);
        }
    };

    return (
        <div className={styles.container}>
            <div className={styles.regBox}>
                <div className={styles.regContent}>
                    <h1>Регистрация</h1>
                    <div className={styles.nameInput}>
                        <span>Имя</span>
                        <input type='text' name="Name" value={formData.Name} onChange={handleInputChange} />
                    </div>
                    <div className={styles.emailInput}>
                        <span>Почта</span>
                        <input type='text' name="Login" value={formData.Login} onChange={handleInputChange} />
                    </div>
                    <div className={styles.passwordInput}>
                        <span>Пароль</span>
                        <input type='password' name="Password" value={formData.Password} onChange={handleInputChange} />
                    </div>
                    <button onClick={handleRegisterClick}>Зарегистрироваться</button>
                </div>
            </div>
        </div>
    );
}
