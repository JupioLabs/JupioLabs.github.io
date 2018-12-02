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
    }, 
    {
      resolve: `gatsby-plugin-google-analytics`,
      options: {
        trackingId: "UA-125456641-3",
        // Puts tracking script in the head instead of the body
        head: false,
        // Setting this parameter is optional
        anonymize: true,
        // Setting this parameter is also optional
        respectDNT: true,
        // Enables Google Optimize using your container Id
        // optimizeId: "YOUR_GOOGLE_OPTIMIZE_TRACKING_ID",
        // // Any additional create only fields (optional)
        // sampleRate: 5,
        // siteSpeedSampleRate: 10,
        // cookieDomain: "jupiolabs.com",
      },
    },
  ],
}
