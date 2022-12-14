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
  const cloudinaryImageLoader = ({ src }) => {
    return `https://res.cloudinary.com/ugwutotheeshoes/image/upload/bo_10px_solid_rgb:f78585,e_blur:290,b_rgb:e1e6e9,c_scale,r_10,h_280,w_450/v1632752254/${src}`
  }
  return (
    <Hero__Section>
      <Hero__Content>
        <Content__Title>
          <h1>SONUSTECH</h1>
          <span> Whereas recognition of the inherent dignity </span>
        </Content__Title>
        <Content__Image>
          <Image
            // loader={cloudinaryImageLoader}
            src={HeroIMG}
            alt="hero image"
            width={500}
            height={500}
            placeholder="blur"
            blurDataURL="data:image/webp;base64,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"

            // width={500}
            // placeholder="blur"
            // priority
          />
        </Content__Image>
      </Hero__Content>
    </Hero__Section>
  )
}

export default Hero
