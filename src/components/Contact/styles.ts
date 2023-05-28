import styled from 'styled-components'

export const Container = styled.div`
  width: 100%;
  max-height: 217px;
  height: 100%;
  padding .5rem 1rem;
  border-radius: 16px;
  background-color: #fff;
  box-shadow: 3px 3px 3px 3px #9cced9;
`

export const Img = styled.div`
  width: 50px;
  height: 50px;
  border-radius: 50%;
  padding .5rem 1rem;
  background-color: black;
`
export const Content = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  gap: 20px;
  padding .5rem 1rem;

  p{
    font-size: 1rem;
  }
`
export const Infor = styled.div`
  width: 100%;

  h2 {
    text-align: center;
    font-size: 1rem;
    font-weight: bold;
    padding: 0.5rem 0px;
  }
`
export const ContentButton = styled.div`
  width: 100%;
  padding: 0.5rem 0px;
  display: flex;
  align-items: center;
  justify-content: space-around;
`

export const Input = styled.input`
  width: 90%;
  margin: 5px 0px;
  border: none;
  border-bottom: 1px solid black;
  display: inline-block;
  font-size: 1rem;
  padding: 0px .5rem;
  outline: none;
`
