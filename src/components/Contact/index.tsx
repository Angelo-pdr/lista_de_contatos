import { Container, Img, Content, Infor, ContentButton, Input } from './styles'
import Contact from '../../models/contact'
import { Button } from '../../styles/index'
import { useDispatch } from 'react-redux'
import { edit, remover } from '../../stores/reducers/users'
import { useState } from 'react'

type CardProps = {
  contacts: Contact
}

const Contatc = ({contacts}: CardProps) => {
  const dispatch = useDispatch()
  const [isEditing, setIsEditing] = useState(false)
  const [newName, setNewname] = useState(contacts.name)
  const [newPhone, setNewPhone] = useState(contacts.phone)
  const [newEmail, setNewEmail] = useState(contacts.email)

  function newcontactvalue() {
    setIsEditing(false)
    dispatch(
      edit({
        id: contacts.id,
        name: newName,
        phone: newPhone,
        email: newEmail,
        favorite: contacts.favorite
      })
    )
  }

  function cancelEdit() {
    setIsEditing(false)
    setNewname(contacts.name)
    setNewPhone(contacts.phone)
    setNewEmail(contacts.email)
  }

  return (
    <Container>
      <Content>
        <Img></Img>
        <div>
          {isEditing ? (
            <>
              <Input
                value={newPhone}
                placeholder="Telefone:"
                type="text"
                onChange={(event) => setNewPhone(event.target.value)}
              />
              <Input
                value={newName}
                placeholder="Nome:"
                type="text"
                onChange={(event) => setNewname(event.target.value)}
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
            value={newEmail}
            placeholder="Email:"
            type="text"
            onChange={(event) => setNewEmail(event.target.value)}
          />
        ) : (
          <h2>Email: {contacts.email}</h2>
        )}
        <ContentButton>
          <Button>Favoritar</Button>
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
