import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import Layout from "../components/layout"

const Contentful = () => {
  const data = useStaticQuery(graphql`
    query {
      # contentful からデータを取得する
      allContentfulUser {
        edges {
          node {
            id
            age
            name
          }
        }
      }
    }
  `);

  console.log('data:', data);

  return (
    <Layout>
      {data.allContentfulUser.edges.map((
        {
          node: { id, name, age }
        }
      ) => (
        <h3 key={id}>
          {name} (age: {age})
        </h3>
      ))}
    </Layout>
  )
}

export default Contentful;