import React from "react"
import styled from "styled-components"

const Contact__Section = styled.section`
  /* background-color: white; */
  min-height: 20em;
`

const Contact__Content = styled.div`
  padding: 2rem;
`

const Contact = () => {
  return (
    <Contact__Section>
      <Contact__Content>Contact</Contact__Content>
    </Contact__Section>
  )
}

export default Contact
