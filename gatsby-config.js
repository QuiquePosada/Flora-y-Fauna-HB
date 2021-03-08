module.exports = {
  siteMetadata: {
    title: `Flora y Fauna Healthy Bar`,
    description: `Eat Good, Feel Good`,
    author: `Enrique Posada`,
  },
  plugins: [
    {
      // SEO
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Flora y Fauna Healthy Bar`,
        short_name: `Flora y Fauna`,
        start_url: `/`,
        lang: `es`,
        background_color: `#88BF90`,
        theme_color: `#88BF90`,
        display: `standalone`,
        icon: `static/icon.jpg`, // This path is relative to the root of the site.
      }
    },
    
    `gatsby-plugin-image`,
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        icon: `src/images/icon.png`,
      },
    },
    `gatsby-plugin-mdx`,
    `gatsby-plugin-sharp`,
    `gatsby-transformer-sharp`,
    `gatsby-transformer-remark`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `./src/images/`,
      },
      __key: `images`,
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `./static/images/`,
      },
      __key: `imagesUploaded`,
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `pages`,
        path: `./src/pages/`,
      },
      __key: `pages`,
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `markdown`,
        path: `./src/markdown/`,
      },
      __key: `markdown`,
    },
    {
      resolve: `gatsby-plugin-netlify-cms`,
      options: {
        modulePath: `${__dirname}/src/cms/cms.js`,
      }
    },
  ],
};
