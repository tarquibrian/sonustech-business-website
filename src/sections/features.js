import Image from "next/image"
import React, { useState } from "react"
import styled from "styled-components"
import gif from "../assets/images/development-lifecycle.gif"
import { featuresData } from "../data/featuresData"
import { AnimatePresence, motion } from "framer-motion"
import ArrowListIcon from "../components/icons/arrowList"
import PlanningIcon from "../components/icons/planing"

const Feaures__Section = styled.section`
  min-height: 600px;
  width: 100%;
  display: grid;
  gap: 4rem;
  padding: 4rem 0;
`

const Features__Header = styled.header`
  margin: 0 auto;
  max-width: 950px;
  display: grid;
  align-items: center;
  justify-content: center;
  text-align: center;
  h1 {
    font-size: clamp(20px, 40px, 2.4vw);
  }
  p {
    font-size: clamp(10px, 18px, 3rem);
  }
`

const Features__Content = styled.div`
  display: grid;
  grid-template-columns: repeat(10, 1fr);
  gap: 2rem;
  width: 100%;
  height: 100%;
  min-height: 200px;
`

const ContentGif = styled.div`
  grid-column: 1/7;
  justify-self: center;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: start;
  gap: 2rem;
  max-width: 500px;
  height: 100%;
  img {
    margin: 0 auto;
    width: 100%;
    height: auto;
    object-fit: contain;
  }
`

const ContentFeatures = styled.div`
  grid-column: 7 / -1;
  display: flex;
  flex-direction: column;
  /* gap: 1rem; */
  transition: 0.3 ease;
  /* max-width: 500px; */
`

const Feature = styled.div`
  overflow: hidden;
  transition: 0.3s ease;
  border-bottom: 1px solid ${({ theme }) => theme.colors.border};
  width: 100%;
`

const Title = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: 70px;
  width: 100%;
  .icon {
    display: flex;
    width: 100%;
    align-items: center;
    gap: 1rem;
    h1 {
    }
  }
  span {
    cursor: pointer;
    display: flex;
    align-items: center;
    margin-right: 1rem;
  }
`

const Description = styled.div`
  width: 90%;
  padding-bottom: 2rem;
`

const Feaures = () => {
  const [expanded, setExpanded] = useState(false)

  return (
    <Feaures__Section>
      <Features__Header>
        <h1>CUSTOM SOFTWARE DEVELOPMENT LIFECYCLE</h1>
        <p>
          We employ best practice processes and development methodologies as a
          foundation for rapid building of cutting-edge technology solutions in
          a structured and methodical way.
        </p>
      </Features__Header>
      <Features__Content>
        <ContentGif>
          <h1>LIFECYCLE</h1>
          <Image src={gif} alt="git lifecycle development" />
        </ContentGif>
        <ContentFeatures>
          {featuresData.map((item) => {
            const { id, title, description, svg } = item
            return (
              <Accordion
                i={id}
                title={title}
                description={description}
                expanded={expanded}
                setExpanded={setExpanded}
                key={id}
                svg={svg}
              />
            )
          })}
        </ContentFeatures>
      </Features__Content>
    </Feaures__Section>
  )
}

export default Feaures

const Accordion = ({ i, expanded, setExpanded, title, description, svg }) => {
  const isOpen = i === expanded
  return (
    <Feature>
      <motion.header
        initial={false}
        onClick={() => setExpanded(isOpen ? false : i)}
      >
        <Title>
          <div className="icon">
            {svg}
            <h1>{title}</h1>
          </div>
          <motion.span animate={{ rotate: isOpen ? 180 : 0 }}>
            <ArrowListIcon />
          </motion.span>
        </Title>
      </motion.header>
      <AnimatePresence initial={false}>
        {isOpen && (
          <motion.div
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
          </motion.div>
        )}
      </AnimatePresence>
    </Feature>
  )
}
