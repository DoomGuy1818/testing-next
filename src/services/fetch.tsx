import { Selection } from '../types/selection'
import { User } from  '../types/user'
import { Wish } from '../types/wish'
import { Wishlist } from '../types/wishlist'
import {json} from "node:stream/consumers";
import wishlist from "@/components/wishlist";

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
    // let authToken = localStorage.getItem("user");
    // if (authToken && authToken.startsWith('"') && authToken.endsWith('"')) {
    //     authToken = authToken.slice(1, -1);
    // }
    const res = await fetch(`${BASE}/wishlists`, {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json',
            'Authorization': 'session_cp4ahofnnsjf4mhn7ufg'
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


export async function CreateSelection(
  selection: Selection
): Promise<Selection> {
  let authToken = localStorage.getItem('user')
  if (authToken && authToken.startsWith('"') && authToken.endsWith('"')) {
    authToken = authToken.slice(1, -1) // Удаление первого и последнего символов (кавычек)
  }

  const res = await fetch(`${BASE}/selection`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      Authorization: authToken ? authToken : "session_cp4ahofnnsjf4mhn7ufg",
    },
    body: JSON.stringify({
      id: selection.id,
      name: selection.name,
      description: selection.description,
      userId: selection.userId,
      isGenerated: selection.isGenerated,
      image: selection.image,
    }),
  })
  if (!res.ok) {
    throw new Error('Ошибка при создании подборки')
  }

  return await res.json()
}

export async function GetManySelections(): Promise<Selection[]> {
  let authToken = localStorage.getItem('user')
  if (authToken && authToken.startsWith('"') && authToken.endsWith('"')) {
    authToken = authToken.slice(1, -1)
  }
  const res = await fetch(`${BASE}/selection`, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
      Authorization: authToken ? authToken : '',
    },
  })

  if (!res.ok) throw new Error('Ошибка при получении подборок')
  return await res.json()
}

export async function GetOneSelection(): Promise<Selection[]> {
  let authToken = localStorage.getItem('user')
  if (authToken && authToken.startsWith('"') && authToken.endsWith('"')) {
    authToken = authToken.slice(1, -1)
  }
  const res = await fetch(`${BASE}/selection`, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
      Authorization: authToken ? authToken : '',
    },
  })

  if (!res.ok) throw new Error('Ошибка при получении подборки')
  return await res.json()
}

export async function DeleteSelection(
  selection: Selection
): Promise<Selection> {
  let authToken = localStorage.getItem('user')
  if (authToken && authToken.startsWith('"') && authToken.endsWith('"')) {
    authToken = authToken.slice(1, -1) // Удаление первого и последнего символов (кавычек)
  }
  const res = await fetch(`${BASE}/selection`, {
    method: 'DELETE',
    headers: {
      'Content-Type': 'application/json',
      Authorization: authToken ? authToken : '',
    },
    body: JSON.stringify({
      id: selection.id,
      name: selection.name,
      description: selection.description,
      userId: selection.userId,
      isGenerated: selection.isGenerated,
      image: selection.image,
    }),
  })
  if (!res.ok) {
    throw new Error('Ошибка при удалении подборки')
  }

  return await res.json()
}

export async function UpdateSelection(
  selection: Selection
): Promise<Selection> {
  let authToken = localStorage.getItem('user')
  if (authToken && authToken.startsWith('"') && authToken.endsWith('"')) {
    authToken = authToken.slice(1, -1) // Удаление первого и последнего символов (кавычек)
  }
  const res = await fetch(`${BASE}/selection`, {
    method: 'PATCH',
    headers: {
      'Content-Type': 'application/json',
      Authorization: authToken ? authToken : '',
    },
    body: JSON.stringify({
      id: selection.id,
      name: selection.name,
      description: selection.description,
      userId: selection.userId,
      isGenerated: selection.isGenerated,
      image: selection.image,
    }),
  })
  if (!res.ok) {
    throw new Error('Ошибка при обновлении подборки')
  }

  return await res.json()
}

