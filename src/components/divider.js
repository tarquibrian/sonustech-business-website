import React from "react"
import styled from "styled-components"

const Divider__Section = styled.section`
  min-height: 150px;
  width: 100%;
  background-color: ${({ theme }) => theme.colors?.foreground};
`

const Divider = () => {
  return <Divider__Section></Divider__Section>
}

export default Divider
