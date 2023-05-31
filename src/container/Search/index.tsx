import { Button, Input } from './styles'
import SearchImg from '../../img/pesquisa.png'
import { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { RootState } from '../../stores'
import { searchContact } from '../../stores/reducers/filtered'

const Search = () => {
  const dispatch = useDispatch()
  const [filter, setFilter] = useState(false)
  const { contatc } = useSelector((state: RootState) => state.search)
  return (
    <>
      {filter && (
        <Input
          value={contatc}
          placeholder="Digite o nome do contato:"
          onChange={(event) => dispatch(searchContact(event.target.value))}
        />
      )}
      <Button onClick={() => setFilter(!filter)}>
        <img src={SearchImg} alt="" />
      </Button>
    </>
  )
}

export default Search
