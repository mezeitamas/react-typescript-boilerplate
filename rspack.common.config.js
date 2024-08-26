/* eslint-disable @typescript-eslint/no-var-requires */
const path = require('node:path');

const rspack = require('@rspack/core');

const packageJson = require('./package.json');
/* eslint-enable @typescript-eslint/no-var-requires */

const rspackCommonConfig = {
    target: 'web',
    bail: true,
    devtool: 'source-map',
    entry: {
        app: './src/index.tsx'
    },
    output: {
        path: `${__dirname}/dist/bundle`,
        filename: '[name].[contenthash].bundle.js'
    },
    resolve: {
        alias: {
            '@/shared': path.resolve(__dirname, 'src/shared/index.ts')
        },
        extensions: ['.js', '.jsx', '.ts', '.tsx']
    },
    module: {
        rules: [
            {
                test: /\.(ts|tsx)$/,
                exclude: /node_modules/,
                use: {
                    loader: 'babel-loader'
                }
            }
        ]
    },
    plugins: [
        new rspack.HtmlRspackPlugin({
            template: './src/index.html',
            title: packageJson.name
        })
    ],
    optimization: {
        splitChunks: {
            chunks: 'all'
        }
    },
    performance: {
        hints: false
    }
};

module.exports = rspackCommonConfig;
