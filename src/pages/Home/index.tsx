import ButtonAdd from '../../components/ButtonCircle'
import ListContact from '../../container/ListContact'
import { Container } from './styles'

export const Home = () => (
  <Container>
    <ListContact />
    <ButtonAdd link="/novo">+</ButtonAdd>
  </Container>
)

export default Home
