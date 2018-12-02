module.exports = {


  siteMetadata: {
    // Home Page 

    index: {
      name: `Jupio Labs`,
      tagline: `Your Innovation Partner`,
      description: `At Jupio Labs we bring our clients to the modern web, using agile & lean approaches to development and design.`,
      keywords: [
        'HTML',
        'CSS',
        'ReactJS',
        'NodeJS',
        'Node',
        'React',
        'Agile',
        'Lean',
        'UX',
        'UI',
        'ES6',
        'JavaScript',
      ],
      author: 'Jupio Media Inc.',
      canonicalLink: `https://www.jupiolabs.com/`,
    },

    // Other Pages

    privacyPolicy: {
      name: `Jupio Labs`,
      tagline: `Privacy Policy`,
      description: `At Jupio Labs we bring our clients to the modern web, using agile & lean approaches to development and design.`,
      keywords: [
        'HTML',
        'CSS',
        'ReactJS',
        'NodeJS',
        'Node',
        'React',
        'Agile',
        'Lean',
        'UX',
        'UI',
        'ES6',
        'JavaScript',
      ],
      author: 'Jupio Media Inc.',
      canonicalLink: `https://www.jupiolabs.com/privacy-policy`
    },


  },

  

  plugins: [
    `gatsby-plugin-sass`,
    `gatsby-plugin-typescript`,
    `gatsby-plugin-react-helmet`,
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
