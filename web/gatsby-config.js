module.exports = {
  siteMetadata: {
    title: 'YoTeAyudo',
    description: 'Plataforma para ayudar.',
    author: '@Yhozen'
  },
  plugins: [
    'gatsby-plugin-react-helmet',
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: 'images',
        path: `${__dirname}/src/images`
      }
    },
    'gatsby-transformer-sharp',
    'gatsby-plugin-sharp',
    {
      resolve: 'gatsby-plugin-manifest',
      options: {
        name: 'YoTeAyudo',
        short_name: 'YoTeAyudo',
        start_url: '/',
        background_color: '#E71A65',
        theme_color: '#E71A65',
        display: 'minimal-ui',
        icon: 'src/assets/logo.png' // This path is relative to the root of the site.
      }
    },
    {
      resolve: 'gatsby-plugin-web-font-loader',
      options: {
        google: {
          families: ['Assistant']
        }
      }
    }
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
  ],
  pathPrefix: '/empatia'
}
