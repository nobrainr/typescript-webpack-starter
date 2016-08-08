var path = require("path");
var webpack = require("webpack");

var config = {

    entry: {
        'vendor': './src/vendor.ts',
        'app': './src/index.ts'
    },
    debug: true,
    devtool: 'source-map',
    output: {
        path: path.resolve("dist"),
        filename: '[name].bundle.js',
        sourceMapFilename: '[name].map',
        devtoolModuleFilenameTemplate: function (info) {
            return "file:///" + info.absoluteResourcePath;
        }
    },
    tslint: {
        emitErrors: false,
        failOnHint: false,
        resourcePath: 'src'
    },
    resolve: {
        extensions: ["", ".ts", ".js"]
    },
    module: {
        preLoaders: [
            { test: /\.ts$/, exclude: ["node_modules"], loader: "tslint" }
        ],
        loaders: [
            { test: /\.ts$/, exclude: ["node_modules"], loader: 'ts-loader' },
            { test: /\.html$/, loader: "html" },
            { test: /\.css$/, loader: "style-loader!css-loader" }
        ]
    }
};

module.exports = config;