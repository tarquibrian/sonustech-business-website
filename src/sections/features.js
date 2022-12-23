import Image from "next/image"
import React, { useState } from "react"
import styled from "styled-components"
import gif from "../assets/images/development-lifecycle.gif"
import { featuresData } from "../data/featuresData"
import { AnimatePresence, motion } from "framer-motion"

const Feaures__Section = styled.section``

const Features__Content = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
`

const ContentGif = styled.div``

const ContentFeatures = styled.div`
  display: flex;
  flex-direction: column;
  /* gap: 1rem; */
  transition: 0.3 ease;
`

const Feature = styled.div`
  /* display: flex; */
  /* flex-direction: column; */
  gap: 1rem;
  overflow: hidden;
  /* border-top: 1px solid #000; */
  /* border-bottom: 1px solid #000; */
  transition: 0.3s ease;
`

const Title = styled.header`
  display: flex;
  align-items: center;
  height: 60px;
`

const Description = styled.div`
  padding: 1rem 0;
`

const Feaures = () => {
  const [expanded, setExpanded] = useState(false)

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
              <Accordion
                i={id}
                title={title}
                description={description}
                expanded={expanded}
                setExpanded={setExpanded}
                key={id}
              />
            )
          })}
        </ContentFeatures>
      </Features__Content>
    </Feaures__Section>
  )
}

export default Feaures

const Accordion = ({ i, expanded, setExpanded, title, description }) => {
  const isOpen = i === expanded
  return (
    <Feature>
      <motion.header
        initial={false}
        // animate={{ backgroundColor: isOpen ? "#FF0088" : "#0055FF" }}
        onClick={() => setExpanded(isOpen ? false : i)}
      >
        <Title>
          <h1>{title}</h1>
        </Title>
      </motion.header>
      <AnimatePresence initial={false}>
        {isOpen && (
          <motion.section
            key="content"
            initial="collapsed"
            animate="open"
            exit="collapsed"
            variants={{
              open: { opacity: 1, height: "auto" },
              collapsed: { opacity: 0, height: 0 },
            }}
            transition={{ duration: 0.8, ease: [0.04, 0.62, 0.23, 0.98] }}
          >
            <Description>
              <p>{description}</p>
            </Description>
          </motion.section>
        )}
      </AnimatePresence>
    </Feature>
  )
}
