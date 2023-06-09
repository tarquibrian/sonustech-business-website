"use client"
import { useInView } from "framer-motion"
import Image from "next/image"
import React, { useEffect, useRef } from "react"
import styled from "styled-components"
import { useAppContext } from "../contexts/app.context"
import { servicesData } from "../data/servicesData"

const Services__Section = styled.section`
  width: 100%;
  background-color: ${({ theme }) => theme.colors.body};
  color: ${({ theme }) => theme.colors.text};
  border-bottom: var(--border) solid ${({ theme }) => theme.colors.border};
`

const Services__Content = styled.div`
  height: 100%;
  width: 100%;
  display: grid;
  grid-template-columns: 2fr 3fr;

  .content__information {
    align-items: center;
    width: 100%;
    height: 100%;
    border-right: var(--border) solid ${({ theme }) => theme.colors?.border};
    position: relative;
    backdrop-filter: blur(10px);

    .content__information-card {
      position: sticky;
      top: 4rem;
      display: grid;
      gap: 1rem;
      z-index: 9;
      padding: 2rem 5% 3rem;

      .tk-blob {
        position: absolute;
        top: 10%;
        right: 10%;
        width: 250px;
        height: auto;
        z-index: 0;
        fill: #41ead4;
      }
      .content__info {
        z-index: 999;
        backdrop-filter: blur(15px);
        /* background-color: ${({ theme }) =>
          theme.colors?.backgroundHeader}; */

        h1 {
          font-size: var(--title-header);
          font-family: var(--font-oswald);
          font-weight: lighter;
          margin-bottom: 2rem;
        }
        h2 {
          font-size: var(--subtitle);
          margin-bottom: 0.5rem;
        }
        p {
          font-size: var(--description);
        }
      }

      @media screen and (max-width: 800px) {
        position: initial;
      }
    }
  }

  .content__body {
    /* height: 100%; */
    display: grid;
    .content__body-header {
      border-bottom: var(--border) solid ${({ theme }) => theme.colors.border};
    }
    .content__body-list {
      display: grid;
      /* grid-template-columns: repeat(auto-fill, minmax(100px, 1fr)); */
      /* grid-template-rows: 1fr 1fr; */
      width: 100%;
      height: 100%;
    }
  }
  @media screen and (max-width: 1400px) {
    .content__body-list {
      /* grid-template-columns: repeat(2, 1fr); */
      /* grid-template-rows: repeat(3, 1fr); */
    }
  }
  @media screen and (max-width: 1080px) {
    grid-template-columns: 1fr;
    .content__information {
      border-right: none;
    }
    .content__body-list {
      border-top: var(--border) solid ${({ theme }) => theme.colors.border};
    }
  }
  @media screen and (max-width: 768px) {
    .content__body-list {
    }
  }

  @media screen and (max-width: 480px) {
    .content__body-list {
      /* grid-template-columns: 1fr; */
    }
  }
`

const Card = styled.div`
  position: relative;
  width: 100%;
  height: 100%;
  min-height: 400px;
  max-height: 480px;
  /* aspect-ratio: 2/3; */
  border-right: var(--border) solid ${({ theme }) => theme.colors?.border};
  border-bottom: ${({ element, theme }) =>
    element <= 5 ? `var(--border) solid ${theme.colors?.border}` : "none"};
  display: flex;
  flex-direction: column;
  position: relative;
  overflow: hidden;
  transition: 0.3s ease;
  @media screen and (max-width: 1080px) {
    border-bottom: ${({ element, theme }) =>
      element <= 3 ? `var(--border) solid ${theme.colors?.border}` : "none"};
  }
  @media screen and (max-width: 480px) {
    border-right: none;
    border-bottom: ${({ element, theme }) =>
      element <= 5 ? `var(--border) solid ${theme.colors?.border}` : "none"};
  }
`
const HeadCard = styled.header`
  position: absolute;
  top: 0;
  left: 0;
  z-index: 9;
  width: 100%;
  padding: 0 1rem;
  height: 3rem;
  font-size: var(--title-card);
  min-height: 50px;
  display: grid;
  align-items: center;
  justify-content: start;
  border-bottom: var(--border) solid ${({ theme }) => theme.colors.border};
  backdrop-filter: blur(7px);
  background-color: ${({ theme }) => theme.colors.backgroundHeader};
  /* color: ${({ theme }) => theme.colors?.textNeon}; */
  h1 {
    font-weight: bold;
    /* align-items: center; */
    display: flex;
    align-items: center;
    gap: 0.5rem;
    /* text-shadow: 0px 0px 4px rgba(0, 0, 0, 0.8); */
  }
`

const Overlay = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  height: 100%;
  width: 100%;
  padding: 0 2rem;
  padding-top: 3rem;
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 1rem;
  .overlay__image {
    /* display: grid; */
    /* place-content: center; */
    img {
      width: 100%;
      height: auto;
    }
  }
  .overlay__content {
    display: grid;
    place-content: center;
    gap: 1rem;
  }

  button {
    border-radius: 2px;
    padding: 0.5rem 1rem;
    width: fit-content;
    display: flex;
    gap: 0.4rem;
    transition: 0.2s ease;
    &:hover {
      gap: 0.7rem;
    }
  }
  p {
    font-size: var(--description);
  }

  transform: translateX(110%);
  transition: 0.3s ease;
  @media screen and (max-width: 600px) {
    grid-template-columns: 1fr;
    .overlay__image {
      height: fit-content;
      max-width: 200px;
      margin: auto;
      img {
        background-color: blue;
      }
    }
  }
`
const BodyCard = styled.div`
  display: flex;
  width: 100%;
  height: 100%;
  border-radius: 10px;
  position: relative;
  transition: 0.3 ease;
  .front-image {
    height: 100%;
    width: 100%;
    object-fit: cover;
    transform: translateX(0%);
    transition: 0.3s ease;
  }
  &:hover {
    .front-image {
      transform: translateX(-110%);
    }
    ${Overlay} {
      transform: translateX(0%);
    }
  }
`
const Services = () => {
  const ref = useRef()
  const isVisible = useInView(ref, { margin: "-300px" })
  const { setNavigation } = useAppContext()

  useEffect(() => {
    if (isVisible) setNavigation("services")
  }, [isVisible])

  return (
    <Services__Section id="services" ref={ref}>
      <Services__Content>
        <div className="content__information">
          <div className="content__information-card">
            <div className="content__info">
              <h1>Our Services ✦</h1>
              <h2>Who we are?</h2>
              <p>
                We are a digital transformation consultancy and software
                development company that provides cutting edge engineering
                solutions, helping Fortune 500 companies and enterprise clients
                untangle complex issues that always emerge during their digital
                evolution journey. Since 2007 we have been a visionary and a
                reliable software engineering partner for world-class brands.
              </p>
            </div>
          </div>
        </div>
        <div className="content__body">
          <div className="content__body-list">
            {servicesData.map((item) => {
              const { title, description, image, frontImage, id } = item
              return (
                <Card key={id} element={id}>
                  <HeadCard>
                    <h1>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        strokeWidth="2"
                        stroke="currentColor"
                        fill="none"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      >
                        <path
                          stroke="none"
                          d="M0 0h24v24H0z"
                          fill="none"
                        ></path>
                        <path d="M12 12m-4 0a4 4 0 1 0 8 0a4 4 0 1 0 -8 0"></path>
                      </svg>
                      {title}{" "}
                      {/* <svg
                        xmlns="http://www.w3.org/2000/svg"
                        class="icon icon-tabler icon-tabler-arrow-narrow-down"
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        stroke-width="2"
                        stroke="currentColor"
                        fill="none"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      >
                        <path
                          stroke="none"
                          d="M0 0h24v24H0z"
                          fill="none"
                        ></path>
                        <path d="M12 5l0 14"></path>
                        <path d="M16 15l-4 4"></path>
                        <path d="M8 15l4 4"></path>
                      </svg> */}
                    </h1>
                  </HeadCard>
                  <BodyCard>
                    <Image
                      src={frontImage}
                      alt={title}
                      width={1000}
                      height={`auto`}
                      className="front-image"
                    />
                    <Overlay>
                      <div className="overlay__image">
                        <Image
                          src={image}
                          alt={title}
                          width={500}
                          height={`auto`}
                        />
                      </div>
                      <div className="overlay__content">
                        <p>{description}</p>
                        <button>
                          View More <span>{">"}</span>
                        </button>
                      </div>
                    </Overlay>
                  </BodyCard>
                </Card>
              )
            })}
          </div>
        </div>
      </Services__Content>
    </Services__Section>
  )
}

export default Services
