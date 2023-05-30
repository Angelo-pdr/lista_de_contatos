import { useSelector } from 'react-redux'
import Contact from '../../components/Contact'
import { Contacts, Container } from './styles'
import { TopBody, Header } from '../../styles/index'
import { RootState } from '../../stores'
import ButtonFavorite from '../../components/ButtonFavorite'
import Search from '../Search'

const ListContact = () => {
  const { itens } = useSelector((state: RootState) => state.contact)
  const { contatc } = useSelector((state: RootState) => state.search)

  const filteredContatc = () => {
    let filtered = itens
    if (contatc != '') {
      filtered = filtered.filter(
        (item) =>
          item.name.toLocaleLowerCase().search(contatc.toLocaleLowerCase()) >= 0
      )

      return filtered
    } else {
      return itens
    }
  }

  return (
    <Container>
      <TopBody>
        <Header>
          <h1>Lista de Contatos</h1>
          <div>
            <Search />
            <ButtonFavorite />
          </div>
        </Header>
      </TopBody>
      <Contacts>
        {filteredContatc().map((user) => (
          <div key={user.id}>
            <Contact contacts={user} />
          </div>
        ))}
      </Contacts>
    </Container>
  )
}

export default ListContact
