const { defineConfig } = require('@vue/cli-service')
const path = require('path')

module.exports = defineConfig({
  transpileDependencies: true,
  configureWebpack: {
    resolve: {
      alias: {
        '@': path.resolve(__dirname, 'src')
      },
      extensions: ['.ts', '.tsx', '.js', '.json']
    },
    module: {
      rules: [{ test: /\.ts$/, loader: 'ts-loader' }]
    }
  }
})
