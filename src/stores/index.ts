import { configureStore } from '@reduxjs/toolkit'
import ContatoRaeducer from './reducers/users'

export const store = configureStore({
  reducer: {
    contato: ContatoRaeducer
  }
})

export type RootState = ReturnType<typeof store.getState>
