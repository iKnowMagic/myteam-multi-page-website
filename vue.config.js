const globImporter = require('node-sass-glob-importer')

module.exports = {
  configureWebpack: {
    name: 'myteam',
    /**
     * https://webpack.js.org/configuration/devtool/#devtool
     * https://blog.scottlogic.com/2017/11/01/webpack-source-map-options-quick-guide.html
     * https://cli.vuejs.org/guide/mode-and-env.html#modes
     */
    // devtool: process.env.NODE_ENV === 'production' ? 'none' : 'eval-source-map'

    output:
      process.env.NODE_ENV === 'production'
        ? {
            filename: 'js/[name].[contenthash:8].js',
            chunkFilename: 'js/chunk-[contenthash:8].js'
          }
        : {}
  },
  chainWebpack: config => {
    const svgRule = config.module.rule('svg')

    svgRule.uses.clear()

    svgRule
      .oneOf('inline')
      .resourceQuery(/inline/)
      .use('vue-svg-loader')
      .loader('vue-svg-loader')
      .end()
      .end()
      .oneOf('external')
      .use('file-loader')
      .loader('file-loader')
      .options({
        name: 'assets/[name].[hash:8].[ext]'
      })
  },
  css: {
    sourceMap: process.env.NODE_ENV !== 'production',
    loaderOptions: {
      scss: {
        sassOptions: {
          importer: globImporter()
        }
      }
    }
  }
}
