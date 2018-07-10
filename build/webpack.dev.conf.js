const webpack = require('webpack');
const path = require('path');
const merge = require('webpack-merge');
const baseWebpackConfig = require('./webpack.base.conf');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const ExtractTextPlugin = require('extract-text-webpack-plugin')

var devWebpackConfig = merge(baseWebpackConfig, {
    entry: [
        './src/index.js',
        'webpack/hot/only-dev-server'
    ],
    output: {
        path: path.join(__dirname, 'vue-template/'),
        filename: '[name].js',
    },
    devServer: {
        contentBase: "./",
        historyApiFallback: true,
        port: 9000,
        hot: true,
        inline: true // 实时刷新
    },
    plugins: [
        new webpack.HotModuleReplacementPlugin(),
        new webpack.NoEmitOnErrorsPlugin(),
        // Webpack压缩代码的时候，React官方提供的代码已经是合并的, 可以通过以下插件优化
        new webpack.DefinePlugin({
            'process.env': {
                NODE_ENV: '"production"'
            }
        }),
        /* new webpack.optimize.UglifyJsPlugin({
             compress: {
                 warnings: false
             }
         }),*/
        new HtmlWebpackPlugin({
            filename: 'index.html',
            template: './index.html',
            // template: './src/h5.html',
            minify: { //压缩HTML文件
                removeComments: true, //移除HTML中的注释
                collapseWhitespace: true //删除空白符与换行符
            },
            hash: true,
        }),
        new ExtractTextPlugin("[name].css"),
    ]
})

    // output: {
    //     path: path.join(__dirname, 'coupon/'),
    //     filename: '[name].js',
    // },
    // module: {
    //     loaders: [{
    //         test: /\.vue$/,
    //         loader: 'vue-loader',
    //     },
    //         {
    //             test: /\.js$/,
    //             loader: 'babel-loader',
    //             exclude: /node_modules/,
    //             query: {
    //                 presets: ['env'] // es2015 处理 ES6 语法
    //             }
    //         },
    //         {
    //             test: /\.(png|jpg|gif)$/,
    //             loader: 'url-loader',
    //             options: {
    //                 limit: 8192
    //             }
    //         },
    //         {
    //             test: /\.css$/,
    //             use: ExtractTextPlugin.extract({ fallback: "style-loader", use: ["css-loader"] })
    //         }
    //     ],
    // },


    // plugins: [
    //     new webpack.HotModuleReplacementPlugin(),
    //     new webpack.NoEmitOnErrorsPlugin(),
    //     // Webpack压缩代码的时候，React官方提供的代码已经是合并的, 可以通过以下插件优化
    //     new webpack.DefinePlugin({
    //         'process.env': {
    //             NODE_ENV: '"production"'
    //         }
    //     }),
    //     /* new webpack.optimize.UglifyJsPlugin({
    //          compress: {
    //              warnings: false
    //          }
    //      }),*/
    //     new HtmlwebpackPlugin({
    //         filename: 'index.html',
    //         template: './index.html',
    //         // template: './src/h5.html',
    //         minify: { //压缩HTML文件
    //             removeComments: true, //移除HTML中的注释
    //             collapseWhitespace: true //删除空白符与换行符
    //         },
    //         hash: true,
    //     }),
    //     new ExtractTextPlugin("[name].css"),
    // ]


module.exports = devWebpackConfig;