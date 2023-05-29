import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import Contact from '../../models/contact'

type ContactState = {
  itens: Contact[]
  favorites: Contact[]
}

const initialState: ContactState = {
  itens: [
    {
      id: 1,
      name: 'Angelo da Silva pedrosa',
      phone: '(31) 9 7573-2125',
      email: 'angelo.ppedrosa@gmail.com',
      favorite: false
    },

    {
      id: 2,
      name: 'Crislayne de Souza Preisigke',
      phone: '(31) 9 7874-3125',
      email: 'crislayne.souza@gmail.com',
      favorite: false
    },

    {
      id: 3,
      name: 'Gabriel da Silva pedrosa',
      phone: '(31) 9 98543-7175',
      email: 'gabriel.ppedrosa@gmail.com',
      favorite: false
    }
  ],
  favorites: []
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
    edit: (state, action: PayloadAction<Contact>) => {
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
