import { createSlice, PayloadAction } from '@reduxjs/toolkit'

type FiltroState = {
  contatc: string
}

const initialState: FiltroState = {
  contatc: ''
}

const SearchSlice = createSlice({
  name: 'filtro',
  initialState,
  reducers: {
    searchContact: (state, action: PayloadAction<string>) => {
      state.contatc = action.payload
    }
  }
})

export const { searchContact } = SearchSlice.actions
export default SearchSlice.reducer
