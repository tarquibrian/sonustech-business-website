"use client"
import Image from "next/image"
import React, { useEffect, useRef, useState } from "react"
import styled from "styled-components"
import gif from "../assets/images/development-lifecycle.gif"
import { featuresData } from "../data/featuresData"
import { AnimatePresence, motion, useInView } from "framer-motion"
import ArrowListIcon from "../components/icons/arrowList"
import PlanningIcon from "../components/icons/planing"
import { useAppContext } from "../contexts/app.context"

const Feaures__Section = styled.section`
  min-height: 600px;
  width: 100%;
  /* gap: 4rem; */
  /* padding: 4rem 0; */
`
const Features__Content = styled.div`
  /* width: 90%; */
  padding: 5rem 0;
  margin: auto;
  height: 100%;
  display: grid;
  grid-template-rows: repeat(2, auto);
  gap: 3rem;
`
const Content__Header = styled.header`
  /* display: grid; */
  /* justify-content: flex-end; */
  /* text-align: end; */
  width: 90%;
  margin: auto;
  h1 {
    font-size: var(--title);
    margin-bottom: 2rem;
  }
  h2 {
    font-size: var(--subtitle);
  }
  p {
    max-width: 750px;
    font-size: var(--description);
    /* background-color: red; */
  }
`

const Content__Features = styled.div`
  display: grid;
  grid-template-columns: minmax(200px, 1fr) 1fr;
  /* justify-content: center; */
  /* align-items: center; */
  .content__side {
    background-color: lightcoral;
    h1 {
      font-size: var(--title-content);
    }
    img {
      border: var(--border) solid ${({ theme }) => theme.colors?.border};
      width: 80%;
      height: auto;
    }
  }
  .content__body {
    background-color: blue;
  }
`

const Feature = styled.div`
  overflow: hidden;
  transition: 0.3s ease;
  border-bottom: 1px solid ${({ theme }) => theme.colors.border};
  /* width: 100%; */
`

const Title = styled.div`
  display: flex;
  /* align-items: center; */
  /* justify-content: space-between; */
  height: 70px;
  width: 100%;
  .icon {
    display: grid;
    grid-template-columns: 50px auto 50px;
    width: 100%;
    align-items: center;
    gap: 1rem;
    stroke: red;
    g {
      stroke: ${({ theme }) => theme.colors?.border};
    }
    span {
      cursor: pointer;
      display: flex;
      align-items: center;
      /* margin-right: 2rem; */
    }
    &:hover {
      cursor: pointer;
    }
  }
`

const Description = styled.div`
  width: 90%;
  padding-bottom: 2rem;
`

const Feaures = () => {
  const [expanded, setExpanded] = useState(false)
  const ref = useRef()
  const isVisible = useInView(ref, { margin: "-200px" })
  const { setNavigation } = useAppContext()

  useEffect(() => {
    if (isVisible) setNavigation("features")
  }, [isVisible])

  return (
    <Feaures__Section ref={ref} id="features">
      <Features__Content>
        <Content__Header>
          <h1>OUR EXPERTICES</h1>
          <h2>CUSTOM SOFTWARE DEVELOPMENT LIFECYCLE</h2>
          <p>
            We employ best practice processes and development methodologies as a
            foundation for rapid building of cutting-edge technology solutions
            in a structured and methodical way.
          </p>
        </Content__Header>

        <Content__Features>
          <div className="content__side">
            <div className="side__gif">
              <h1>LIFECYCLE</h1>
              <Image src={gif} alt="git lifecycle development" />
            </div>
          </div>
          <div className="content__body">
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
          </div>
        </Content__Features>
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
            <motion.span animate={{ rotate: isOpen ? 180 : 0 }}>
              <ArrowListIcon />
            </motion.span>
          </div>
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
