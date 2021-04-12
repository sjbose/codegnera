// const path = require("path")
// const slash = require("slash");


// exports.createPages = async ({ graphql, actions }) => {
//   const { createPage } = actions;
//   const articleTemplate = path.resolve(`src/templates/article.js`);
//   const response = await graphql(`
//     query {
//     allContentfulArticle{
//         edges {
//           node {
//             slug
//           }
//         }
//       }
//     }
//   `)
//   //Create service pages

//   response.data.allContentfulArticle.edges.map(({ node }) => (
//     createPage({
//       path: `/blog/${node.slug}`,
//       component: articleTemplate,
//       context: {
//         slug: node.slug,
//       },
//     })
//   ))
// }


// exports.onCreateWebpackConfig = ({ stage, actions }) => {
//   if (stage.startsWith("develop")) {
//     actions.setWebpackConfig({
//       resolve: {
//         alias: {
//           "react-dom": "@hot-loader/react-dom",
//         },
//       },
//     })
//   }
// }
exports.onCreatePage = async ({ page, actions }) => {
    const { createPage, deletePage } = actions;

    // Look for /404/ path
    if (page.path.match(/^\/404\/$/)) {
        const oldPage = { ...page };

        // Add page context
        page.context = {
            foo: 'bar'
        };

        // Recreate the modified page
        deletePage(oldPage);
        createPage(page)
    }
};
