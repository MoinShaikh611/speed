import * as React from "react"
import Hero from "../components/Hero"

import Layout from "../components/Layout"
import Seo from "../components/seo"
import Trips from "../components/Trips"

const IndexPage = () => (
  <Layout>
    <Seo title="Home" />
    <Hero/>
    <Trips heading="Our Favourite Destination"/>
  </Layout>
)

export default IndexPage
