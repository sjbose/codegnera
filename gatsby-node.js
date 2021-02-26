const path = require("path")
// const slash = require("slash");


exports.createPages = async ({ graphql, actions }) => {
    const { createPage } = actions;
    const articleTemplate = path.resolve(`src/templates/article.js`);
    const response = await graphql(`
    query {
    allContentfulArticle{
        edges {
          node {
            slug
          }
        }
      }
    }
  `)
    //Create service pages

    response.data.allContentfulArticle.edges.map(({ node }) => (
        createPage({
            path: `/blog/${node.slug}`,
            component: articleTemplate,
            context: {
                slug: node.slug,
            },
        })
    ))
}