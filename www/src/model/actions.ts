import { IEmployee } from 'common/interfaces/interface'
import { createAsyncThunk } from '@reduxjs/toolkit'
import { apiRequest } from 'api'

export const getEmployeeList = createAsyncThunk(
  'employeeList/fetchData',
  async () => {
    const response = await apiRequest<any>('GET', 'users')

    return response.data
  },
)

export const setEmployeeStatus = createAsyncThunk(
  'setEmployeeStatus/fetchData',
  async (body: IEmployee) => {
    const response = await apiRequest<any>('POST', `users/${body.id}`, body)

    return response.data
  },
)

export const createEmployee = createAsyncThunk(
  'createEmployee/fetchData',
  async (body: Omit<IEmployee, 'id'>) => {
    const response = await apiRequest<any>('POST', 'users', body)

    return response.data
  },
)
