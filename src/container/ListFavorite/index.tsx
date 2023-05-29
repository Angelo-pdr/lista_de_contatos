import { useSelector } from 'react-redux'
import Contact from '../../components/Contact'
import { Contacts, Container } from './styles'
import { TopBody, Header, Button } from '../../styles/index'
import { RootState } from '../../stores'
import { useNavigate } from 'react-router-dom'

const ListFavorite = () => {
  const navigate = useNavigate()

  const { favorites } = useSelector((state: RootState) => state.contact)
  return (
    <Container>
      <TopBody>
        <Header>
          <h1>Lista de Contatos</h1>
          <div>
            <Button onClick={() => navigate('/')}>Home</Button>
            <Button onClick={() => navigate('/favoritos')}>Favoritos {favorites.length}</Button>
          </div>
        </Header>
      </TopBody>
      <Contacts>
        {favorites.length > 0 ? (
          favorites.map((user) => (
            <div key={user.id}>
              <Contact contacts={user} />
            </div>
          ))
        ) : (
          <h1>Nenhum contato favorito</h1>
        )}
      </Contacts>
    </Container>
  )
}

export default ListFavorite
