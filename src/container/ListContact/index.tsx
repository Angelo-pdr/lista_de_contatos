import { useSelector } from 'react-redux'
import Header from '../Header/'
import Contact from '../../components/Contact'
import { Contacts, Container } from './styles'
import { RootState } from '../../stores'

const ListContact = () => {
  const { itens } = useSelector((state: RootState) => state.contact)
  return (
    <Container>
      <Header />
      <Contacts>
        {itens.map((user) => (
          <div key={user.id}>
            <Contact
              email={user.email}
              id={user.id}
              phone={user.phone}
              name={user.name}
              favorites={user.favorites}
            />
          </div>
        ))}
      </Contacts>
    </Container>
  )
}

export default ListContact
