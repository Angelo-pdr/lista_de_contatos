import { useSelector } from 'react-redux'
import { HeaderButton as ButtonFavorites } from './styles'
import { TopBody, Header, Button } from '../../styles/index'
import { useNavigate } from 'react-router-dom'
import { RootState } from '../../stores'
import { useEffect, useState } from 'react'

const ButtonFavorite = () => {
  const navigate = useNavigate()
  const { itens } = useSelector((state: RootState) => state.contact)
  const [contact, setContact] = useState(0)

  const quantityFavorites = () => {
    const quantity = itens.filter((c) => c.favorite === true)
    setContact(quantity.length)
    console.log(itens)
  }

  useEffect(() => {
    quantityFavorites()
  }, [itens])

  return (
    <ButtonFavorites onClick={() => navigate('/favoritos')}>
      {contact}
    </ButtonFavorites>
  )
}

export default ButtonFavorite
