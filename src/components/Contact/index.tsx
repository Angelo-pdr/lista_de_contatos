import { Container, Img, Content, Infor, ContentButton, Input } from './styles'
import Contact from '../../models/contact'
import { Button, ButtonFavorite } from '../../styles/index'
import { useDispatch } from 'react-redux'
import { addFavorite, edit, remover } from '../../stores/reducers/users'
import { useState } from 'react'
import user from '../../img/user.png'

type CardProps = {
  contacts: Contact
}

const Contatc = ({ contacts }: CardProps) => {
  const dispatch = useDispatch()
  const [isEditing, setIsEditing] = useState(false)
  const [name, setName] = useState(contacts.name)
  const [phone, setPhone] = useState(contacts.phone)
  const [email, setEmail] = useState(contacts.email)

  function newcontactvalue() {
    setIsEditing(false)
    dispatch(
      edit({
        id: contacts.id,
        name,
        phone,
        email,
        favorite: contacts.favorite
      })
    )
  }

  function addFavorites() {
    console.log(!contacts.favorite)
    dispatch(
      addFavorite({
        id: contacts.id,
        name: contacts.name,
        phone: contacts.phone,
        email: contacts.email,
        favorite: !contacts.favorite
      })
    )
  }

  function cancelEdit() {
    setIsEditing(false)
    setName(contacts.name)
    setPhone(contacts.phone)
    setEmail(contacts.email)
  }

  return (
    <Container>
      <Content>
        <Img src={user} alt="teste" />
        <div>
          {isEditing ? (
            <>
              <Input
                value={phone}
                placeholder="Telefone:"
                type="text"
                onChange={(event) => setPhone(event.target.value)}
              />
              <Input
                value={name}
                placeholder="Nome:"
                type="text"
                onChange={(event) => setName(event.target.value)}
              />
            </>
          ) : (
            <>
              <p>Telefone: {contacts.phone}</p>
              <p>Nome: {contacts.name}</p>
            </>
          )}
        </div>
      </Content>
      <Infor>
        {isEditing ? (
          <Input
            value={email}
            placeholder="Email:"
            type="text"
            onChange={(event) => setEmail(event.target.value)}
          />
        ) : (
          <h2>Email: {contacts.email}</h2>
        )}
        <ContentButton>
          <ButtonFavorite
            colorFavorite={contacts.favorite}
            onClick={addFavorites}
          >
            Favoritar
          </ButtonFavorite>
          {isEditing ? (
            <Button onClick={cancelEdit}>Cancelar</Button>
          ) : (
            <Button onClick={() => setIsEditing(true)}>Editar</Button>
          )}
          {isEditing ? (
            <Button onClick={newcontactvalue}>Salvar</Button>
          ) : (
            <Button onClick={() => dispatch(remover(contacts.id))}>
              Remover
            </Button>
          )}
        </ContentButton>
      </Infor>
    </Container>
  )
}

export default Contatc
