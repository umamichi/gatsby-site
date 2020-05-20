require('dotenv').config();

// gatsby の設定ファイル
module.exports = {
  // metaタグ
  siteMetadata: {
    title: `Umamichi's Gatsby Sample Site 🍷`,
    description: `this is description in gatsby-config.js`,
    author: `@umamichi`,
    hoge: `hoge`
  },
  // プラグイン
  plugins: [
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `gatsby-starter-default`,
        short_name: `starter`,
        start_url: `/`,
        background_color: `#663399`,
        theme_color: `#663399`,
        display: `minimal-ui`,
        icon: `src/images/gatsby-icon.png`, // This path is relative to the root of the site.
      },
    },

    // ローカルファイルのデータをGatsbyに渡せるプラグイン
    {
      resolve: "gatsby-source-filesystem",
      options: {
        path: `${__dirname}/blog`,
        name: "blog",
      },
    },
    // マークダウンを扱うプラグイン
    "gatsby-transformer-remark",

    
    // contenful からデータを取ってくるプラグイン
    {
      resolve: `gatsby-source-contentful`,
      options: {
        spaceId: process.env.spaceId,
        accessToken: process.env.accessToken,
      },
    },
    
    // PWA manifest settings
    {
      resolve: 'gatsby-plugin-manifest',
      options: {
        name: 'umamichi gatsby sample site',
        short_name: 'UMAMICHI',
        start_url: '/?',
        background_color: '#888', // アプリ起動時の背景色
        theme_color: '#d23d29', // ブラウザツールバーの色
        display: 'minimal-ui',　// アプリのスタイル
      },
    },

    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    `gatsby-plugin-offline`,
  ],
}
