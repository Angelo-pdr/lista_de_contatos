import styled, { createGlobalStyle } from 'styled-components'

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

export default GlobalStyle
