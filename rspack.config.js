/* eslint-disable @typescript-eslint/no-var-requires */
const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin;
const { merge } = require('webpack-merge');

const rspackCommonConfig = require('./rspack.common.config');
/* eslint-enable @typescript-eslint/no-var-requires */

const rspackConfig = {
    mode: 'production',
    output: {
        crossOriginLoading: 'anonymous'
    },
    plugins: [
        new BundleAnalyzerPlugin({
            openAnalyzer: false,
            analyzerMode: 'static',
            generateStatsFile: true,
            reportFilename: `${__dirname}/reports/bundle/report.html`,
            statsFilename: `${__dirname}/reports/bundle/stats.json`
        })
    ]
};

module.exports = merge(rspackCommonConfig, rspackConfig);
