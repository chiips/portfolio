const CompressionPlugin = require('compression-webpack-plugin')

module.exports = {
  devServer: {
    proxy: {
      '^/api': {
        target: 'http://localhost:8000',
        ws: true,
        changeOrigin: true
      }
    }
  },
  configureWebpack: {
    devtool: 'source-map',
    plugins: [
      new CompressionPlugin({ cache: true })
    ]
  }
}
