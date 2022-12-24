import React, { useRef } from "react"
import styled from "styled-components"
import { competenciesData } from "../data/competenciesData"

const Competencies__Section = styled.section`
  min-height: 500px;
  width: 100%;
`
const Competencies__Content = styled.div`
  margin: 0 auto;
  /* width: 90%; */
  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: 400px auto;
`
const Content__Header = styled.header`
  /* height: 100%; */
  /* min-height: 300px; */
  width: 90%;
  margin: auto;
  /* margin: 3rem; */
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
    /* margin-bottom: 1rem; */
    /* font-size: 1rem; */
  }
`
const Description = styled.div`
  max-width: 700px;
  font-size: var(--description);
`

const Content__Competencies = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-template-rows: 1fr 1fr;
  /* gap: rem; */
  svg {
    height: 170px;
    width: auto;
    object-fit: contain;
  }
  /* background-color: lightblue; */
`

const Competencie__Card = styled.div`
  /* background-color: lightgray; */
  max-height: 380px;
  position: relative;
  width: 100%;
  text-align: center;

  h1 {
    padding: 1rem;
    border-bottom: 1px solid ${({ theme }) => theme.colors?.border};
  }

  .body {
    height: 300px;
    width: 100%;
    svg {
      padding: 2rem 0;
      width: 100%;
      height: 100%;
      object-fit: contain;
    }
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
        <Content__Competencies>
          {competenciesData.competencies.map((item, i) => {
            const { title, description, svg } = item
            return (
              <Competencie__Card key={i}>
                <h1>{title}</h1>
                <div className="body">{svg}</div>
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
