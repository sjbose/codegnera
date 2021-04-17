
const path = require(`path`)
require('dotenv').config({
    path: `.env`,
})
module.exports = {
    siteMetadata: {
        title: `Codegenera`,
        description: `We build business application for your business needs.Type of services we provide eg: Static website,CMS,Backend, Payment portal, Graphics,Database integration with your existed system , Ui development, Site redesign`,
        url: `https://www.codegenera.in`,
        twitterUsername: `@sj_bose`,
        image: "/assets/images/SquareNewCodegenera.png",
        author: `sj_bose`,
    },
    plugins: [


        `gatsby-plugin-styled-components`,
        `gatsby-plugin-react-helmet`,
        `gatsby-transformer-sharp`,
        `gatsby-plugin-sharp`,
        'gatsby-plugin-optimize-svgs',

        // {
        //     resolve: `gatsby-plugin-material-ui`,
        //     options: {
        //         stylesProvider: {
        //             injectFirst: true,
        //         },
        //         disableAutoprefixing: false,
        //         disableMinification: false,
        //     },
        // },

        {
            resolve: `gatsby-source-contentful`,
            options: {
                spaceId: process.env.GATSBY_CONTENTFUL_SPACE_ID,
                accessToken: process.env.GATSBY_CONTENTFUL_ACCESS_TOKEN,
                forceFullSync: true,
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
                name: `Codegenera`,
                short_name: `codegenera`,
                start_url: `/`,
                background_color: `#ECF0F3`,
                theme_color: `#5352ED`,
                display: `minimal-ui`,
                icon: `src/assets/images/whiteIcon.png`, // This path is relative to the root of the site.
            },
        },
        {
            resolve: `gatsby-plugin-google-fonts`,
            options: {
                fonts: [

                    `Montserrat\: 300,500,600,700,900`,
                    `Chivo\:300,400,700,900`,
                    `Comfortaa\:300,400,500,600,700`,
                    `Patua+One`,
                    `Bitter\:300,500,600,700,900`,

                    `Poppins\:200,300,400,500,600,700,800,900`,
                    `Fira+Sans\:200,300,400,500,600,700,800,900`,


                    // you can also specify font weights and styles
                ],
                display: 'swap'
            }
        },

    ],

};