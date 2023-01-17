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
import hero_banner2 from "../assets/images/hero-banner2.jpg"
import ArrowRight from "src/components/icons/hero/arrow"

const Hero__Section = styled.section`
  height: calc(100vh - 4.9rem);
  width: 100%;
  min-height: 90vh;
  overflow: hidden;
  background: ${({ theme }) => theme.colors?.foreground};
  margin-top: initial;
  /* border-bottom: var(--border) solid ${({ theme }) => theme.colors.body}; */
`

const Hero__Content = styled.div`
  position: relative;
  height: 100%;
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  /* border-bottom-left-radius: 30px; */
  /* border-bottom-right-radius: 30px; */
  background: ${({ theme }) => theme.colors?.body};
  overflow: hidden;
`

const Content__Main = styled.div`
  position: relative;
  /* display: flex; */
  /* align-items: center; */
  /* justify-content: center; */
  grid-column: 1/4;
  height: 100%;
  display: grid;
  grid-template-rows: 5fr 0.6fr 1fr;

  border-right: var(--border) solid ${({ theme }) => theme.colors?.border};
  /* border-right: 2px solid #000; */

  .content__main {
    display: flex;
    flex-direction: column;
    width: 80%;
    margin: auto;
    /* gap: 3rem; */
    /* background-color: lightblue; */

    .content__main-title {
      svg {
        margin-right: 1rem;
        width: 40px;
        height: auto;
      }
      span {
        font-size: var(--subtitle);
      }
      h1 {
        font-family: "Chivo Mono", sans-serif;
        font-size: clamp(3rem, 7vw, 9rem);
        font-weight: 800;
        line-height: 100%;
        u {
          color: #14b19d;
          -webkit-text-stroke: 2px ${({ theme }) => theme.colors?.border};
        }
        margin-bottom: 1rem;
      }
      p {
        font-size: var(--subtitle);
      }
    }

    .btn {
      /* background-color: #000; */
      color: ${({ theme }) => theme.colors?.textNeon};
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
            text-shadow: 0px 0px 4px #41ead4;
            svg {
              filter: drop-shadow(0px 0px 4px #41ead4);
            }
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
    color: ${({ theme }) => theme.colors?.textNeon};
    font-size: var(--title-content);
    /* font-family: "Oswald", sans-serif; */
    font-weight: lighter;
    ul {
      display: flex;
      height: 100%;
      li {
        /* height: 100%; */
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
    font-family: "Raleway", sans-serif;
    font-size: var(--subtitle);
    width: 90%;
    margin-inline: auto;
    display: flex;
    align-items: center;
    p {
      span {
        padding: 0.4rem;
      }
      .reshaping {
        background-color: #c03546;
        color: ${({ theme }) => theme.colors?.body};
      }
      .world {
        background-color: #c03546;
        color: ${({ theme }) => theme.colors?.body};
      }
    }

    /* background-color: ${({ theme }) => theme.colors?.textInverse}; */
    /* grid-row: 4/ 6; */
  }
  /* min-width: 100px; */
  /* max-width: 650px; */
`

const Content__Image = styled.div`
  height: 100%;
  width: 100%;
  /* padding: 2rem; */
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
    margin: "-400px",
  })

  useEffect(() => {
    if (isInView) setNavigation("hero")
  }, [isInView])
  return (
    <Hero__Section id="hero" ref={ref}>
      <Hero__Content>
        <Content__Main>
          <div className="content__main">
            <div className="content__main-title">
              <span>
                <ArrowRight />
                We are
              </span>
              <h1>
                {/* <span>_We are</span> */}
                COLLECTIVE
                <br />
                <u>ENGINEERS</u>
              </h1>
              <p>
                <ArrowRight />
                We dream of reshaping the world.
              </p>
            </div>

            {/* <p>
              Partner with trained professionals to provide you with high-level
              solutions. Always offering you guarantees, quality and safety, all
              accompanied by innovation.
            </p> */}
            {/* <div className="btn">
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
            </div> */}
          </div>
          <div className="content__center">
            <ul>
              <li>DESIGN</li>
              <li>SYSTEMS</li>
              <li>SIMULATION</li>
            </ul>
          </div>
          <div className="content__footer">
            {/* <p>
              We dream of <span className="reshaping">reshaping</span> the{" "}
              <span className="world">world</span>.
            </p> */}
          </div>
        </Content__Main>
        <Content__Image>
          {/* <Image
            src={hero_banner}
            alt="desktop hero img"
            width={800}
            height={"auto"}
          /> */}
          <Carousel
            columns={[
              {
                animationTime: "40s",
                images: [hero_banner, hero_banner2],
              },
              {
                animationTime: "20s",
                images: [hero_banner, hero_banner2],
              },
            ]}

            // aspectRatio={"1/1"}
          />
        </Content__Image>
      </Hero__Content>
    </Hero__Section>
  )
}

export default Hero
