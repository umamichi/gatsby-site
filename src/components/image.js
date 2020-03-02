import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"

/*
 * This component is built using `gatsby-image` to automatically serve optimized
 * images with lazy loading and reduced file sizes. The image is loaded using a
 * `useStaticQuery`, which allows us to load the image from directly within this
 * component, rather than having to pass the image data down from pages.
 *
 * For more information, see the docs:
 * - `gatsby-image`: https://gatsby.dev/gatsby-image
 * - `useStaticQuery`: https://www.gatsbyjs.org/docs/use-static-query/
 */
 /* 訳）
  * このコンポーネントは `gatsby-image`を使用して構築され、最適化された状態で自動的に提供されます
  * 遅延読み込みとファイルサイズの縮小を伴う画像。画像は
  * `useStaticQuery`。これにより、この中から直接画像をロードできます。
  * コンポーネント。ページから画像データを渡す必要はありません。
  * 詳細については、ドキュメントを参照してください。
  *-`gatsby-image`：https://gatsby.dev/gatsby-image
  *-`useStaticQuery`：https://www.gatsbyjs.org/docs/use-static-query/
  */

const Image = () => {
  const data = useStaticQuery(graphql`
    query {
      placeholderImage: file(relativePath: { eq: "picture1.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 300) {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  `)

  return <Img fluid={data.placeholderImage.childImageSharp.fluid} />
}

export default Image
