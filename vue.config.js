//TODO: 使用 webpack 打包图片，而不是直接 require
'use strict'
const path = require('path')

function resolve(dir) {
  return path.join(__dirname, dir)
}

module.exports = {
  runtimeCompiler: true,
  publicPath: '/',
  outputDir: 'dist',
  lintOnSave: process.env.NODE_ENV === 'development',
  productionSourceMap: false,
  configureWebpack: {
    // provide the app's title in webpack's name field, so that
    // it can be accessed in index.html to inject the correct title.
    name: 'BBS-Front',
    resolve: {
      alias: {
        '@': resolve('src')
      }
    }
  },
  // chainWebpack: config => {
  //   config
  //     .rule('png')
  //     .test(/\.(png|jpg|woff|woff2|eot|ttf|svg)$/)
  //     .loader('url-loader')
  //     .end()
  // }
}
