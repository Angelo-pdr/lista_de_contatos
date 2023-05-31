import styled from 'styled-components'

export const Container = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  width: 100%;
  height: 100px;
  padding: 0px 1rem;
  display: flex;
  align-items: center;
  justify-content: center;
  div {
    display: flex;
    align-items: center;
    gap: 10px;
  }
`

export const Header = styled.header`
  background-color: #fff;
  border-radius: 36px;
  padding: 0.5rem 1rem;
  width: 100%;
  max-height: 66px;
  box-shadow: 3px 3px 3px 3px #9cced9;
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 2rem;
`

export const Title = styled.header`
  font-size: 1.2rem;
  font-weight: bold;
`
export const Button = styled.button`
  width: 25px;
  height: 25.59px;
  background-color: transparent;
  border: none;
  cursor: pointer;
  img {
    width: 100%;
    height: 100%;
  }
`
export const Input = styled.input`
  width: 70%;
  height: 25.59px;
  padding .3rem .5rem;
  background-color: transparent;
  border: 1px solid black;
  border-radius: 1rem;
  outline: none;
  animation: widthInput .5s ease-in;

  @keyframes widthInput {
    to{
      width: 70%;
    }
    from {
      width: 0%;
    }

    @media(max-width: 770px){
      width: 100%;
    }
}
`
