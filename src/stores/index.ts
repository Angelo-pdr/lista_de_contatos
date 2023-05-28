import { configureStore } from '@reduxjs/toolkit'
import ContactReducer from './reducers/users'

export const store = configureStore({
  reducer: {
    contact: ContactReducer
  }
})

export type RootState = ReturnType<typeof store.getState>
