/* eslint-disable @typescript-eslint/no-require-imports */
const dotenv = require('dotenv');
const { merge } = require('webpack-merge');

const rspackCommonConfig = require('./rspack.common.config');
/* eslint-enable @typescript-eslint/no-require-imports */

// Prepare the environtment variables
dotenv.config();

const rspackServeConfig = {
    mode: 'development',
    devServer: {
        port: process.env.APP_DEV_SERVER_PORT,
        open: false,
        historyApiFallback: true,
        hot: false
    }
};

module.exports = merge(rspackCommonConfig, rspackServeConfig);
