const path = require('path');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const webpack = require('webpack');
const CompressionWebpackPlugin = require('compression-webpack-plugin');
const TerserPlugin = require('terser-webpack-plugin');
const { WebpackManifestPlugin } = require('webpack-manifest-plugin');

require('dotenv').config();

const isDev = (process.env.ENV === 'development');
const entry = ['./src/frontend/index.js'];

if (isDev) {
  entry.push('webpack-hot-middleware/client?path=/__webpack_hmr&tyimeout=2000&reload');
}

module.exports = {
  mode: process.env.ENV,
  entry,
  output: {
    path: path.resolve(__dirname, 'src/server/public'),
    filename: isDev ? 'assets/app.js' : 'assets/app-[fullhash].js',
    publicPath: '/',
  },
  optimization: {
    minimize: true,
    minimizer: [new TerserPlugin()],
    splitChunks: {
      chunks: 'async',
      cacheGroups: {
        vendors: {
          name: 'vendors',
          chunks: 'all',
          reuseExistingChunk: true,
          priority: 1,
          filename: isDev ? 'assets/vendor.js' : 'assets/vendor-[fullhash].js',
          enforce: true,
          test(module, chunks) {
            const name = module.nameForCondition && module.nameForCondition();
            return (chunk) => chunk.name !== 'vendors' && /[\\/]node_modules[\\/]/.test(name);
          },
        },
      },
    },
  },
  resolve: {
    extensions: ['.js', '.jsx'],
  },
  module: {
    rules: [
      {
        enforce: 'pre',
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        loader: 'eslint-loader',
      },
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: [
          {
            loader: 'babel-loader',
          },
        ],
      },
      {
        test: /\.(s*)css$/,
        use: [
          {
            loader: MiniCssExtractPlugin.loader,
          },
          'css-loader',
          'sass-loader',
        ],
      },
      {
        test: /\.(png|gf|jpg)$/,
        use: [
          {
            loader: 'file-loader',
            options: {
              name: 'assets/[hash].[ext]',
            },
          },
        ],
      },
    ],
  },
  plugins: [
    isDev ? new webpack.HotModuleReplacementPlugin() : () => {},
    isDev ? () => {} :
      new CompressionWebpackPlugin({
        test: /\.js$|\.css$/,
        filename: '[path][base].gz',
      }),
    new MiniCssExtractPlugin({
      filename: isDev ? 'assets/app.css' : 'assets/app-[fullhash].css',
    }),
    isDev ? () => {} : new WebpackManifestPlugin(),
  ],
  devServer: {
    static: {
      directory: path.join(__dirname, 'dist'),
    },
    compress: true,
    historyApiFallback: true,
    port: 9000,
    open: true,
  },
};
