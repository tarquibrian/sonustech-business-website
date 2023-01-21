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
  padding: 7rem 0;
  width: 100%;
  height: 100%;
  background-color: ${({ theme }) => theme.colors?.body};
  color: ${({ theme }) => theme.colors?.text};
  border-bottom: var(--border) solid ${({ theme }) => theme.colors.bodyInverse};
`
const Features__Content = styled.div`
  height: 100%;
  display: grid;
  gap: 4rem;

  @media screen and (max-width: 1080px) {
    background-color: red;
    grid-template-columns: initial;
  }
`

const Content__Main = styled.div`
  display: grid;
  .content__main-header {
    width: 90%;
    margin: 0 auto;
    height: fit-content;
    position: sticky;
    top: 0;
    left: 0;
    h1 {
      font-size: var(--title);
      margin-bottom: 2rem;
      line-height: 70%;
    }
    h2 {
      font-size: var(--subtitle);
    }
    p {
      max-width: 750px;
      font-size: var(--description);
    }
  }
  .content__main-image {
    grid-column: 3/-1;
    display: flex;
    align-items: center;
    background-color: white;
    padding: 1rem;

    img {
      margin-inline: auto;
      width: 100%;
      max-width: 500px;
      height: auto;
    }
  }
`

const Content__Features = styled.div`
  width: 100%;
  height: 100%;
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  .content__features-image {
    grid-column: 2/4;
    background-color: white;
    height: 100%;
    display: grid;
    place-content: center;

    img {
      margin-inline: auto;
      /* width: 100%; */
      /* max-width: 500px; */
      /* height: auto; */
    }
  }
  .content__features-list {
    grid-column: 4 / -1;
  }
  @media screen and (max-width: 1080px) {
    grid-template-columns: 1fr 1fr;
  }
`

const Feature = styled.div`
  overflow: hidden;
  transition: 0.3s ease;
  border-bottom: var(--border) solid ${({ theme }) => theme.colors.border};
  &:first-child {
    border-top: var(--border) solid ${({ theme }) => theme.colors.border};
  }
`

const Title = styled.div`
  height: 70px;
  width: 100%;
  display: grid;
  grid-template-columns: 50px auto min-content;
  width: 100%;
  align-items: center;
  gap: 1rem;
  padding: 0 1rem;
  h1 {
    font-size: var(--title-content);
  }
  g {
    stroke: ${({ theme }) => theme.colors?.border};
  }
  .title__icon-left,
  .title__icon-right {
    display: flex;
  }
  &:hover {
    cursor: pointer;
  }
`

const Description = styled.div`
  padding: 0 0 2rem 1rem;
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
        <Content__Main>
          <div className="content__main-header">
            <h1>→ OUR EXPERTICES</h1>
            <h2>Custom Software Development Lifecycle</h2>
            <p>
              We employ best practice processes and development methodologies as
              a foundation for rapid building of cutting-edge technology
              solutions in a structured and methodical way.
            </p>
          </div>

          {/* <div className="content__main-image">
            <Image src={gif} width={500} alt="git lifecycle development" />
          </div> */}
        </Content__Main>

        <Content__Features>
          <div className="content__features-image">
            <Image src={gif} width={500} alt="git lifecycle development" />
          </div>
          <div className="content__features-list">
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
          <span className="title__icon-left">{svg}</span>
          <h1>{title}</h1>
          <motion.span
            className="title__icon-right"
            animate={{ rotate: isOpen ? 180 : 0 }}
          >
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
