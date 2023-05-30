import { Circle } from './styles'

type ButtonProps = {
  link: string
  children: string
}

const ButtonCircle = ({ children, link }: ButtonProps) => (
  <Circle to={link}>{children}</Circle>
)

export default ButtonCircle
