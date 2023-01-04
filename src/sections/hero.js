import Image from "next/image"
import React, { use, useEffect, useRef } from "react"
import styled from "styled-components"
import HeroIMG from "../assets/images/hero.jpg"
import Carousel from "../components/carousel"
import WebDev from "../assets/images/webdev.png"
import Link from "next/link"
import { useInView } from "framer-motion"
import { useAppContext } from "../contexts/app.context"
import desktop from "../assets/images/desktop.png"
import hero_banner from "../assets/images/hero-banner.jpg"

const Hero__Section = styled.section`
  height: calc(100vh - 4.9rem);
  width: 100%;
  min-height: 90vh;
  overflow: hidden;
  background-image: ${({ theme }) => theme.colors?.heroBackground};
`

const Hero__Content = styled.div`
  position: relative;
  height: 100%;
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  /* overflow: hidden; */
`

const Content__Title = styled.div`
  position: relative;
  /* display: flex; */
  /* align-items: center; */
  /* justify-content: center; */
  grid-column: 1/4;
  height: 100%;
  display: grid;
  grid-template-rows: 5fr 0.6fr 1fr;

  border-right: var(--border) solid ${({ theme }) => theme.colors?.border};

  .content__main {
    display: flex;
    flex-direction: column;
    width: 80%;
    margin: auto;
    gap: 3rem;

    /* align-items: ; */
    /* justify-content: space-between; */
    h1 {
      font-family: "Oswald", sans-serif;
      font-size: clamp(1rem, 5vw, 5rem);
      font-weight: 600;
      /* line-height: 5rem; */
      p {
        font-size: 1.2rem;
        line-height: 1.5;
      }
    }
    .btn {
      /* background-color: #000; */
      color: ${({ theme }) => theme.colors?.textInverse};
      display: flex;
      align-items: center;
      gap: 1rem;
      /* width: fit-content; */
      a {
        padding: 1rem 1rem 1rem 1.5rem;
        background-color: ${({ theme }) => theme.colors?.foreground};
        span {
          display: flex;
          align-items: center;
          justify-content: center;
          line-height: 1;
          gap: 0.1rem;
          transition: 0.3s cubic-bezier(0.075, 0.82, 0.165, 1);
        }
        &:hover {
          span {
            gap: 0.8rem;
          }
        }
      }
      &::after {
        content: "";
        display: block;
        width: 0px;
        height: 1px;
        top: 0;
        left: 0;
        background-color: ${({ theme }) => theme.colors?.border};
        transition: 0.3s ease;
      }
      &:hover {
        &::after {
          width: 75%;
        }
      }
    }
  }
  .content__center {
    background-color: ${({ theme }) => theme.colors?.foreground};
    color: ${({ theme }) => theme.colors?.textInverse};
    font-size: var(--title-content);
    /* font-family: "Oswald", sans-serif; */
    font-weight: lighter;

    ul {
      display: flex;
      height: 100%;
      li {
        width: 100%;
        margin: auto;
        text-align: center;
        border-right: var(--border) solid ${({ theme }) => theme.colors?.border};
        text-shadow: 0px 0px 4px #41ead4;
        &:last-child {
          border: initial;
        }
      }
    }
  }
  .content__footer {
    grid-column: 1/-1;
    /* background-color: ${({ theme }) => theme.colors?.textInverse}; */
    /* grid-row: 4/ 6; */
  }
  /* min-width: 100px; */
  /* max-width: 650px; */
`

const Content__Image = styled.div`
  height: 100%;
  width: 100%;
  overflow: hidden;
  grid-column: 4/6;
  /* border-left: var(--border) solid ${({ theme }) => theme.colors?.border}; */
  img {
    width: 100%;
    object-fit: cover;
  }
`

const Hero = () => {
  const ref = useRef()
  const { setNavigation } = useAppContext()

  const isInView = useInView(ref, {
    margin: "-200px",
  })

  useEffect(() => {
    if (isInView) setNavigation("hero")
  }, [isInView])
  return (
    <Hero__Section id="hero" ref={ref}>
      <Hero__Content>
        <Content__Title>
          <div className="content__main">
            <h1>
              Reshaping The <span>WORLD..</span>
            </h1>
            <p>
              Partner with trained professionals to provide you with high-level
              solutions. Always offering you guarantees, quality and safety, all
              accompanied by innovation.
            </p>
            <div className="btn">
              <Link href={`/contact`}>
                <span>
                  Contact
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
                    <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
                    <polyline points="9 6 15 12 9 18"></polyline>
                  </svg>
                </span>
              </Link>
            </div>
          </div>
          <div className="content__center">
            <ul>
              <li>DESIGN</li>
              <li>SYSTEMS</li>
              <li>SIMULATION</li>
            </ul>
          </div>
          <div className="content__footer"></div>
        </Content__Title>
        <Content__Image>
          <Image
            src={hero_banner}
            alt="desktop hero img"
            width={800}
            // height={900}
          />
        </Content__Image>
      </Hero__Content>
    </Hero__Section>
  )
}

export default Hero
