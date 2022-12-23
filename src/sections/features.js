import Image from "next/image"
import React from "react"
import styled from "styled-components"
import gif from "../assets/images/development-lifecycle.gif"
import { featuresData } from "../data/featuresData"

const Feaures__Section = styled.section``

const Features__Content = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
`

const ContentGif = styled.div``

const ContentFeatures = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  transition: 0.3 ease;
`

const Feature = styled.div`
  background-color: lightgoldenrodyellow;
  /* display: flex; */
  /* flex-direction: column; */
  gap: 1rem;
  height: 60px;
  overflow: hidden;
  transition: 0.3s ease;
`

const Title = styled.header`
  display: flex;
  align-items: center;
  background-color: lightpink;
  height: 60px;
  border-bottom: 1px solid #000;
`

const Description = styled.div``

const Feaures = () => {
  return (
    <Feaures__Section>
      <Features__Content>
        <ContentGif>
          <Image src={gif} alt="git lifecycle development" />
        </ContentGif>
        <ContentFeatures>
          {featuresData.map((item) => {
            const { id, title, description } = item
            return (
              <Feature key={id}>
                <Title>
                  <h1>{title}</h1>
                </Title>
                <Description>
                  <p>{description}</p>
                </Description>
              </Feature>
            )
          })}
        </ContentFeatures>
      </Features__Content>
    </Feaures__Section>
  )
}

export default Feaures
