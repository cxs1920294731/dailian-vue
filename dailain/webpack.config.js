var webpack = require('webpack');
var path = require("path");
var CommonsChunkPlugin = require("webpack/lib/optimize/CommonsChunkPlugin");
var ExtractTextPlugin = require("extract-text-webpack-plugin");
var HtmlWebpackPlugin = require('html-webpack-plugin');
var projectRoot = path.resolve(__dirname, '../');
var utils = require('./build/utils');

module.exports = {
  devServer: {
    disableHostCheck: true
  },
  resolve: {
    extensions: ['', '.js', '.coffee', '.html', '.css', '.scss', 'vue'],
    alias: {
      //注册模块，以后用的时候可以直接requier("模块名")
      'util': path.join(__dirname, "./src/common/util.js"),
      'jQuery': path.join(__dirname, "./assets/js/jquery-3.1.1.min.js"),
      'vue$': 'vue/dist/vue.js'
    }
  },

  entry: {
    main: './src/main.js',
    lib: [
      'jQuery',
    ]
  },

  output: {
    path: "dist",
    //publicPath: '/m_minigame/web/dist/',
    publicPath: '/dist/',
    filename: '[name].js?[hash]'
  },

  module: {
      loaders: [
        {
          test: /\.vue$/,
          loader: 'vue-loader'
        },
        {
          test:/\.css$/, loader: ExtractTextPlugin.extract("style-loader", "css-loader")
        },
        {
          test: /\.js$/,
          exclude: /node_modules/,
          include: projectRoot,
          loader: 'babel'
        },
        {
        test: /\.(png|jpe?g|gif|svg)(\?.*)?$/,
        loader: 'url',
          query: {
            limit: 10000,
            name: utils.assetsPath('img/[name].[hash:7].[ext]')
          }
        },
        {
          test: /\.(woff2?|eot|ttf|otf)(\?.*)?$/,
          loader: 'url',
          query: {
            limit: 10000,
            name: utils.assetsPath('fonts/[name].[hash:7].[ext]')
          }
        }
      ]
  },
  plugins: [
    new ExtractTextPlugin('styles.css?[hash]'),
    new HtmlWebpackPlugin({
      filename: '../index.html',
      template: './index.html.tpl',
      inject: true
    })
  ]
}

if (process.env.NODE_ENV === 'production') {
  //module.exports.output.publicPath = './'
  module.exports.plugins = [
    new ExtractTextPlugin('styles.css?[hash]'),
    new webpack.DefinePlugin({
      'process.env': {
        NODE_ENV: '"production"'
      }
    }),
    new webpack.optimize.UglifyJsPlugin({
      compress: {
        warnings: false
      }
    }),
    new webpack.optimize.OccurenceOrderPlugin(),
    new CommonsChunkPlugin('common.js', ['main']),
    new HtmlWebpackPlugin({
      filename: '../index.html',
      template: './index.html.tpl',
      inject: true
    })
  ]
} else {
  module.exports.devtool = '#source-map'
}