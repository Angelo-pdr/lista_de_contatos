import { Button } from '../../styles/index'
import { Container, Header as HeaderContainer, Title } from './styles'

const Header = () => {
  return (
    <Container>
      <HeaderContainer>
        <Title>Lista de Contatos</Title>
        <div>
          <Button>Adicionar Contato</Button>
          <Button>Favoritos 0</Button>
        </div>
      </HeaderContainer>
    </Container>
  )
}

export default Header
