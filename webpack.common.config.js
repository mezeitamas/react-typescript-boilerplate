/* eslint-disable @typescript-eslint/no-var-requires */
const path = require('node:path');

const CircularDependencyPlugin = require('circular-dependency-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');

const packageJson = require('./package.json');
/* eslint-enable @typescript-eslint/no-var-requires */

const webpackCommonConfig = {
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
        new HtmlWebpackPlugin({
            template: './src/index.html',
            title: packageJson.name
        }),

        new CircularDependencyPlugin({
            exclude: /node_modules/,
            include: /src/,
            failOnError: true,
            allowAsyncCycles: false,
            cwd: process.cwd()
        })
    ],
    optimization: {
        emitOnErrors: false,
        splitChunks: {
            chunks: 'all'
        }
    },
    performance: {
        hints: false
    }
};

module.exports = webpackCommonConfig;
