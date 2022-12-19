import Image from "next/image"
import React from "react"
import styled from "styled-components"
import HeroIMG from "../assets/images/hero.jpg"
import Carousel from "../components/carousel"
import WebDev from "../assets/images/webdev.png"
import Link from "next/link"

const Hero__Section = styled.section`
  padding: 5rem 0 0 0;
  height: 90vh;
  width: 100%;
  min-height: 90vh;
  overflow: hidden;

  background: linear-gradient(
    45deg,
    #eff2ef 30%,
    rgba(205, 217, 255, 1) 70%,
    #eff2ef 100%
  );
  background-image: radial-gradient(
    circle farthest-corner at 10% 20%,
    rgba(255, 209, 67, 1) 0%,
    rgba(255, 1, 83, 1) 90%
  );
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
    color: white;
    display: flex;
    align-items: center;
    gap: 1rem;
    /* width: fit-content; */
    a {
      padding: 1rem 1rem 1rem 1.5rem;
      background-color: #000;
      span {
        display: flex;
        align-items: center;
        justify-content: center;
        line-height: 1;
        gap: 0.1rem;
        transition: .3s cubic-bezier(0.075, 0.82, 0.165, 1);
      }
      &:hover {
        span {
          gap: .5rem;
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
      background-color: black;
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
  return (
    <Hero__Section>
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
