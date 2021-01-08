module.exports = {
  siteMetadata: {
    title: 'Justcausetech',
    description: 'this a blogspot built and managed by sidharth sahni',
  },
  plugins: [
    'gatsby-plugin-emotion',
    'gatsby-plugin-react-helmet',
    'gatsby-transformer-sharp',
    'gatsby-plugin-sharp',
    `gatsby-plugin-transition-link`,
    {
      resolve: 'gatsby-source-instagram',
      options: {
        username: '6799361946',
      },
    },
   
    {
      resolve: "gatsby-plugin-firebase",
      options: {
        credentials: {
       apiKey: "AIzaSyB-1MHyDEhCFwfW268-SekKpUpNhFTKo5U",
    authDomain: "gastby-blog.firebaseapp.com",
    projectId: "gastby-blog",
    storageBucket: "gastby-blog.appspot.com",
    messagingSenderId: "551707735496",
    appId: "1:551707735496:web:2b0e0e85f52f45201fbcfd",
    measurementId: "G-LL839B0P2R"
        }
      }
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `posts`,
        path: `posts`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `images`,
      },
    },
    {
      resolve: `gatsby-plugin-mdx`,
      options: {
        defaultLayouts: {
          default: require.resolve(`./src/components/layout.js`),
        },
        gatsbyRemarkPlugins: [{ resolve: 'gatsby-remark-images' }],
      },
    },

    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `GatsbyJS blog`,
        short_name: `GatsbyJS blog`,
        start_url: `/`,
        background_color: `#f7f0eb`,
        theme_color: `#a2466c`,
        display: `standalone`,
        icon: `static/favicon.ico`,
      },
    },
    {
      resolve: 'gatsby-plugin-webpack-bundle-analyzer',
      options: {
        production: true,
        disable: !process.env.ANALYZE_BUNDLE_SIZE,
        generateStatsFile: true,
        analyzerMode: 'static',
      },
    },
    `gatsby-plugin-offline`,
  ],
};
