import React from "react"
import styled from "styled-components"

const Hero__Section = styled.section`
  min-height: 100vh;
  /* background-color: #fff; */
`

const Hero__Content = styled.div`
  ${({ theme }) => theme.mixins.boxSection};
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
