import React from "react"
import styled from "styled-components"

const Feaures__Section = styled.section``

const Features__Content = styled.div`
  /* ${({ theme }) => theme.mixins.boxSection}; */
`

const Feaures = () => {
  return (
    <Feaures__Section>
      <Features__Content>Feaures</Features__Content>
    </Feaures__Section>
  )
}

export default Feaures
