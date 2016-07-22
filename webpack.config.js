'use strict';

const path = require('path');

// 轻量级的命令行参数解析引擎,https://jarvys.github.io/2014/06/01/minimist-js/
const args = require('minimist')(process.argv.slice(2));

console.log(args)

// List of allowed environments
const allowedEnvs = ['dev', 'dist', 'test'];

// Set the correct environment
let env;

// 参数分析
if (args._.length > 0 && args._.indexOf('start') !== -1) {
  env = 'test';
} else if (args.env) {
  env = args.env;
} else {
  env = 'dev';
}

// 真实的运行环境
process.env.REACT_WEBPACK_ENV = env;

/**
 * Build the webpack configuration
 * @param  {String} wantedEnv The wanted environment
 * @return {Object} Webpack config
 */
function buildConfig(wantedEnv) {
  let isValid = wantedEnv && wantedEnv.length > 0 && allowedEnvs.indexOf(wantedEnv) !== -1;
  let validEnv = isValid ? wantedEnv : 'dev';
  // 加载实际的配置文件
  let config = require(path.join(__dirname, 'cfg/' + validEnv));
  return config;
}

// 构建配置文件
module.exports = buildConfig(env);
