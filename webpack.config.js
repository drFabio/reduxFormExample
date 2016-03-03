'use strict';
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const webpack = require('webpack');
const path = require('path');
const merge = require('webpack-merge');
const PATHS = {
  app: path.join(__dirname, 'src/main.jsx'),
  build: path.join(__dirname, 'build/')
};
const STYLES_PATH = path.resolve(__dirname, 'src/styles/');
const common  = {
    entry:  PATHS.app,
    devtool: 'source-map',
    output: {
        filename: 'resources/bundle.js',
        path: PATHS.build,
        sourceMapFilename: '[file].map'
    },
    module: {
        loaders: [
            {
                test: /\.jsx?$/,
                exclude: /(node_modules|bower_components)/,
                loader: 'babel-loader'
            },
            { test: /\.json$/, loader: 'json' }
        ]
    },
    resolve: {
        extensions: ['', '.js', '.jsx'],
        alias:{
          'styles':'./src/styles/'
        }
    },
    'plugins':[
      new HtmlWebpackPlugin({
        template: 'src/index.tpl.html',
        inject: 'body',
        filename: 'index.html'
      })
    ],
    externals: {
        // Use external version of React and so on
        'react': 'React',
        'react-dom': 'ReactDOM',
        'redux':'Redux',
        'react-redux': 'ReactRedux',
        'immutable': 'Immutable'
    },
}
const TARGET = process.env.npm_lifecycle_event;
if(TARGET === 'example' || !TARGET) {
  //If on example or default we run dev_server with hot reloading
  let config = {
    module: {

        'loaders':[
            {
                test: /\.scss$/,
                loaders: ['style', 'css', 'sass?includePaths[]='+ STYLES_PATH]
            },
            {
                test: /\.css$/,
                loaders: ['style', 'css']
            },
        ]

    },
        //Data that dev server will consume
     devServer: {
      contentBase: PATHS.build,
      historyApiFallback: true,
      devtool: 'source-map', 
      hot: true,
      inline: true,
      progress: true,
      stats: 'errors-only',
      host: process.env.HOST || '0.0.0.0',
      port: process.env.PORT || '8080'
    },
    'plugins':[
        new webpack.HotModuleReplacementPlugin()
    ]
  };
  module.exports = merge(common, config);
}

if(TARGET === 'build' || TARGET === 'build:min') {
    //If on build we extract everything
    let config = {
        'module':{
            'loaders':[
                { test: /\.scss$/,
                loader: ExtractTextPlugin.extract('style', 'css!sass?includePaths[]='+ STYLES_PATH) },
                { test: /\.css$/,
                loader: ExtractTextPlugin.extract('style', 'css') },
            ],
        },
        plugins: [
            new ExtractTextPlugin('resources/style.css', {allChunks: true})
        ]
    }
    if(TARGET === 'build:min'){
      config.plugins=[
        new webpack.optimize.UglifyJsPlugin({minimize: true}),
        new ExtractTextPlugin('resources/style.min.css', {allChunks: true})
      ];
      config['output']={
        filename: 'resources/bundle.min.js'
      }
    }
    module.exports = merge(common, config);
}

