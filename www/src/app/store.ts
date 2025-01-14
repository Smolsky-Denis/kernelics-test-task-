import { configureStore } from '@reduxjs/toolkit'
import employee from '../model/reducer'

export const store = configureStore({
  reducer: {
    employee,
  },
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
