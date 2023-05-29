import { useNavigate } from 'react-router-dom'
import { Button } from '../../styles/index'
import { Container, Header as HeaderContainer, Title } from './styles'

type Props = {
  title: string
}

const Header = ({ title }: Props) => {
  return (
    <Container>
      <HeaderContainer>
        <Title>{title}</Title>
        <div>children</div>
      </HeaderContainer>
    </Container>
  )
}

export default Header
