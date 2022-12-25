import Image from "next/image"
import React, { use, useEffect, useRef } from "react"
import styled from "styled-components"
import HeroIMG from "../assets/images/hero.jpg"
import Carousel from "../components/carousel"
import WebDev from "../assets/images/webdev.png"
import Link from "next/link"
import { useInView } from "framer-motion"
import { useAppContext } from "../contexts/app.context"

const Hero__Section = styled.section`
  padding: 5rem 0 0 0;
  height: 100vh;
  width: 100%;
  min-height: 90vh;
  overflow: hidden;

  /* background-image: radial-gradient(
    circle farthest-corner at 10% 20%,
    rgba(255, 209, 67, 1) 0%,
    rgba(255, 1, 83, 1) 90%
  ); */
  /* background-image: radial-gradient(
    circle farthest-corner at 1.3% 2.8%,
    rgba(239, 249, 249, 1) 0%,
    rgba(182, 199, 226, 1) 100.2%
  ); */
  /* background-image: radial-gradient(
    circle farthest-corner at 10% 20%,
    rgba(215, 223, 252, 1) 0%,
    rgba(255, 255, 255, 1) 0%,
    rgba(215, 223, 252, 1) 84%
  ); */
  background-image: ${({ theme }) => theme.colors?.heroBackground};
  /* background-image: radial-gradient(
    circle farthest-corner at 10% 20%,
    rgba(90, 92, 106, 1) 0%,
    rgba(32, 45, 58, 1) 81.3%
  ); */
  /* background-image: radial-gradient(
    circle farthest-corner at 10% 20%,
    rgba(69, 86, 102, 1) 0%,
    rgba(34, 34, 34, 1) 90%
  ); */
  /* background-image: radial-gradient(
    circle farthest-corner at 10% 20%,
    rgba(255, 246, 236, 1) 39.5%,
    rgba(100, 46, 122, 0.23) 100.2%
  ); */
  /* background-image: linear-gradient(
    109.6deg,
    rgba(245, 239, 249, 1) 30.1%,
    rgba(207, 211, 236, 1) 100.2%
  ); */
  /* color:white; */
`

const Hero__Content = styled.div`
  height: 100%;
  /* width: 90%; */
  margin: 0 auto;
  position: relative;
  display: grid;
  grid-template-columns: 1.2fr 1fr;
  gap: 2rem;
  overflow: hidden;
  /* justify-content: center; */
  /* align-items: center; */
  /* justify-items: center; */
`

const Content__Title = styled.div`
  display: grid;
  place-content: center;
  justify-self: center;
  gap: 2rem;
  min-width: 100px;
  max-width: 650px;
  h1 {
    font-size: clamp(1rem, 5vw, 5rem);
    font-weight: 600;
    /* line-height: 5rem; */
  }
  p {
    font-size: 1.2rem;
    line-height: 1.5;
  }
  .btn {
    /* background-color: #000; */
    color: ${({ theme }) => theme.colors?.background};
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
        width: 70%;
      }
    }
  }
`

const Content__Image = styled.div`
  /* justify-self: start; */
  /* display: grid; */
  /* max-width: 700px;  */
  height: 100%;
  width: 100%;
  overflow: hidden;
  /* img {
    width: 100%;
    height: auto;
    object-fit: cover;
  } */
  &::before {
    content: "";
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
          <h1>
            RESHAPING THE <span>WORLD..</span>
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
        </Content__Title>
        <Content__Image>
          {/* <Image
            src={WebDev}
            alt="hero image"
            width={600}
            height="auto"
            // height={500}
            // placeholder="blur"
            priority
          /> */}
          <Carousel />
        </Content__Image>
      </Hero__Content>
    </Hero__Section>
  )
}

export default Hero
