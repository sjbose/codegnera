// const path = require('path');
// const slash = require('slash');


// exports.createPages = ({ graphql, actions }) => {
//     const { createPage } = actions;
//     return graphql(
//         `
//         {
//             allContentfulService {
//             edges {
//                 node {
//                 slug
//                 }
//             }
//             }
//         }
//     `
//     )
//         .then(result => {
//             if (result.errors) {
//                 console / log("Error with contentful data", result.errors)
//             }

//             //Create service pages
//             const serviceTemplate = path.resolve('./src/templates/service.js');

//             result.data.allContentfulService.edges.map(({ node }) => (
//                 createPage({
//                     path: `/services/service.node.slug`,
//                     component: slash(serviceTemplate),
//                     context: {
//                         slug: service.node.slug
//                     }
//                 })
//             ));
//         }).catch(error => console.log("error with contentful data", error))

// }