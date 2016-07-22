'use strict';
let path = require('path');
let defaultSettings = require('./defaults');

// Additional npm or bower modules to include in builds
// Add all foreign plugins you may need into this array
// @example:
// let npmBase = path.join(__dirname, '../node_modules');
// let additionalPaths = [ path.join(npmBase, 'react-bootstrap') ];
let additionalPaths = [];

// https://webpack.github.io/docs/webpack-dev-server.html
module.exports = {
  // 额外的路径，子类会用
  additionalPaths: additionalPaths,

  // 端口
  port: defaultSettings.port,
  
  // debug 模式
  debug: true,

  // https://segmentfault.com/a/1190000004280859
  devtool: 'eval',

  // http://www.jianshu.com/p/271f93b8c051
  output: {
    // webpack打包后，生成的静态文件放置的目录
    path: path.join(__dirname, '/../dist/assets'),
    // 打包之后的js文件名
    filename: 'app.js',
    // 引用文件路径重新合成
    publicPath: defaultSettings.publicPath
  },

  //配置服务器 ，http://www.jianshu.com/p/b5248d441d9e
  devServer: {
    //  默认webpack dev server是从项目的根目录提供服务，如果要从不同的目录提供服务，可以通过contentBase来配置。
    contentBase: './src/',
    // Set this as true if you want to access dev server from arbitrary url.
    historyApiFallback: true,
    // 模块热替换
    hot: true,
    // 默认端口
    port: defaultSettings.port,
    // 
    publicPath: defaultSettings.publicPath,
    // ？
    noInfo: false
  },

  // 可以理解为默认配置项吧
  resolve: {
    // 默认支持的文件类型
    extensions: ['', '.js', '.jsx'],
    // 为模块起别名，之后可以直接require引用
    alias: {
      actions: `${defaultSettings.srcPath}/actions/`,
      components: `${defaultSettings.srcPath}/components/`,
      sources: `${defaultSettings.srcPath}/sources/`,
      stores: `${defaultSettings.srcPath}/stores/`,
      styles: `${defaultSettings.srcPath}/styles/`,
      config: `${defaultSettings.srcPath}/config/` + process.env.REACT_WEBPACK_ENV
    }
  },
  module: {}
};
