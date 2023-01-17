import Image from "next/image"
import React from "react"
import styled from "styled-components"

const Carousel__Container = styled.div`
  padding: 1rem;
  display: grid;
  grid-template-columns: ${({ nColumns }) =>
    nColumns ? `repeat(${nColumns}, 1fr)` : "none"};
  gap: 1rem;
  background-color: ${({ theme }) => theme.colors?.foreground};
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

const Card = styled.figure`
  margin-bottom: 1rem;
  width: 100%;
  aspect-ratio: ${({ aspectRatio }) =>
    aspectRatio ? `auto ${aspectRatio}` : "initial"};
  max-height: calc(100vh - 4.9rem);
  display: flex;
  transition: 0.2s ease;
  box-shadow: rgba(0, 0, 0, 0.5) 0px 3px 6px, rgba(0, 0, 0, 0.5) 0px 3px 6px;
  overflow: hidden;

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
  return (
    <Carousel__Container nColumns={columns.length}>
      {columns.map((item, id) => {
        const { animationTime, images } = item
        return (
          <Container__Column animationTime={animationTime} key={id}>
            {images.map((path, id) => (
              <Card aspectRatio={aspectRatio} key={id}>
                <Image
                  src={path}
                  alt="logo image carousel"
                  placeholder="blur"
                />
              </Card>
            ))}
            {images.map((path, id) => (
              <Card key={id}>
                <Image
                  src={path}
                  alt="logo image carousel"
                  placeholder="blur"
                />
              </Card>
            ))}
          </Container__Column>
        )
      })}
    </Carousel__Container>
  )
}

export default Carousel
