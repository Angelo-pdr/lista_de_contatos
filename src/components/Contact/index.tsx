import { Container, Img, Content, Infor, ContentButton, Input } from './styles'
import Contact from '../../models/contact'
import { Button } from '../../styles/index'
import { useDispatch } from 'react-redux'
import { edit, remover } from '../../stores/reducers/users'
import { useState } from 'react'

type CardProps = Contact

const Contatc = ({ email, id, name, phone, favorites }: CardProps) => {
  const dispatch = useDispatch()
  const [isEditing, setIsEditing] = useState(false)
  const [newName, setNewname] = useState(name)
  const [newPhone, setNewPhone] = useState(phone)
  const [newEmail, setNewEmail] = useState(email)

  function newcontactvalue() {
    setIsEditing(false)
    dispatch(
      edit({ id, name: newName, phone: newPhone, email: newEmail, favorites })
    )
  }

  function cancelEdit() {
    setIsEditing(false)
    setNewname(name)
    setNewPhone(phone)
    setNewEmail(email)
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
              <p>Telefone: {phone}</p>
              <p>Nome: {name}</p>
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
          <h2>Email: {email}</h2>
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
            <Button onClick={() => dispatch(remover(id))}>Remover</Button>
          )}
        </ContentButton>
      </Infor>
    </Container>
  )
}

export default Contatc
