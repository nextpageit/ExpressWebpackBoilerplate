const path = require('path');
const webpack = require('webpack');
const CleanWebpackPlugin = require('clean-webpack-plugin')
const UglifyJsPlugin = require('uglifyjs-webpack-plugin');
const nodeExternals = require('webpack-node-externals'); //include this

// the path(s) that should be cleaned
let pathsToClean = [
    'dist'
  ]
  
 
module.exports = {
    entry: './app.js',
    target: 'node',
    output: {
      path: path.resolve(__dirname, 'dist'),
      filename: 'bundle.js',
      publicPath: '/dist'
    },
    module:{
        rules: [
            {
                test: /\.js$/,
                loader: 'babel-loader',
                include: [
                    __dirname
                ]
            }
        ]
    },
    resolve: {
        modules: [__dirname, 'node_modules']
    },
    plugins:[
        new CleanWebpackPlugin(pathsToClean),
        new UglifyJsPlugin({
            // ...
        })
    ]
  };