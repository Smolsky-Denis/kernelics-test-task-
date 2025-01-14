import { IEmployee } from 'common/interfaces/interface'

const BASE_URL = 'http://localhost:3001'

export const api = async (url: string, params?: RequestInit) => {
  try {
    const response = await fetch(`${BASE_URL}/${url}`, params)

    return await response.json()
  } catch (error) {
    console.error(error)
  }
}

export const getUsers = async () => {
  return await api('users')
}

export const createUser = async (user: Omit<IEmployee, 'id'>) => {
  return await api('users', {
    method: 'POST',
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(user),
  })
}

export const updateUser = async (user: IEmployee) => {
  return await api(`users/${user.id}`, {
    method: 'POST',
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(user),
  })
}
