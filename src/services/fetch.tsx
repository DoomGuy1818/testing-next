import { Selection } from '../types/selection'

const BASE = 'http://84.38.183.178:7777'

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
