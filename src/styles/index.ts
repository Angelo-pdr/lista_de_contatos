import styled, { createGlobalStyle } from 'styled-components'

type FavoritoProps = {
  colorFavorite: boolean
}

const GlobalStyle = createGlobalStyle`
  *{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  body{
    max-width: 100vw;
    max-height: 100vh;
    background-color: #D2F2F2;
    font-family: 'Roboto', sans-serif;
  }
`

export const Button = styled.button`
  padding: 0.3rem 1rem;
  border-radius: 1rem;
  font-size: 0.8rem;
  cursor: pointer;
  border: none;
  background-color: #73bcd9;
  text-aling: center;
  font-family: 'Roboto Mono', monospace;

  &:hover {
    background-color: #9cced9;
  }
`
export const ButtonFavorite = styled(Button)<FavoritoProps>`
  padding: 0.3rem 1rem;
  border-radius: 1rem;
  font-size: 0.8rem;
  cursor: pointer;
  border: none;
  background-color: ${(props) => (props.colorFavorite ? '#00BF8A' : '#73bcd9')};
  text-aling: center;
  font-family: 'Roboto Mono', monospace;

  &:hover {
    background-color: ${(props) =>
      props.colorFavorite ? '#00FFB9' : '#9cced9'};
  }
`

export const TopBody = styled.div`
  width: 100%;
  height: 50px;
  background-color: transparent;
  display: flex;
  align-items: center;
  justify-content: center;
`
export const Header = styled.header`
  width: 100%;
  height: 100%;
  border-radius: 2rem;
  padding: 0.5rem 1rem;
  background-color: #fff;
  display: flex;
  align-items: center;
  justify-content: space-between;

  h1 {
    font-size: 1rem;
    font-weight: bold;
    flex: now-rap;
  }

  div {
    max-width: 50%;
    max-height: 100%;
    display: flex;
    align-itens: center;
    justify-content: flex-end;
    width: 100%;
    gap: 5px;
  }
`

export default GlobalStyle
