'use strict'
const path = require('path')
const utils = require('./utils')
const webpack = require('webpack')
const config = require('../config')
const merge = require('webpack-merge')
const baseWebpackConfig = require('./webpack.base.conf')

const env = process.env.NODE_ENV === 'testing'
  ? require('../config/test.env')
  : require('../config/prod.env')

const buildsConfig = {
  filename: 'shuvi.js',
  library: 'shuvi',
  libraryTarget: 'umd',
  env: 'production'
}

const webpackConfig = merge(baseWebpackConfig, {
  devtool: config.build.productionSourceMap ? config.build.devtool : false,
  output: {
    filename: buildsConfig.filename,
    library: buildsConfig.library,
    libraryTarget: buildsConfig.libraryTarget
  },
  externals: {
    vue: {
      root: 'Vue',
      commonjs: 'vue',
      commonjs2: 'vue',
      amd: 'vue'
    }
  },
  plugins: [
    new webpack.LoaderOptionsPlugin({
      minimize: true,
      progress: true,
      hide_modules: true
    }),
    new webpack.BannerPlugin({
      banner: `/*! shuvi v${
        require('../package.json').version
      } | (c) 2018 Moudicat | MIT License */`,
      raw: true,
      entryOnly: true
    }),
    new webpack.optimize.UglifyJsPlugin({
      compress: {
        warnings: false
      }
    })
  ]
})

if (config.build.bundleAnalyzerReport) {
  const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin
  webpackConfig.plugins.push(new BundleAnalyzerPlugin())
}

module.exports = webpackConfig
