/* eslint-disable @typescript-eslint/no-var-requires */
const dotenv = require('dotenv');
const { merge } = require('webpack-merge');

const webpackCommonConfig = require('./webpack.common.config');
/* eslint-enable @typescript-eslint/no-var-requires */

// Prepare the environtment variables
dotenv.config();

const webpackServeConfig = {
    mode: 'development',
    devServer: {
        port: process.env.APP_DEV_SERVER_PORT,
        open: false,
        historyApiFallback: true,
        hot: false
    }
};

module.exports = merge(webpackCommonConfig, webpackServeConfig);
