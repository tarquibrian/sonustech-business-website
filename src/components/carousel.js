import Image from "next/image"
import React from "react"
import styled from "styled-components"

// import img1 from "../assets/images/hero.jpg"
import logo from "../assets/images/logo.png"
import img1 from "../assets/images/web1.png"
import img2 from "../assets/images/web2.png"
import img3 from "../assets/images/web3.png"
import img4 from "../assets/images/web4.png"
import img5 from "../assets/images/web5.png"
import img6 from "../assets/images/web6.png"

const Carousel__Container = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
`

const Container__Column = styled.div`
  display: flex;
  flex-direction: column;
  animation: slide1 ${({ animationTime }) => animationTime} linear infinite;

  @keyframes slide1 {
    0% {
      transform: translate3d(0, 0%, 0);
    }
    100% {
      transform: translate3d(0, -50%, 0);
    }
    /* 100% {
    transform: translate3d(0, 0, 0);
  } */
  }
`

const Card = styled.div`
  width: 100%;
  border: 1px solid #000;
  border-bottom: none;
  border-right: none;
  height: 450px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 1rem;
  img {
    width: 100%;
    height: auto;
    object-fit: contain;
    /* background-color: white; */
  }
  h1 {
    /* background-color: lightgreen; */
  }
  &:hover {
    background-color: rgba(255, 255, 255, 0.4);
  }
`

const Carousel = () => {
  return (
    <Carousel__Container>
      <Container__Column animationTime="20s">
        <Card>
          <Image src={img1} alt="logo image carousel" />
          <h1>SEO POSITION</h1>
        </Card>
        <Card>
          <Image src={img2} alt="logo image carousel" />
          <h1>SEO POSITION</h1>
        </Card>
        <Card>
          <Image src={img3} alt="logo image carousel" />
          <h1>SEO POSITION</h1>
        </Card>
        {/* REPEAT */}
        <Card>
          <Image src={img1} alt="logo image carousel" />
          <h1>SEO POSITION</h1>
        </Card>
        <Card>
          <Image src={img2} alt="logo image carousel" />
          <h1>SEO POSITION</h1>
        </Card>
        <Card>
          <Image src={img3} alt="logo image carousel" />
          <h1>SEO POSITION</h1>
        </Card>
      </Container__Column>
      <Container__Column animationTime="12s">
        <Card>
          <Image
            src={img4}
            width={500}
            height="auto"
            alt="logos image carousel"
          />
          <h1>CONSULTORING</h1>
        </Card>
        <Card>
          <Image
            src={img5}
            width={500}
            height="auto"
            alt="logo idmage carousel"
          />
          <h1>CONSULTORING</h1>
        </Card>
        <Card>
          <Image
            src={img6}
            width={500}
            height="auto"
            alt="logo idmage carousel"
          />
          <h1>CONSULTORING</h1>
        </Card>
        {/* REPEAT */}
        <Card>
          <Image
            src={img4}
            width={500}
            height="auto"
            alt="logos image carousel"
          />
          <h1>CONSULTORING</h1>
        </Card>
        <Card>
          <Image
            src={img5}
            width={500}
            height="auto"
            alt="logo idmage carousel"
          />
          <h1>CONSULTORING</h1>
        </Card>
        <Card>
          <Image
            src={img6}
            width={500}
            height="auto"
            alt="logo idmage carousel"
          />
          <h1>CONSULTORING</h1>
        </Card>
      </Container__Column>
      {/* <Image src={img1} alt='card image' width={500} height='auto'/> */}
      {/* <Image src={img1} alt='card image' width={500} height='auto'/> */}
    </Carousel__Container>
  )
}

export default Carousel
