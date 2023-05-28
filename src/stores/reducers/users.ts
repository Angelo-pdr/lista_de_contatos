import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import Contatos from '../../models/contact'

const initialState = {
  itens: [
    {
      id: 1,
      name: 'Angelo da Silva pedrosa',
      phone: '(31) 9 7573-2125',
      email: 'angelo.ppedrosa@gmail.com',
      favorites: false
    },

    {
      id: 2,
      name: 'Crislayne de Souza Preisigke',
      phone: '(31) 9 7874-3125',
      email: 'crislayne.souza@gmail.com',
      favorites: false
    },

    {
      id: 3,
      name: 'Gabriel da Silva pedrosa',
      phone: '(31) 9 98543-7175',
      email: 'gabriel.ppedrosa@gmail.com',
      favorites: false
    }
  ],
  favoriteItens: []
}

export const contactSlice = createSlice({
  name: 'contact',
  initialState,
  reducers: {
    remover: (state, action: PayloadAction<number>) => {
      state.itens = state.itens.filter(
        (contato) => contato.id !== action.payload
      )
    },
    edit: (state, action: PayloadAction<Contatos>) => {
      const editedtask = state.itens.findIndex(
        (c) => c.id === action.payload.id
      )
      if (editedtask > 0) {
        state.itens[editedtask] = action.payload
      }
    }
  }
})

export const { remover, edit } = contactSlice.actions
export default contactSlice.reducer
