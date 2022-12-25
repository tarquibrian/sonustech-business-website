import React, { useEffect, useRef } from "react"
import styled from "styled-components"
import { competenciesData } from "../data/competenciesData"
import { motion, useInView } from "framer-motion"
import { useAppContext } from "../contexts/app.context"

const Competencies__Section = styled.section`
  min-height: 500px;
  width: 100%;
  margin: auto;
`
const Competencies__Content = styled.div`
  margin: auto;
  padding: 5rem 0;
  width: 90%;
  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: repeat(2, auto);
  gap: 4.5rem;
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
              <Competencie__Card key={i}>
                <div className="card-side">
                  <div className="icon">{svg}</div>
                </div>
                <div className="card-body">
                  <h1>{title}</h1>
                  <p>{description}</p>
                </div>
                {/* <div className="body">{svg}</div> */}
              </Competencie__Card>
            )
          })}
        </Content__Competencies>
      </Competencies__Content>
    </Competencies__Section>
  )
}

export default Competencies
