import { User } from  '../types/user'
import { Wish } from '../types/wish'
import { Wishlist } from '../types/wishlist'
import {json} from "node:stream/consumers";
import wishlist from "@/components/wishlist";
import {Photo} from "@/types/photo";


const BASE = 'http://84.38.183.178:7777'


export async function fetchWishes(): Promise<Wish[]> {
    let authToken = localStorage.getItem("user");
    if (authToken && authToken.startsWith('"') && authToken.endsWith('"')) {
        authToken = authToken.slice(1, -1);
    }
    const res = await fetch(`${BASE}/wishes`, {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json',
            'Authorization': authToken ? authToken : ''
        },
    })

    if (!res.ok) throw new Error("Ошибка в загрузке подарка");
    return await res.json()

}

export async function fetchWishlists(): Promise<Wishlist[]> {
     let authToken = localStorage.getItem("user");
     if (authToken && authToken.startsWith('"') && authToken.endsWith('"')) {
         authToken = authToken.slice(1, -1);
     }
    const res = await fetch(`${BASE}/wishlists`, {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json',
            'Authorization': authToken? authToken : ''
        }
        });

    if (!res.ok) {
        throw new Error('Failed to fetch wishlists');
    }
    return res.json()


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
    const session = await res.json()
    const sessionId : string = session.id.replace(/"/g, '');
    localStorage.setItem("user", sessionId)
    return res.json();
}

export async function CreateWish(newWish: Wish): Promise<Wish> {
    let authToken = localStorage.getItem("user");
    if (authToken && authToken.startsWith('"') && authToken.endsWith('"')) {
        authToken = authToken.slice(1, -1); // Удаление первого и последнего символов (кавычек)
    }
    const res = await fetch(`${BASE}/wishlists`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            'Authorization': authToken ? authToken : ''
        },
        body: JSON.stringify({
            name: newWish.name,
            price: newWish.price,
            photo: newWish.photo,
            description: newWish.description,
            link: newWish.link,
        })
    });
    if (!res.ok) {
        throw new Error("Failed to create wish");
    }

    return await res.json()
}

export async function getPhoto(): Promise<Photo[]> {
    let category =  localStorage.getItem("category");
    if (category && category.startsWith('"') && category.endsWith('"')) {
        category = category.slice(1, -1); // Удаление первого и последнего символов (кавычек)
    }
    let id = localStorage.getItem("photoId");
    if (id && id.startsWith('"') && id.endsWith('"')) {
        id = id.slice(1, -1); // Удаление первого и последнего символов (кавычек)
    }

    let authToken = localStorage.getItem("user");
    if (authToken && authToken.startsWith('"') && authToken.endsWith('"')) {
        authToken = authToken.slice(1, -1); // Удаление первого и последнего символов (кавычек)
    }
    const res = await fetch(`${BASE}/${category}/${id}`, {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json',
            'Authorization': authToken ? authToken : ''
        },
    })
    if (!res.ok) {
        throw new Error('Failed to load photo')
    }

    return await res.json()
}


export async function uploadPhoto (newPhoto: Photo): Promise<Photo> {
    const category =  localStorage.getItem("category");
    let authToken = localStorage.getItem("user");
    if (authToken && authToken.startsWith('"') && authToken.endsWith('"')) {
        authToken = authToken.slice(1, -1); // Удаление первого и последнего символов (кавычек)
    }

    const res = await fetch(`${BASE}/upload`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            'Authorization': authToken ? authToken : ''
        },
        body: JSON.stringify({
            photo: newPhoto.photo,
            category: category,
        })
    });
    if (!res.ok) {
        throw new Error("Failed to upload photo");
    }

    return await res.json()



}

export async function CreateWishlist(newWishlist: Wishlist): Promise<Wishlist> {
    let authToken = localStorage.getItem("user");
    if (authToken && authToken.startsWith('"') && authToken.endsWith('"')) {
        authToken = authToken.slice(1, -1); // Удаление первого и последнего символов (кавычек)
    }
    const res = await fetch(`${BASE}/wishlists`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            'Authorization': authToken ? authToken : ''
        },
        body: JSON.stringify({
            Name: newWishlist.name,
        })
    });

    if (!res.ok) {
        throw new Error("Ошибка в создании пользователя");
    }

    return await res.json();
}




