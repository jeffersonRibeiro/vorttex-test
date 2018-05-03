const HtmlWebpackPlugin = require('html-webpack-plugin');
const StyleLintPlugin = require('stylelint-webpack-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const webpack = require('webpack');

const path = require('path');

const rootDir = path.resolve(__dirname, '..');
const srcDir = path.resolve(__dirname, '../src/');

module.exports = {
  entry: {
    index: path.resolve(srcDir, 'index'),
  },
  output: {
    path: path.resolve(rootDir, 'build-dev'),
    filename: '[name].bundle.js',
  },
  resolve: {
    modules: [
      path.resolve(rootDir, 'src/'),
      'node_modules'
    ],
    extensions: ['.js', '.jsx'],
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        loader: 'babel-loader',
      },
      {
        test: /\.jsx$/,
        loader: 'eslint-loader',
        exclude: /node-modules/,
        enforce: 'pre',
        options: {
          emitWarning: true,
        },
      },
      {
        test: /\.css$/,
        include: /node-modules/,
        use: [
          'style-loader',
          'css-loader',
        ],
      },
      {
        test: /\.scss$/,
        include: srcDir,
        use: [
          'style-loader',
          'css-loader',
          'sass-loader',
        ],
      },
      {
        exclude: [
          /\.html$/,
          /\.jsx?$/,
          /\.scss$/,
          /\.css$/,
        ],
        loader: 'url-loader',
        options: {
          limit: 10000,
          name: 'data/[name].[ext]',
        },
      },
    ],
  },
  plugins: [
    new webpack.optimize.CommonsChunkPlugin({
      name: 'vendor',
      filename: 'vendor.bundle.js',
      minChunks: function (module) {
        return module.context && module.context.indexOf("node_modules") !== -1;
      },
    }),
    new CleanWebpackPlugin(['build-dev'], {
      root: rootDir,
      verbose: true
    }),
    new HtmlWebpackPlugin({
      template: path.resolve(srcDir, 'index.html'),
      chunks: ['vendor', 'index'],
    }),
    new StyleLintPlugin({
      emitErrors: false,
      quiet: false,
    }),
    new webpack.optimize.UglifyJsPlugin({
      output: {
        comments: false
      },
      mangle: false,
      sourceMap: true,
      compress: false,
      beautify: true,
    }),
  ],
  devServer: {
    contentBase: path.resolve(rootDir, 'build-dev'),
    historyApiFallback: true,
  },
  devtool: 'eval-source-map',
};
