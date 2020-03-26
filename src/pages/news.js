import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"

const SecondPage = () => (
  <Layout>
    <SEO title="Page two" />
    <h1>news</h1>
    <p>Welcome to /news</p>
    <Link to="/">HOME</Link>
  </Layout>
)

export default SecondPage
