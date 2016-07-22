'use strict';

let path = require('path');
let webpack = require('webpack');
let baseConfig = require('./base');
let defaultSettings = require('./defaults');

// Add needed plugins here
// Use Bower with Webpack.When the plugin is active, you can require bower modules using require.
let BowerWebpackPlugin = require('bower-webpack-plugin');

// 
let config = Object.assign({}, baseConfig, {
  // 入口
  entry: [
    // 接收Webpack推送过来的代码模块，进而可以通知所有相关React组件进行重新Render
    'webpack-dev-server/client?http://127.0.0.1:' + defaultSettings.port,
    'webpack/hot/only-dev-server',
    // 前端代码入口
    './src/index'
  ],
  // Cache generated modules and chunks to improve performance for multiple incremental builds.
  cache: true,
  // https://segmentfault.com/a/1190000004280859
  devtool: 'eval-source-map',

  // 插件 ，https://webpack.github.io/docs/list-of-plugins.html
  plugins: [
    // 全局开启代码热替换
    new webpack.HotModuleReplacementPlugin(),
    // 打包的时候强制通过
    new webpack.NoErrorsPlugin(),
    // Bower插件
    new BowerWebpackPlugin({
      searchResolveModulesDirectories: false
    })
  ],
  // loaders
  module: defaultSettings.getDefaultModules()
});

// Add needed loaders to the defaults here
config.module.loaders.push({
  test: /\.(js|jsx)$/,
  // react-hot-loader去加载React组件
  loader: 'react-hot!babel-loader',
  include: [].concat(
    config.additionalPaths,
    [ path.join(__dirname, '/../src') ]
  )
});

module.exports = config;
