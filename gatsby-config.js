module.exports = {
  siteMetadata: {
    name: `Jupio Labs`,
    tagline: `Your Innovation Partner`
  },  
  plugins: [
    `gatsby-plugin-sass`,
    `gatsby-plugin-typescript`,
    // `gatsby-plugin-tslint`,
    {
      resolve: `gatsby-plugin-google-fonts`,
      options: {
        fonts: [
          `Roboto\:100,100i,300,300i,400,400i,500,500i,700,700i,900,900i` // you can also specify font weights and styles
        ]
      }
    }
  ],
}
