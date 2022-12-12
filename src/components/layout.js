import React from "react"
import styled, { ThemeProvider } from "styled-components"
import { useAppContext } from "../contexts/app.context"
import { GlobalStyle } from "../styles/globalStyles"
import { lightTheme, darkTheme } from "../styles/theme"
import Footer from "./footer"
import Header from "./header"
import SEO from "./seo"

const LayoutPartition = styled.div`
  position: relative;
  display: grid;
  grid-template-columns: 80px auto;
  /* min-height: 100vh; */
  /* min-width: 100vw; */
`

const Side = styled.div`
  /* background-color: skyblue; */
  position: sticky;
  top: 0;
  left: 0;

  /* width: 100%; */
  /* height: 100vh; */
  border-right: 1px solid #000;
  z-index: 999;
`

const Body = styled.div`
  position: relative;
  width: 100%;
  min-height: 100vh;
  /* background-color: black; */
`

const Layout = ({ children }) => {
  const { state } = useAppContext()
  const { theme } = state
  return (
    <ThemeProvider theme={theme === "light" ? lightTheme : darkTheme}>
      <SEO title="SONUSTECH | Software Company" />
      <GlobalStyle />
      <LayoutPartition>
        <Side>Side</Side>
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
