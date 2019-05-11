const path = require(`path`)
const pageTemplate = path.resolve(`./src/templates/page.js`)
exports.createPages = async ({ graphql, actions }) => {
  const { createPage } = actions
  
  const result = await graphql(`
    {
      allWordpressPage {
        edges {
          node {
            id
            slug
            status
            template
          }
        }
      }
      allWordpressPost{
        edges {
          node {
            title
            acf{
              heading
              description
              image{
                source_url
              }
            }
          }
        }
      }
    }
  `)
  if (result.errors) {
    throw new Error(result.errors)
  }

  result.data.allWordpressPage.edges.forEach(edge => {
    createPage({
      path: edge.node.slug,
      component:pageTemplate,
      context: {
        id: edge.node.id,
        slug:edge.node.slug,
        post:result.data.allWordpressPost.edges
      },
    })
  })
}