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
        new webpack.DefinePlugin({
            'process.env': {
                NODE_ENV: '"production"'
            }
        }),

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
});

module.exports = devWebpackConfig;