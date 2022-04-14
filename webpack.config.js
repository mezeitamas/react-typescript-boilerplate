/* eslint-disable @typescript-eslint/no-var-requires */
const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin;
const { merge } = require('webpack-merge');
const { SubresourceIntegrityPlugin } = require('webpack-subresource-integrity');

const webpackCommonConfig = require('./webpack.common.config');
/* eslint-enable @typescript-eslint/no-var-requires */

const webpackConfig = {
    mode: 'production',
    output: {
        crossOriginLoading: 'anonymous'
    },
    plugins: [
        new SubresourceIntegrityPlugin({
            hashFuncNames: ['sha256', 'sha384', 'sha512']
        }),

        new BundleAnalyzerPlugin({
            openAnalyzer: false,
            analyzerMode: 'static',
            generateStatsFile: true,
            reportFilename: `${__dirname}/reports/bundle/report.html`,
            statsFilename: `${__dirname}/reports/bundle/stats.json`
        })
    ]
};

module.exports = merge(webpackCommonConfig, webpackConfig);
