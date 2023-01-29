import React, { useEffect, useRef } from "react"
import styled from "styled-components"
import { competenciesData } from "../data/competenciesData"
import { motion, useInView } from "framer-motion"
import { useAppContext } from "../contexts/app.context"
import StarIcon from "../components/icons/competencies/star"
import Slider from "src/components/slider"

const Competencies__Section = styled.section`
  /* min-height: 500px; */
  position: relative;
  width: 100%;
  height: 100%;
  border-bottom: var(--border) solid ${({ theme }) => theme.colors.bodyInverse};
  /* display: grid; */
`

const Competencies__Content = styled.div`
  display: grid;
  position: relative;
  overflow: hidden;
`

const Content__Header = styled.header`
  width: 100%;
  margin: auto;
  /* background-color: red; */
`

const Title = styled.div`
  h1 {
    font-size: var(--title);
    margin-bottom: 3rem;
    display: flex;
    align-items: center;
    gap: 3rem;
    span {
      font-family: "Cormorant", sans-serif;
      font-weight: bold;
      font-style: italic;
      border: 2px solid ${({ theme }) => theme.colors?.border};
      /* border-radius: 20px; */
      padding: 0.5rem 1.5rem 0.5rem 1rem;
      background: linear-gradient(
        135deg,
        rgba(157, 145, 138, 1) 0%,
        rgba(190, 180, 172, 1) 100%
      );
      display: flex;
      align-items: center;
      gap: 0.5rem;
      width: fit-content;
      position: relative;
      transition: 0.2s ease;
      svg {
        width: 50px;
        height: 50px;
      }
      &:hover {
        box-shadow: 8px 8px ${({ theme }) => theme.colors?.border};
        transform: translate(-8px, -8px);
      }
    }
  }
`
const Subtitle = styled.div`
  h2 {
    font-size: var(--subtitle);
    margin-bottom: 0.8rem;
  }
`
const Description = styled.div`
  max-width: 700px;
  font-size: var(--description);
`

const Content__Competencies = styled(motion.div)`
  width: 100%;
  margin: auto;
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(400px, auto));
  gap: 4rem;
`

const Competencie__Card = styled(motion.div)`
  display: grid;
  grid-template-columns: 100px auto;
  gap: 3rem;
  .card-side {
    .icon {
      width: 100%;
      height: 100px;
      background-color: #fff;
      border-radius: 100%;
      border: var(--border) solid ${({ theme }) => theme.colors?.border};
      overflow: hidden;
      svg {
        height: 100%;
        width: 100%;
      }
    }
  }
  .card-body {
    display: flex;
    flex-direction: column;
    gap: 1rem;
    h1 {
      font-size: var(--title-content);
    }
    p {
      font-size: var(--description);
    }
  }
`

const Competencies__Slider = styled.div`
  width: 100%;
  overflow: hidden;
  /* margin: auto; */
  /* display: grid; */
`
const settings = {
  dots: true,
  infinite: true,
  speed: 500,
  slidesToShow: 1,
  slidesToScroll: 1,
}
const Competencies = () => {
  const ref = useRef()
  const isVisible = useInView(ref, { margin: "-200px" })
  const { setNavigation } = useAppContext()
  useEffect(() => {
    if (isVisible) {
      setNavigation("competencies")
    }
  }, [isVisible])
  return (
    <Competencies__Section id="competencies" ref={ref}>
      <Competencies__Content>
        <Content__Header>
          <Title>
            <h1>
              {competenciesData.header.title.preTitle}
              <span>
                <StarIcon />
                {competenciesData.header.title.postTitle}
              </span>
            </h1>
          </Title>
          <Subtitle>
            <h2>{competenciesData.header.subtitle}</h2>
          </Subtitle>
          <Description>
            <p>{competenciesData.header.description}</p>
          </Description>
        </Content__Header>
        <Competencies__Slider>
          <h1>carousel</h1>
          <Slider />
        </Competencies__Slider>
        {/* <Content__Competencies
          variants={{
            hidden: { opacity: 0 },
            show: {
              opacity: 1,
              transition: {
                staggerChildren: 0.5,
              },
            },
          }}
        >
          {competenciesData.competencies.map((item, i) => {
            const { title, description, svg } = item
            return (
              <Competencie__Card key={i}>
                <div className="card-side">
                  <div className="icon">{svg}</div>
                </div>
                <div className="card-body">
                  <h1>{title}</h1>
                  <p>{description}</p>
                </div>
              </Competencie__Card>
            )
          })}
        </Content__Competencies> */}
      </Competencies__Content>
    </Competencies__Section>
  )
}

export default Competencies
