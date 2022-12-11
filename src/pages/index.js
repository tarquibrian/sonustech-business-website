import Layout from '../components/layout'
import React from 'react'
import { useAppContext } from '../contexts/app.context'
import Hero from '../sections/hero'
import Contact from '../sections/contact'
import Team from '../sections/team'
import Services from '../sections/services'
import Features from '../sections/features'

const Index = () => {
  const { state, toggleTheme } = useAppContext()
  const { theme } = state
  return (
    <Layout>
      {/* <button onClick={toggleTheme}>change theme</button> */}
      {/* Index {theme} */}
      <Hero />
      <Services />
      <Features />
      <Team />
      <Contact />
    </Layout>
  )
}

export default Index
