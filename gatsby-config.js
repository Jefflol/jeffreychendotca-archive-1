module.exports = {
  siteMetadata: {
    title: `Jeffrey Chen`,
    description: `This is Jeffrey Chen.`,
    author: `Jeffrey Chen`,
  },
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
        name: `Jeffrey Chen`,
        short_name: `JAF`,
        start_url: `/`,
        background_color: `rgba(245, 245, 245, 1)`,
        theme_color: `rgba(0, 88, 133, 1)`,
        display: `minimal-ui`,
        icon: `src/images/logo.png`, // This path is relative to the root of the site.
      },
    },
    {
      resolve: `gatsby-plugin-google-fonts`,
      options: {
        fonts: [
          `limelight`,
          `source sans pro\:200,300,400,500,600,700,800,900,200i,300i,400i,500i,600i,700i,800i,900i` // you can also specify font weights and styles
        ],
        display: 'swap'
      }
    },
    `gatsby-plugin-offline`,
  ],
}
