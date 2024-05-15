// @ts-ignore
import { User } from '../types/user'
import { Wish } from '../types/wish'
import { Wishlist } from '../types/wishlist'

const BASE = 'http://84.38.183.178:7777'


export async function fetchWishes(): Promise<Wish[]> {
    const res = await fetch(`${BASE}/wishes`, {})

    if (!res.ok) throw new Error("Ошибка в загрузке подарка");
    return res.json()
}

export async function fetchWishlists(): Promise<Wishlist[]> {
    const res = await fetch(`${BASE}/wishlists`, {})

    if (!res.ok) throw new Error("Ошибка в загрузке вишлиста")
    return res.json()
}


