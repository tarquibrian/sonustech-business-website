import Image from "next/image"
import React from "react"
import styled, { isStyledComponent } from "styled-components"

// import img1 from "../assets/images/hero.jpg"
import logo from "../assets/images/logo.png"
import img1 from "../assets/images/web1.png"
import img2 from "../assets/images/web2.png"
import img3 from "../assets/images/web3.png"
import img4 from "../assets/images/web4.png"
import img5 from "../assets/images/web5.png"
import img6 from "../assets/images/web6.png"

const Carousel__Container = styled.div`
  padding: 1rem;
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-template-columns: ${({ nColumns }) =>
    nColumns ? `repeat(${nColumns}, 1fr)` : "none"};
  gap: 1rem;
  background-color: ${({ theme }) => theme.colors?.foreground};
  /* box-shadow: inset 0 0 10px ${({ theme }) => theme.colors.foreground}; */
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
  margin-bottom: 1rem;
  border-right: none;
  border-left: none;
  aspect-ratio: ${({ aspectRatio }) =>
    aspectRatio ? `auto ${aspectRatio}` : "initial"};
  max-height: calc(100vh - 4.9rem);
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  overflow: hidden;
  transition: 0.2s ease;
  box-shadow: rgba(0, 0, 0, 0.4) 0px 3px 6px, rgba(0, 0, 0, 0.4) 0px 3px 6px;
  img {
    width: 100%;
    height: auto;
    object-fit: contain;
    transition: 0.2s ease;
  }
  &:hover {
    background-color: ${({ theme }) => theme.colors?.hoverBackground};
    img {
      transform: scale(1.15);
    }
  }
`

const Carousel = ({ columns, aspectRatio }) => {
  console.log(aspectRatio)
  return (
    <Carousel__Container nColumns={columns.length}>
      {columns.map((item) => {
        const { animationTime, images } = item
        return (
          <Container__Column animationTime={animationTime}>
            {images.map((path) => (
              <Card aspectRatio={aspectRatio}>
                <Image
                  src={path}
                  alt="logo image carousel"
                  placeholder="blur"
                />
                {/* <h1>SEO POSITION</h1> */}
              </Card>
            ))}
            {images.map((path) => (
              <Card>
                <Image
                  src={path}
                  alt="logo image carousel"
                  placeholder="blur"
                />
                {/* <h1>SEO POSITION</h1> */}
              </Card>
            ))}
          </Container__Column>
        )
      })}
      {/* <Container__Column animationTime="20s">
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
      </Container__Column> */}

      {/* <Container__Column animationTime="12s">
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
      </Container__Column> */}
      {/* <Image src={img1} alt='card image' width={500} height='auto'/> */}
      {/* <Image src={img1} alt='card image' width={500} height='auto'/> */}
    </Carousel__Container>
  )
}

export default Carousel
