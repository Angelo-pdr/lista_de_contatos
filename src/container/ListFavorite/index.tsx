import { useSelector } from 'react-redux'
import Contact from '../../components/Contact'
import { Contacts, Container } from './styles'
import { TopBody, Header, Button } from '../../styles/index'
import { RootState } from '../../stores'
import { useNavigate } from 'react-router-dom'
import { useEffect, useState } from 'react'
import ContactProps from '../../models/contact'

const ListFavorite = () => {
  const navigate = useNavigate()
  const [contatcFavorite, setContatcFavorite] = useState<ContactProps[]>([])
  const { itens } = useSelector((state: RootState) => state.contact)

  function favorites() {
    const list = itens.filter((f) => f.favorite === true)
    if (list.length > 0) {
      setContatcFavorite(list)
      return contatcFavorite
    }
    return setContatcFavorite([])
  }

  useEffect(() => {
    favorites()
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [itens])

  return (
    <Container>
      <TopBody>
        <Header>
          <h1>Contatos Favoritos</h1>
          <Button onClick={() => navigate('/')}>Home</Button>
        </Header>
      </TopBody>
      <Contacts>
        {contatcFavorite.length > 0 ? (
          contatcFavorite.map((user) => (
            <div key={user.id}>
              <Contact contacts={user} />
            </div>
          ))
        ) : (
          <h1>Nenhum contato encotrado</h1>
        )}
      </Contacts>
    </Container>
  )
}

export default ListFavorite
