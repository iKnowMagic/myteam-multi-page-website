import camelCase from 'lodash/camelCase'

// import requireContext from 'require-context.macro'

// require('babel-plugin-require-context-hook/register')()

const modules = {}

;(function updateModules() {
  // https://webpack.js.org/guides/dependency-management/#require-context
  const requireModule = require.context(
    // Search for files in the current directory.
    '.',
    // Search for files in subdirectories.
    true,
    // Include any .js files that are not this file or a unit test.
    /^((?!index|\.unit\.).)*\.js$/
  )

  requireModule.keys().forEach(fileName => {
    if (fileName === 'index.js') return

    const moduleName = camelCase(fileName.replace(/(\.\/|\.js)/g, ''))

    modules[moduleName] = {
      ...requireModule(fileName)[moduleName]
    }
  })

  // If the environment supports hot reloading...
  if (module.hot) {
    // Whenever any Vuex module is updated...
    module.hot.accept(requireModule.id, () => {
      // Update `storeData.modules` with the latest definitions.
      updateModules()
    })
  }
})()

export default modules
