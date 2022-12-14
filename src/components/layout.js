import React from "react"
import styled, { ThemeProvider } from "styled-components"
import { useAppContext } from "../contexts/app.context"
import { GlobalStyle } from "../styles/globalStyles"
import { base, lightTheme, darkTheme } from "../styles/theme"
import Footer from "./footer"
import Header from "./header"
import SEO from "./seo"

import logo from "../assets/images/logo.png"
import Image from "next/image"

const themesMap = {
  light: lightTheme,
  dark: darkTheme,
}

const LayoutPartition = styled.div`
  position: relative;
  display: grid;
  grid-template-columns: 100px auto;
  min-height: 100vh;
  /* min-width: 100vw; */
  @media screen and (max-width: 600px) {
    grid-template-columns: none;
  }
`

const Side = styled.div`
  /* position: fixed; */
  border-right: 1px solid #000;
  z-index: 999;
  position: relative;
  /* background: linear-gradient(
    180deg,
    rgba(1, 43, 82, 1) 0%,
    rgba(0, 3, 6, 1) 100%
  ); */
  @media screen and (max-width: 600px) {
    position: fixed;
    top: initial;
    bottom: 0;
    left: 0;
    height: 60px;
    width: 100%;
    border: initial;
  }
`

const Side__Content = styled.div`
  position: sticky;
  top: 0;
  left: 0;
  padding: 1rem 0;
  height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;

  img {
  }
`

const Body = styled.div`
  position: relative;
  width: 100%;
  min-height: 100vh;
  /* background-color: black; */
`

const Layout = ({ children }) => {
  const { state } = useAppContext()
  // const { currentTheme } = state
  // console.log(state)
  const theme = { ...base, colors: themesMap[state.currentTheme] }
  // console.log(theme)

  return (
    // <ThemeProvider theme={theme === "light" ? theme : theme}>
    <ThemeProvider theme={theme}>
      <SEO title="SONUSTECH | Software Company" />
      <GlobalStyle />
      <LayoutPartition>
        <Side>
          <Side__Content>
            <Image src={logo} alt="sonustech logo" width={50} />
            <ul>
              <li>ITEM1</li>
              <li>ITEM1</li>
            </ul>
            <span>Colors</span>
          </Side__Content>
        </Side>
        <Body>
          <Header />
          <main id="main__content">{children}</main>
          <Footer />
        </Body>
      </LayoutPartition>
    </ThemeProvider>
  )
}

export default Layout
