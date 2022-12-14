import React from "react"
import styled from "styled-components"

const Team__Section = styled.section``

const Team__Content = styled.div`
  /* ${({ theme }) => theme.mixins.boxSection}; */
`

const Team = () => {
  return (
    <Team__Section>
      <Team__Content>Team</Team__Content>
    </Team__Section>
  )
}

export default Team
