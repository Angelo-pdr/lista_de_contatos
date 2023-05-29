import styled from 'styled-components'

export const Container = styled.div`
  width: 100%
  height: 100%;
`

export const Contacts = styled.div`
  width: 100%
  height: 100%;
  margin-top: 1rem;
  padding 1rem;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  gap: 20px;

  @media(max-width: 1120px){
    grid-template-columns: 1fr 1fr;
  }
  @media(max-width: 800px){
    grid-template-columns: 1fr;
  }
`
