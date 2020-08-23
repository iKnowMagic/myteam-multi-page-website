module.exports = {
  configureWebpack: {
    name: 'myteam'
    /**
     * https://webpack.js.org/configuration/devtool/#devtool
     * https://blog.scottlogic.com/2017/11/01/webpack-source-map-options-quick-guide.html
     * https://cli.vuejs.org/guide/mode-and-env.html#modes
     */
    // devtool: process.env.NODE_ENV === 'production' ? 'none' : 'eval-source-map'
  }
}
