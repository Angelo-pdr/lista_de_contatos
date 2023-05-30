import { Link } from 'react-router-dom'

import styled from 'styled-components'

export const Circle = styled(Link)`
  height: 64px;
  width: 64px;
  background-color: #00BF8a;
  color: #fff;
  position fixed;
  bottom: 40px;
  right:40px;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 40px;
  text-decoration: none;
  cursor: pointer;

  &:hover {
    background-color: #00FFB9;
  }
`
