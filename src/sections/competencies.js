import React, { useRef } from "react"
import styled from "styled-components"
import { competenciesData } from "../data/competenciesData"

const Competencies__Section = styled.section``
const Competencies__Content = styled.div``
const Content__Header = styled.header``

const Title = styled.div``
const Subtitle = styled.div``
const Description = styled.div``

const Content__Competencies = styled.div``

const Competencies = () => {
  const ref = useRef()
  return (
    <Competencies__Section id="competencies" ref={ref}>
      <Competencies__Content>
        <Content__Header>
          <Title>{competenciesData.header.title}</Title>
          <Subtitle>{competenciesData.header.subtitle}</Subtitle>
          <Description>{competenciesData.header.description}</Description>
        </Content__Header>
        <Content__Competencies>
          {competenciesData.competencies.map((item) => {
            const { title, description, svg } = item
            return (
              <>
                <h1>{title}</h1>
                <span>{svg}</span>
                <p>{description}</p>
              </>
            )
          })}
        </Content__Competencies>
      </Competencies__Content>
    </Competencies__Section>
  )
}

export default Competencies
