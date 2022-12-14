import React from "react"
import styled from "styled-components"

const Services__Section = styled.section``

const Services__Content = styled.div`
  /* ${({ theme }) => theme.mixins.boxSection}; */
`

const Services = () => {
  return (
    <Services__Section>
      <Services__Content>Services</Services__Content>
    </Services__Section>
  )
}

export default Services
