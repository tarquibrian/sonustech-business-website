import Image from "next/image"
import React from "react"
import styled from "styled-components"
import HeroIMG from "../assets/images/hero.jpg"
import Carousel from "../components/carousel"

const Hero__Section = styled.section`
  padding: 5rem 0 0 0;
  height: 100vh;
  min-height: 100vh;
  overflow: hidden;

  background: linear-gradient(
    45deg,
    #eff2ef 30%,
    rgba(205, 217, 255, 1) 70%,
    #eff2ef 100%
  );
  /* background-image: radial-gradient(
    circle farthest-corner at 10% 20%,
    rgba(255, 209, 67, 1) 0%,
    rgba(255, 1, 83, 1) 90%
  );
  background-image: radial-gradient(
    circle farthest-corner at 10% 20%,
    rgba(255, 209, 67, 1) 0%,
    rgba(255, 1, 83, 1) 90%
  ); */
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
  /* background-color: lightcyan; */
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
          {/* <Image
            // loader={cloudinaryImageLoader}
            src={HeroIMG}
            alt="hero image"
            width={500}
            // height={500}
            placeholder="blur"
            priority
          /> */}
          {/* <Carousel /> */}
        </Content__Image>
      </Hero__Content>
    </Hero__Section>
  )
}

export default Hero
