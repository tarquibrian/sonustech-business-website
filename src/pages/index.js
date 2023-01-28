import Layout from "../components/layout"
import React from "react"
import Hero from "../sections/hero"
import Contact from "../sections/contact"
import Team from "../sections/team"
import Services from "../sections/services"
import Features from "../sections/features"
import Competencies from "../sections/competencies"

const Index = () => {
  return (
    <Layout>
      <Hero />
      <Services />
      <Features />
      <Competencies />
      {/* <Team /> */}
      {/* <Contact /> */}
    </Layout>
  )
}

export default Index
