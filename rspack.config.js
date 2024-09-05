/* eslint-disable @typescript-eslint/no-require-imports */
const { merge } = require('webpack-merge');

const rspackCommonConfig = require('./rspack.common.config');
/* eslint-enable @typescript-eslint/no-require-imports */

const rspackConfig = {
    mode: 'production',
    output: {
        crossOriginLoading: 'anonymous'
    }
};

module.exports = merge(rspackCommonConfig, rspackConfig);
