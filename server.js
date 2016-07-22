/*eslint no-console:0 */
// console未删除
'use strict';
// core-js 是一个Polyfill的库，【ECMAScript 5, ECMAScript 6: promises, symbols, collections, iterators, typed arrays, ECMAScript 7+ 】
require('core-js/fn/object/assign');

const webpack = require('webpack');
// dev-server对象
const WebpackDevServer = require('webpack-dev-server');
// Webpack配置文件
const config = require('./webpack.config');
// 在浏览器中打开网址
const open = require('open');
// 参数：Webpack对象和配置对象
new WebpackDevServer(webpack(config), config.devServer)
	// 服务器启动
	.listen(config.port, 'localhost', (err) => {
		if (err) {
			console.log(err);
		}
		console.log('Listening at localhost:' + config.port);
		console.log('Opening your system browser...');
		open('http://localhost:' + config.port + '/webpack-dev-server/');
	});