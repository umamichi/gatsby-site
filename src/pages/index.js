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
    {/* <p>
      TODO weather information
    </p> */}
    <div>
      sample image. 
      <br />
      <img src={picture1} alt="picture1" style={{ width: `300px`, marginBottom: `1.45rem` }} />
    </div>
    <div style={{ maxWidth: `300px`, marginBottom: `1.45rem` }}>
      gatsby-image
      <br />
      <Image />
    </div>
    <Link to="/news/">/news</Link>
    <br />
    <Link to="/get-markdown/">マークダウンを取得するサンプル</Link>
    <br />
    <Link to="/contentful/">contentfulからデータを取得するサンプル</Link>
  </Layout>
)

export default IndexPage
