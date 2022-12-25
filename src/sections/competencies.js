import React, { useRef } from "react"
import styled from "styled-components"
import { competenciesData } from "../data/competenciesData"
import { motion } from "framer-motion"

const Competencies__Section = styled.section`
  min-height: 500px;
  width: 100%;
  margin: auto;
`
const Competencies__Content = styled.div`
  margin: 5rem auto;
  width: 90%;
  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: repeat(2, auto);
  gap: 2rem;
`
const Content__Header = styled.header`
  width: 100%;
  margin: auto;
  /* background-color: red; */
`

const Title = styled.div`
  h1 {
    font-size: var(--title);
    margin-bottom: 2rem;
  }
`
const Subtitle = styled.div`
  h2 {
    font-size: var(--subtitle);
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
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  /* grid-template-rows: 1fr 1fr; */
  /* align-items: center; */
  /* justify-content: center; */
  gap: 1rem;
  background-color: lightblue;
`

const Competencie__Card = styled(motion.div)`
  background-color: lightgray;
  /* max-height: 380px; */
  /* max-width: 400px; */
  position: relative;
  width: 100%;
  text-align: center;
  header {
    background-color: red;
    svg {
      height: 170px;
      width: auto;
      object-fit: contain;
    }
  }

  h1 {
    /* padding: 1rem; */
    /* border-bottom: 1px solid ${({ theme }) => theme.colors?.border}; */
  }

  p {
    position: absolute;
    top: 0;
    left: 0;
  }
`

const Competencies = () => {
  const ref = useRef()
  return (
    <Competencies__Section id="competencies" ref={ref}>
      <Competencies__Content>
        <Content__Header>
          <Title>
            <h1>{competenciesData.header.title}</h1>
          </Title>
          <Subtitle>
            <h2>{competenciesData.header.subtitle}</h2>
          </Subtitle>
          <Description>
            <p>{competenciesData.header.description}</p>
          </Description>
        </Content__Header>
        <Content__Competencies
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
              <Competencie__Card
                key={i}
                variants={{
                  hidden: { opacity: 0 },
                  show: { opacity: 1 },
                }}
              >
                <header>
                  <span>{svg}</span>
                  <h1>{title}</h1>
                </header>
                {/* <div className="body">{svg}</div> */}
                {/* <p>{description}</p> */}
              </Competencie__Card>
            )
          })}
        </Content__Competencies>
      </Competencies__Content>
    </Competencies__Section>
  )
}

export default Competencies
