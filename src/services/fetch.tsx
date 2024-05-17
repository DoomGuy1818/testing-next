import { User } from  '../types/user'
import { Wish } from '../types/wish'
import { Wishlist } from '../types/wishlist'
import {json} from "node:stream/consumers";

const BASE = 'http://84.38.183.178:7777'


export async function fetchWishes(): Promise<Wish[]> {
    const res = await fetch(`${BASE}/wishes`, {})

    if (!res.ok) throw new Error("Ошибка в загрузке подарка");
    return await res.json()
}

export async function fetchWishlists(): Promise<Wishlist[]> {
    const res = await fetch(`${BASE}/wishlists/`, {})

    if (!res.ok) throw new Error("Ошибка в загрузке вишлиста")
    return await res.json()
}

export async function RegisterUser(newUser: User): Promise<User> {
    const res = await fetch(`${BASE}/register`, {
        method: "POST",
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({
            Name: newUser.Name,
            LastName: newUser.LastName,
            Login: newUser.Login,
            Birthday: newUser.Birthday,
            Password: newUser.Password,
        })
    });

    if (!res.ok) {
        throw new Error("Ошибка в создании пользователя");
    }

    return await res.json();
}



