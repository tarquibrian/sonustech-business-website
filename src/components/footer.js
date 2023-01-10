import React from "react"
import styled from "styled-components"

const Footer__Section = styled.footer`
  min-height: 400px;
  /* border-top: var(--border) solid ${({ theme }) => theme.colors?.border}; */
  border-bottom: var(--border) solid ${({ theme }) => theme.colors?.border};
  /* border: 1px solid #000; */
  /* border-top-left-radius: 1.5rem; */
  /* border-top-right-radius: 1.5rem; */
`

const Footer = () => {
  return <Footer__Section>Footer</Footer__Section>
}

export default Footer
