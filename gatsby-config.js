module.exports = {
  siteMetadata: {
    title: `Function as a Service, Club.`,
    description: `Curated list of awesome resources for all things Serverless. Deploy your functions as a service to your favorite cloud provider. AWS CloudFormation examples and toolings to bootstrap your next FaaS project.`,
    author: `@sbstjn`
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.app/offline
    // 'gatsby-plugin-offline',
    `gatsby-transformer-yaml`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `./data.yml`
      }
    },
    `gatsby-plugin-styled-components`
  ]
}
