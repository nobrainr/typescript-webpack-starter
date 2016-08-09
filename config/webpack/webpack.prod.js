const webpack = require('webpack');
const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

var config = {
    devtool: 'source-map',
    context: path.resolve('./src'),
    entry: {
        app: './index.ts',
        vendor: './vendor.ts'
    },
    output: {
        path: path.resolve('./dist'),
        filename: '[name].bundle.js',
        sourceMapFilename: '[name].map',
        devtoolModuleFilenameTemplate: function (info) {
            return "file:///" + info.absoluteResourcePath;
        }
    },
    module: {
        preLoaders: [
            { test: /\.ts$/, exclude: ["node_modules"], loader: "tslint" }
        ],
        loaders: [
            { test: /\.ts$/, exclude: ["node_modules"], loader: 'ts-loader' },
            { test: /\.html$/, loader: "html" },
            { test: /\.css$/, loaders: ['style', 'css'] }
        ]
    },
    resolve: {
        extensions: ["", ".ts", ".js"],
        modules: [path.resolve('./src'), 'node_modules']
    },
    plugins: [
        new HtmlWebpackPlugin({
            title: 'Typescript Webpack Starter',
            template: '!!ejs-loader!src/index.html'
        }),
        new webpack.optimize.CommonsChunkPlugin({
            name: 'vendor',
            minChunks: Infinity,
            filename: 'vendor.bundle.js'
        }),
        new webpack.optimize.UglifyJsPlugin({
            compress: { warnings: false },
            output: { comments: false },
            sourceMap: true
        }),
    ],
    tslint: {
        emitErrors: false,
        failOnHint: false
    },
};

module.exports = config;