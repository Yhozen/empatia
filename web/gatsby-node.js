/**
 * Implement Gatsby's Node APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/node-apis/
 */

// You can delete this file if you're not using it
exports.onCreateWebpackConfig = ({ stage, actions, loaders, getConfig }) => {
  if (stage === 'build-html') {
    actions.setWebpackConfig({
      externals: getConfig().externals.concat(function(
        context,
        request,
        callback
      ) {
        const regex = /^@?firebase(\/(.+))?/
        const regex2 = /react-firebaseui/
        const regex3 = /@rehooks\/window-size/
        // exclude firebase products from being bundled, so they will be loaded using require() at runtime.
        if (
          regex.test(request) ||
          regex2.test(request) ||
          regex3.test(request) ||
          request === 'firebaseui'
        ) {
          return callback(null, 'umd ' + request)
        }

        // exclude firebase products from being bundled, so they will be loaded using require() at runtime.

        callback()
      })
    })
  }
}
