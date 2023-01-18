import React from "react"
import styled, { ThemeProvider } from "styled-components"
import { useAppContext } from "../contexts/app.context"
import { GlobalStyle } from "../styles/globalStyles"
import { base, lightTheme, darkTheme, redTheme } from "../styles/theme"
// import Footer from "./footer"

import { Footer } from "@components"
import Header from "./header"
import SEO from "./seo"
import { AnimatePresence, motion } from "framer-motion"

import logo from "../assets/images/logo.png"
import Image from "next/image"
import Author from "src/sections/author"
import Link from "next/link"

const themesMap = {
  lighter: lightTheme,
  darker: darkTheme,
  reddish: redTheme,
}

const LayoutPartition = styled.div`
  position: relative;
  display: grid;
  grid-template-columns: 100px auto;
  min-height: 100vh;
  transition: 0.2s ease;
  @media screen and (max-width: 600px) {
    grid-template-columns: none;
  }
`

const Side = styled.div`
  border-right: var(--border) solid ${({ theme }) => theme.colors?.border};
  width: 100%;
  z-index: 9999;
  position: relative;
  @media screen and (max-width: 600px) {
    display: none;
    /* position: fixed;
    left: 0;
    bottom: 0;
    width: 100%;
    height: 80px;
    background-color: ${({ theme }) => theme.colors?.body};
    border-top: var(--border) solid ${({ theme }) => theme.colors?.border}; */
  }
`

const Side__Content = styled.div`
  position: sticky;
  top: 0;
  left: 0;
  padding: 1rem 0;
  height: 100vh;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  z-index: 9999;

  .side-navigator {
    display: flex;
    flex-direction: column;
    gap: 1.4rem;
    width: 100%;
    .isActive {
      background-color: ${({ theme }) => theme.colors?.navBackgroundActive};
      transition: 0.4s ease-in-out;
    }
    a {
      background-color: ${({ theme }) => theme.colors?.navBackground};
      transition: 0.4s ease-in-out;
      margin: 0 auto;
      width: 40%;
      height: 12px;
      border-radius: 3px;
      &:hover {
        cursor: pointer;
      }
    }
  }

  .side-colors {
    display: grid;
    justify-content: center;
    align-items: center;
    text-align: center;
    gap: 0.5rem;
    .colors-palette {
      display: flex;
      gap: 3px;
      button {
        width: 25px;
        height: 25px;
        border: var(--border) solid ${({ theme }) => theme.colors?.border};
        border-radius: 2px;
        &:hover {
          cursor: pointer;
        }
      }
      .lighter {
        background-color: white;
      }
      .reddish {
        background: red;
      }
      .darker {
        background: black;
      }
    }
  }

  img {
  }
`

const Body = styled.div`
  position: relative;
  width: 100%;
  min-height: 100vh;
  z-index: 0;
  main {
    /* background-color: ${({ theme }) => theme.colors?.foreground}; */
  }
`

const Layout = ({ children }) => {
  const { state, setTheme, setNavigation } = useAppContext()
  const theme = { ...base, colors: themesMap[state.currentTheme] }
  const nav = state.currentNavigation
  const scrollTop = () => {
    window.scrollTo({
      top: 0,
    })
  }
  return (
    <ThemeProvider theme={theme}>
      <SEO title="SONUSTECH | Software Company" />
      <GlobalStyle />
      <LayoutPartition>
        <Side>
          <Side__Content>
            <Image src={logo} alt="sonustech logo" width={50} />
            <div className="side-navigator">
              <a
                aria-label="hero section"
                role="link"
                // href="#"
                className={`${nav === "hero" ? "isActive" : ""}`}
                onClick={scrollTop}
              ></a>
              <a
                aria-label="services section"
                role="link"
                href="#services"
                className={`${nav === "services" ? "isActive" : ""}`}
              ></a>
              <a
                aria-label="features section"
                role="link"
                href="#features"
                className={`${nav === "features" ? "isActive" : ""}`}
              ></a>
              <a
                aria-label="competencies section"
                role="link"
                href="#competencies"
                className={`${nav === "competencies" ? "isActive" : ""}`}
              ></a>
            </div>
            <div className="side-colors">
              <span>Colors</span>
              <div className="colors-palette">
                <button
                  aria-label="first theme"
                  role="link"
                  className="lighter"
                  onClick={() => setTheme("lighter")}
                ></button>
                <button
                  aria-label="second theme"
                  role="link"
                  className="reddish"
                  onClick={() => setTheme("reddish")}
                ></button>
                <button
                  aria-label="terceary theme"
                  role="link"
                  className="darker"
                  onClick={() => setTheme("darker")}
                ></button>
              </div>
            </div>
          </Side__Content>
        </Side>
        <Body>
          <Header />

          <motion.main
            initial={{ x: 300, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            exit={{ x: 300, opacity: 0 }}
            transition={{
              type: "spring",
              stiffness: 260,
              damping: 20,
            }}
          >
            {children}
          </motion.main>

          <Footer />
          <Author />
        </Body>
      </LayoutPartition>
    </ThemeProvider>
  )
}

export default Layout
