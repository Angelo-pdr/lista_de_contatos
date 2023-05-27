import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import Contatos from '../../models/contatos'

type ContatoState = {
  itens: Contatos[]
}

const initialState: ContatoState = {
  itens: [
    {
      id: 1,
      name: 'Angelo da Silva pedrosa',
      phone: '(31) 9 7573-2125',
      email: 'angelo.ppedrosa@gmail.com'
    },

    {
      id: 2,
      name: 'Crislayne de Souza Preisigke',
      phone: '(31) 9 7874-3125',
      email: 'crislayne.souza@gmail.com'
    },

    {
      id: 3,
      name: 'Gabriel da Silva pedrosa',
      phone: '(31) 9 98543-7175',
      email: 'gabriel.ppedrosa@gmail.com'
    }
  ]
}

export const contatoSlice = createSlice({
  name: 'contato',
  initialState,
  reducers: {
    remover: (state, action: PayloadAction<number>) => {
      state.itens = state.itens.filter(
        (contato) => contato.id !== action.payload
      )
    }
  }
})

export const { remover } = contatoSlice.actions
export default contatoSlice.reducer
