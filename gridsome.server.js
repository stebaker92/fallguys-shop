// Server API makes it possible to hook into various parts of Gridsome
// on server-side and add custom data to the GraphQL data layer.
// Learn more: https://gridsome.org/docs/server-api/

// Changes here require a server restart.
// To restart press CTRL + C in terminal and run `gridsome develop`

const fallguys = require('fallguys-api')

module.exports = function (api) {
  api.loadSource(async ({ addCollection }) => {
    // Use the Data Store API here: https://gridsome.org/docs/data-store-api/

    const today = await fallguys.getDaily();

    const collection = addCollection({
      typeName: 'Daily'
    })

    for (const item of today.pcStore) {
      collection.addNode(item)
    }
  });

  api.createPages(async ({ createPage, graphql }) => {
    // Use the Pages API here: https://gridsome.org/docs/pages-api/

    const data = await graphql(`
      query{
        allDaily{
          edges{
            node{
              uid
              name
              rarity
              icon
              price
              currency
            }
          }
        }
      }
    `)

    const featuredItemsLength = data.data.allDaily.edges.length;

    if (!featuredItemsLength) {
      console.error('No featured items found from Fall Guys API')
      throw "No featured items found from Fall Guys API";
    }

    const { crownIcon, kudosIcon } = fallguys;
    
    createPage({
      path: '/',
      component: './src/templates/ShopPage.vue',
      context: {
        crownIcon,
        kudosIcon,
        items: data.data.allDaily.edges,
        updatedDate: new Date()
      }
    })
  })
}
