import { LoaderOptionsPlugin, Configuration, RuleSetRule } from 'webpack';
import { resolve, join } from 'path';
import * as HtmlWebpackPlugin from 'html-webpack-plugin';

const DEV_ENV = 'development';

const NODE_ENV = process.env.NODE_ENV ? process.env.NODE_ENV : DEV_ENV;

// Plugins
const plugins = [
  NODE_ENV === DEV_ENV
    ? new HtmlWebpackPlugin({
        title: 'Typescript Webpack Starter',
        template: '!!ejs-loader!src/index.html'
      })
    : null,
  new LoaderOptionsPlugin({
    options: {
      tslint: {
        emitErrors: true,
        failOnHint: true
      }
    }
  })
].filter(Boolean);

// Loaders Rules
const typescriptRule: RuleSetRule = {
  enforce: 'pre',
  test: /\.ts?$/,
  exclude: ['node_modules'],
  use: ['awesome-typescript-loader']
};
const htmlRule: RuleSetRule = { test: /\.html$/, loader: 'html-loader' };

// Webpack configuration
const config = {
  mode: NODE_ENV,
  context: resolve('./src'),
  entry: {
    main: './index.ts'
  },
  devtool: 'inline-source-map',
  output: {
    path: resolve('./dist'),
    filename: 'index.js'
  },
  module: {
    rules: [typescriptRule, NODE_ENV === DEV_ENV ? htmlRule : null].filter(Boolean)
  },
  resolve: {
    extensions: ['.ts', '.js']
  },
  plugins: plugins,
  devServer: {
    contentBase: join(__dirname, 'dist/'),
    compress: true,
    port: 3000,
    hot: true
  }
};

export default config;
