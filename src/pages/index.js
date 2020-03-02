import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import Image from "../components/image"
import SEO from "../components/seo"
import picture1 from "../images/picture1.jpg";


const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <h1>index.js</h1>
    <p>
      TODO weather information
    </p>
    <div>
      simple image by webpack import. 
      <br />
      <img src={picture1} alt="picture1" style={{ width: `300px`, marginBottom: `1.45rem` }} />
    </div>
    <div style={{ maxWidth: `300px`, marginBottom: `1.45rem` }}>
      gatsby-image
      <br />
      <Image />
    </div>
    <Link to="/page-2/">/page-2</Link>
  </Layout>
)

export default IndexPage
