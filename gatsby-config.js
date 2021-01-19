const path = require(`path`)
module.exports = {
    siteMetadata: {
        title: `Codegenera`,
        description: `Here we build business application for your business needs`,
        author: `@sj_bose`,
    },
    plugins: [

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
        `gatsby-plugin-react-helmet`,
        {
            resolve: 'gatsby-source-filesystem',
            options: {
                name: `images`,
                path: path.join(__dirname, `src`, `assets`, `images`),
                // path: `${__dirname}/src/assets/images`,
            },
        },
        `gatsby-transformer-sharp`,
        `gatsby-plugin-styled-components`,
        `gatsby-plugin-sharp`,
        {
            resolve: `gatsby-plugin-manifest`,
            options: {
                name: `gatsby-starter-default`,
                short_name: `starter`,
                start_url: `/`,
                background_color: `#ECF0F3`,
                theme_color: `#5352ED`,
                display: `minimal-ui`,
                icon: `src/assets/images/logo.png`, // This path is relative to the root of the site.
            },
        },
        {
            resolve: `gatsby-plugin-google-fonts`,
            options: {
                fonts: [
                    `Quicksand\:300,400,500,600,700`, `Roboto mono`, `Montserrat\: 300,500,600,700,900`,
                    `Pacifico\:300,400,500,600,700`, `Raleway\:200,300,400,500,600,700,800,900`,
                    `Lato\:300,400,700,900`,
                    `Saira+Extra+Condensed\:100,200,300,400,500,600,700,800,900`,
                    `Saira\:100,200,300,400,500,600,700,800,900`,
                    `Chivo\:300,400,700,900`,
                    `Comfortaa\:300,400,500,600,700`,
                    `Patua+One`
                    // you can also specify font weights and styles
                ],
                display: 'swap'
            }
        },
        'gatsby-plugin-optimize-svgs',
    ],

};