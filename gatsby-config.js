const path = require(`path`)
require('dotenv').config({
    path: `.env`,
})
module.exports = {
    siteMetadata: {
        title: `Codegenera`,
        description: `We build business application for your business needs`,
        url: "https://www.codegenera.in",
        twitterUsername: `@sj_bose`,
        image: "/assets/images/logo.png",
        author: `sj_bose`,
    },
    plugins: [
        `gatsby-plugin-smoothscroll`,
        `gatsby-plugin-sass`,
        `gatsby-plugin-styled-components`,
        `gatsby-plugin-react-helmet`,
        `gatsby-transformer-sharp`,
        `gatsby-plugin-sharp`,
        'gatsby-plugin-optimize-svgs',

        {
            resolve: `gatsby-plugin-material-ui`,
            options: {
                stylesProvider: {
                    injectFirst: true,
                },
                disableAutoprefixing: false,
                disableMinification: false,
            },
        },

        {
            resolve: `gatsby-source-contentful`,
            options: {
                spaceId: process.env.GATSBY_CONTENTFUL_SPACE_ID,
                accessToken: process.env.GATSBY_CONTENTFUL_ACCESS_TOKEN,
            },
        },

        {
            resolve: 'gatsby-source-filesystem',
            options: {
                name: `images`,
                path: path.join(__dirname, `src`, `assets`, `images`),
                // path: `${__dirname}/src/assets/images`,
            },
        },
        {
            resolve: `gatsby-plugin-manifest`,
            options: {
                name: `gatsby-starter-default`,
                short_name: `starter`,
                start_url: `/`,
                background_color: `#ECF0F3`,
                theme_color: `#5352ED`,
                display: `minimal-ui`,
                icon: `src/assets/images/logoSqr.svg`, // This path is relative to the root of the site.
            },
        },
        {
            resolve: `gatsby-plugin-google-fonts`,
            options: {
                fonts: [
                    `Roboto mono`, `Montserrat\: 300,500,600,700,900`,
                    `Pacifico\:300,400,500,600,700`,

                    // `Raleway\:200,300,400,500,600,700,800,900`,
                    `Lato\:300,400,700,900`,
                    `Saira+Extra+Condensed\:100,200,300,400,500,600,700,800,900`,
                    `Saira\:100,200,300,400,500,600,700,800,900`,
                    `Chivo\:300,400,700,900`,
                    `Comfortaa\:300,400,500,600,700`,
                    `Patua+One`,
                    `Bitter\:300,500,600,700,900`,
                    `Khula\:300,400,600,700,800`,
                    `Poppins\:200,300,400,500,600,700,800,900`,
                    `Oswald\:200,300,400,500,600,700`,
                    `Bebas+Neue`,
                    // you can also specify font weights and styles
                ],
                display: 'swap'
            }
        },

    ],

};