import Image from "next/image"
import React from "react"
import styled from "styled-components"
import HeroIMG from "../assets/images/hero.jpg"

const Hero__Section = styled.section`
  padding: 4rem 0 0 0;
  height: 100vh;
  min-height: 100vh;
  /* background-color: lightcoral; */
`

const Hero__Content = styled.div`
  height: 100%;
  width: 100%;
  position: relative;
  /* background-color: lightblue; */
  display: grid;
  grid-template-columns: auto 500px;
`

const Content__Title = styled.div`
  background-color: lightcyan;
`

const Content__Image = styled.div`
  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
  &::before {
    content: "";
  }
`

const Hero = () => {
  return (
    <Hero__Section>
      <Hero__Content>
        <Content__Title>
          <h1>SONUSTECH</h1>
          <span> Whereas recognition of the inherent dignity </span>
        </Content__Title>
        <Content__Image>
          <Image src={HeroIMG} alt="hero image" />
        </Content__Image>
      </Hero__Content>
    </Hero__Section>
  )
}

export default Hero
