import { configureStore } from '@reduxjs/toolkit'
import ContactReducer from './reducers/users'
import SearchReducer from './reducers/filtered'

export const store = configureStore({
  reducer: {
    contact: ContactReducer,
    search: SearchReducer
  }
})

export type RootState = ReturnType<typeof store.getState>
