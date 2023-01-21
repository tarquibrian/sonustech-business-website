import { useInView } from "framer-motion"
import Image from "next/image"
import React, { useEffect, useRef } from "react"
import styled from "styled-components"
import { useAppContext } from "../contexts/app.context"
import { servicesData } from "../data/servicesData"

const Services__Section = styled.section`
  /* padding: 7rem 0; */
  /* min-height: 900px; */
  width: 100%;
  background-color: ${({ theme }) => theme.colors.body};
  color: ${({ theme }) => theme.colors.text};
  border-bottom: var(--border) solid ${({ theme }) => theme.colors.bodyInverse};
`

const Services__Content = styled.div`
  height: 100%;
  /* min-height: 100vh; */
  width: 100%;
  display: grid;
  grid-template-columns: 2fr 3fr;

  .content__information {
    align-items: center;
    width: 100%;
    height: 100%;
    border-right: var(--border) solid ${({ theme }) => theme.colors.border};
    padding: 0 5%;
    /* background-color: red; */
    .content__information-card {
      position: sticky;
      top: 5rem;
      display: grid;
      gap: 1rem;
      h1 {
        font-size: var(--title);
        font-family: "Cormorant";
        font-style: italic;
        font-weight: 400;
      }
      h2 {
        font-size: var(--subtitle);
      }
      p {
        font-size: var(--description);
      }
      @media screen and (max-width: 800px) {
        position: initial;
      }
    }
  }

  .content__body {
    height: 100%;
    display: grid;
    /* border-bottom: var(--border) solid ${({ theme }) =>
      theme.colors?.border}; */
    /* border-top: var(--border) solid ${({ theme }) =>
      theme.colors?.border}; */
    .content__body-header {
      border-bottom: var(--border) solid ${({ theme }) => theme.colors.border};
      /* height: 3.5rem; */
    }
    .content__body-list {
      display: grid;
      grid-template-columns: repeat(3, 1fr);
      grid-template-rows: 1fr 1fr;
      width: 100%;
      height: 100%;
    }
  }
  @media screen and (max-width: 1400px) {
    .content__body-list {
      grid-template-columns: repeat(2, 1fr);
      grid-template-rows: repeat(3, 1fr);
    }
  }
  @media screen and (max-width: 1080px) {
    grid-template-columns: 1fr;
    .content__information {
      /* border-bottom: var(--border) solid
        ${({ theme }) => theme.colors.borderInverse}; */
      border-right: none;
    }
    .content__body-list {
      border-top: var(--border) solid ${({ theme }) => theme.colors.border};
    }
  }

  @media screen and (max-width: 480px) {
    .content__body-list {
      grid-template-columns: 1fr;
    }
  }
`

const Card = styled.div`
  width: 100%;
  height: 100%;
  border-right: var(--border) solid ${({ theme }) => theme.colors?.border};
  border-bottom: ${({ element, theme }) =>
    element <= 3 ? `var(--border) solid ${theme.colors?.border}` : "none"};
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
  padding: 0 2rem;
  font-size: var(--title-card);
  min-height: 50px;
  display: grid;
  align-items: center;
  justify-content: start;
  border-bottom: 1px solid ${({ theme }) => theme.colors.border};
`

const Overlay = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  height: 100%;
  width: 100%;
  padding: 2rem;
  display: flex;
  flex-direction: column;
  gap: 1rem;
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
  P {
    font-size: var(--description);
  }

  transform: translateX(110%);
  transition: 0.3s ease;
`
const BodyCard = styled.div`
  display: flex;
  width: 100%;
  /* min-height: 200px; */
  height: 100%;
  border-radius: 10px;
  position: relative;
  transition: 0.3 ease;
  img {
    height: auto;
    width: 100%;
    object-fit: contain;
    transform: translateX(0%);
    transition: 0.3s ease;
  }
  &:hover {
    img {
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
            <h1>Our Services</h1>
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
        <div className="content__body">
          {/* <div className="content__body-header">
            <h1>Services</h1>
          </div> */}
          <div className="content__body-list">
            {servicesData.map((item) => {
              const { title, description, image, id } = item
              return (
                <Card key={id} element={id}>
                  <HeadCard>
                    <h1>{title}</h1>
                  </HeadCard>
                  <BodyCard>
                    <Image src={image} alt={title} />
                    <Overlay>
                      <p>{description}</p>
                      <button>
                        View More <span>{">"}</span>
                      </button>
                    </Overlay>
                  </BodyCard>
                </Card>
              )
            })}
          </div>
        </div>

        {/* <div className="content-bottom">
          {servicesData.map((item) => {
            const { title, description, image, id } = item
            if (id <= 3)
              return (
                <Card key={id}>
                  <HeadCard>
                    <h1>{title}</h1>
                  </HeadCard>
                  <BodyCard>
                    <Image src={image} alt={title} />
                    <Overlay>
                      <p>{description}</p>
                    </Overlay>
                  </BodyCard>
                </Card>
              )
          })}
        </div> */}
      </Services__Content>
    </Services__Section>
  )
}

export default Services
