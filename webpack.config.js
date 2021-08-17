const path = require('path');

const HtmlWebpackPlugin = require('html-webpack-plugin');
const webpack = require('webpack')
const { VueLoaderPlugin } = require('vue-loader');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin')
const utils = require('./build/utils')
const config = require('./config')

const cwd = process.cwd();
// const outputPath = path.join(cwd, 'build');
const outputPath = config.build.assetsRoot;

module.exports = {
  context: path.resolve(cwd, './'),
  entry: ['./src/main.js'],
  output: {
    // path: outputPath,
    path: config.build.assetsRoot,
    publicPath: '/',
    pathinfo: false,
  },
  resolve: {
    extensions: ['.ts', '.vue', '.tsx', '.js', '.json', '.mjs'],
    fallback: {
      fs: false,
      net: false,
      path: require.resolve('path-browserify'),
      http: require.resolve('stream-http'),
      https: require.resolve('https-browserify'),
      os: require.resolve('os-browserify/browser'),
      "crypto": require.resolve("crypto-browserify"),
      "stream": require.resolve("stream-browserify"),
      "assert": require.resolve("assert/")
    },
    alias: {
      'vue$': 'vue/dist/vue.esm.js',
      '@': path.join(cwd, './src'),
      '@js': path.join(cwd, './src/assets/js'),
      '@components': path.join(cwd,'./src/components'),
    }
  },
  module: {
    rules: [
      {
        test: /\.vue$/,
        loader: 'vue-loader',
      },
      {
        test: /\.scss$/,
        use: [
          'vue-style-loader',
          'css-loader',
          'sass-loader'
        ]
      },
      {
        test: /\.less$/,
        use: [
          'vue-style-loader',
          'css-loader',
          'less-loader'
        ]
      },
      {
        test: /\.styl(us)?$/,
        use: [
          'vue-style-loader',
          'css-loader',
          'stylus-loader'
        ]
      },
      {
        test: /\.css$/,
        use: [
          'vue-style-loader',
          {
            loader: 'css-loader',
            options: { importLoaders: 1 }
          },
          'postcss-loader'
        ]
      },
      {
        test: /\.(js|jsx|ts|tsx)?$/,
        exclude: [/node_modules/],
        use: ['babel-loader?cacheDirectory'],
      },
      {
        test: /\.(png|jpe?g|gif|svg)(\?.*)?$/,
        loader: 'url-loader',
        options: {
          limit: 10000,
          name: utils.assetsPath('img/[name].[hash:7].[ext]'),
          esModule: false
        }
      },
      {
        test: /\.(mp4|webm|ogg|mp3|wav|flac|aac)(\?.*)?$/,
        loader: 'url-loader',
        options: {
          limit: 10000,
          name: utils.assetsPath('media/[name].[hash:7].[ext]')
        }
      },
      {
        test: /\.(woff2?|eot|ttf|otf)(\?.*)?$/,
        loader: 'url-loader',
        options: {
          limit: 10000,
          name: utils.assetsPath('fonts/[name].[hash:7].[ext]'),
          publicPath: '/'
        }
      },
    ],
  },
  plugins: [
    new VueLoaderPlugin(),
    new HtmlWebpackPlugin({
      template: './index.html',
    }),
    new webpack.DefinePlugin({
      'process.env': require('./config/dev.env'),
    }),
    // extract css into its own file
    new MiniCssExtractPlugin({filename: utils.assetsPath('css/[name].[contenthash].css')}
    ),
    // new webpack.ProvidePlugin({
    //   Buffer: ['buffer', 'Buffer'],
    // })
    // copy custom static assets
    new CopyWebpackPlugin(
        {
          patterns: [
            {
              from: path.resolve(__dirname, './src/assets/js/charting_library/static'),
              to: config.build.assetsSubDirectory+'/charting_library/static',
              globOptions: {
                ignore: [
                  '.*'
                ]}
            },
            {
              from: path.resolve(__dirname, './favicon.ico'),
              to: config.build.assetsRoot,
            }
          ]
        }
    )
  ],
};
