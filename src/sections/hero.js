import React from "react"
import styled from "styled-components"

const Hero__Section = styled.section`
  min-height: 100vh;
  /* background-color: #fff; */
`

const Hero__Content = styled.div`
  padding: 2rem;
  background-color: white;
  height: 100%;
  margin: 0 auto;
  max-width: 1400px;
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
