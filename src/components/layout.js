import React from 'react'
import { ThemeProvider } from 'styled-components'
import { useAppContext } from '../contexts/app.context'
import { GlobalStyle } from '../styles/globalStyles'
import { lightTheme, darkTheme } from '../styles/theme'
import Footer from './footer'
import Header from './header'
import SEO from './seo'

const Layout = ({ children }) => {
  const { state } = useAppContext()
  const { theme } = state
  return (
    <ThemeProvider theme={theme === 'light' ? lightTheme : darkTheme}>
      <SEO title="SONUSTECH | Software Company" />
      <GlobalStyle />
      <Header />
      <main id="main__content">{children}</main>
      <Footer />
    </ThemeProvider>
  )
}

export default Layout
