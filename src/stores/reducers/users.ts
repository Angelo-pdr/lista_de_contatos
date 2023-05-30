import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import ContactProps from '../../models/contact'

type ContactState = {
  itens: ContactProps[]
}

const initialState: ContactState = {
  itens: [
    {
      id: '1',
      name: 'Angelo da Silva pedrosa',
      phone: '(31) 9 7573-2125',
      email: 'angelo.ppedrosa@gmail.com',
      favorite: false
    },

    {
      id: '2',
      name: 'Crislayne de Souza Preisigke',
      phone: '(31) 9 7874-3125',
      email: 'crislayne.souza@gmail.com',
      favorite: false
    },

    {
      id: '3',
      name: 'Gabriel da Silva pedrosa',
      phone: '(31) 9 98543-7175',
      email: 'gabriel.ppedrosa@gmail.com',
      favorite: false
    }
  ]
}

export const contactSlice = createSlice({
  name: 'contact',
  initialState,
  reducers: {
    remover: (state, action: PayloadAction<string>) => {
      state.itens = state.itens.filter(
        (contatc) => contatc.id !== action.payload
      )
    },
    edit: (state, action: PayloadAction<ContactProps>) => {
      const indexDaTarefa = state.itens.findIndex(
        (t) => t.id === action.payload.id
      )

      if (indexDaTarefa >= 0) {
        state.itens[indexDaTarefa] = action.payload
      }
    },
    addFavorite: (state, action: PayloadAction<ContactProps>) => {
      const editedFavorite = state.itens.findIndex(
        (c) => c.id === action.payload.id
      )

      if (editedFavorite >= 0) {
        state.itens[editedFavorite] = action.payload
      }
    },
    register: (state, action: PayloadAction<ContactProps>) => {
      const existingContact = state.itens.find(
        (c) =>
          c.phone.toLocaleLowerCase() ==
          action.payload.phone.toLocaleLowerCase()
      )
      if (existingContact) {
        alert('Já existe um contato com esse numero')
      } else {
        const newContatc = action.payload
        state.itens.push(newContatc)
      }
    },
    contactFilter: (state, action: PayloadAction<string>) => {
      state.itens = state.itens.filter(
        (contatc) => contatc.name !== action.payload
      )
      state.itens = state.itens.filter(
        (contatc) => contatc.phone !== action.payload
      )
    }
  }
})

export const { remover, edit, addFavorite, register } = contactSlice.actions
export default contactSlice.reducer
