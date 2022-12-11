import React from 'react'
import styled from 'styled-components'

export const Header__Content = styled.nav`
  /* background: #00e2d1; */
  background: white;
  height: 4rem;
  width: 100vw;
  border-bottom: 1px solid ${({ theme }) => theme.border};
  /* border: 1px solid #000; */
`

const Header = () => {
  return <Header__Content>Navbar</Header__Content>
}

export default Header
