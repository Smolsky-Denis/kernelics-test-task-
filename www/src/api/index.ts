import axios, { AxiosResponse } from 'axios'

const BASE_URL = 'http://localhost:3001/'

export const apiRequest = async <T>(
  method: 'GET' | 'POST',
  endpoint: string,
  data?: any,
): Promise<AxiosResponse<T>> => {
  try {
    const response = await axios({
      method,
      url: `${BASE_URL}${endpoint}`,
      data,
    })
    return response
  } catch (error: unknown) {
    if (axios.isAxiosError(error)) {
      throw new Error(error.response?.data?.message || 'API request failed')
    } else {
      throw new Error('An unexpected error occurred')
    }
  }
}
