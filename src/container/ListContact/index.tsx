import { useSelector } from 'react-redux'
import Contact from '../../components/Contact'
import { Contacts, Container } from './styles'
import { TopBody, Header, Button } from '../../styles/index'
import { RootState } from '../../stores'
import { useNavigate } from 'react-router-dom'

const ListContact = () => {
  const navigate = useNavigate()

  const { itens } = useSelector((state: RootState) => state.contact)
  return (
    <Container>
      <TopBody>
        <Header>
          <h1>Lista de Contatos</h1>
          <div>
            <Button onClick={() => navigate('/novoContato')}>
              Adicionar Contato
            </Button>
            <Button onClick={() => navigate('/favoritos')}>Favoritos 0</Button>
          </div>
        </Header>
      </TopBody>
      <Contacts>
        {itens.map((user) => (
          <div key={user.id}>
            <Contact contacts={user} />
          </div>
        ))}
      </Contacts>
    </Container>
  )
}

export default ListContact
