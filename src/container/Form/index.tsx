import { Content, Container, Input } from './styles'
import { Button } from '../../styles'
import { useState } from 'react'
import { v4 as uuidv4 } from 'uuid'
import { useDispatch, useSelector } from 'react-redux'
import { register } from '../../stores/reducers/users'
import { useNavigate } from 'react-router-dom'
import { RootState } from '../../stores'

const Form = () => {
  const navigate = useNavigate()
  const dispatch = useDispatch()
  const [name, setName] = useState('')
  const [phone, setPhone] = useState('')
  const [email, setEmail] = useState('')

  const addContatc = () => {
    const id = uuidv4()
    const validationValues = name != '' && phone != '' && email != ''
    if (validationValues) {
      dispatch(register({ id, name, email, phone, favorite: false }))
      navigate('/')
    } else {
      alert('Prencha todos os campos')
    }
  }

  return (
    <Container>
      <Content>
        <Input
          type="text"
          placeholder="Nome"
          value={name}
          onChange={(event) => setName(event.target.value)}
        />
        <Input
          type="text"
          placeholder="Telefone"
          value={phone}
          onChange={(event) => setPhone(event.target.value)}
        />
        <Input
          type="text"
          placeholder="Email"
          value={email}
          onChange={(event) => setEmail(event.target.value)}
        />
        <Button onClick={addContatc}>Cadastra</Button>
      </Content>
    </Container>
  )
}

export default Form
