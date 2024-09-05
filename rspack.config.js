/* eslint-disable @typescript-eslint/no-require-imports */
const { RsdoctorRspackPlugin } = require('@rsdoctor/rspack-plugin');
const { merge } = require('webpack-merge');

const rspackCommonConfig = require('./rspack.common.config');
/* eslint-enable @typescript-eslint/no-require-imports */

const rspackConfig = {
    mode: 'production',
    output: {
        crossOriginLoading: 'anonymous'
    },
    plugins: [
        new RsdoctorRspackPlugin({
            disableClientServer: true,
            features: ['loader', 'plugins', 'bundle'],
            mode: 'brief',
            reportDir: `${__dirname}/reports/bundle/`,
            brief: {
                reportHtmlName: 'report.html',
                writeDataJson: true
            }
        })
    ]
};

module.exports = merge(rspackCommonConfig, rspackConfig);
