import React from "react"
import styled from "styled-components"

const Hero__Section = styled.section`
  margin-top: 0;
  border-top-left-radius: 0;
  border-top-right-radius: 0;
  min-height: 100vh;
  background-color: #fff;
`

const Hero__Content = styled.div`
  padding: 2rem;
`

const Hero = () => {
  return (
    <Hero__Section>
      <Hero__Content>
        Whereas recognition of the inherent dignity{" "}
      </Hero__Content>
    </Hero__Section>
  )
}

export default Hero
