const path = require('path');
const webpack = require('webpack');
const merge = require('webpack-merge');
const baseWebpackConfig = require('./webpack.base.conf');
const HtmlwebpackPlugin = require('html-webpack-plugin');
const UglifyJSPlugin = require('uglifyjs-webpack-plugin');
const ExtractTextPlugin = require('extract-text-webpack-plugin');

var prodWebpackConfig = merge(baseWebpackConfig, {
        entry: {
            'index': './src/index.js',
            'vendor': ['vue', 'axios', 'vue-router'],
        }, // 指定入口文件
        output: {
            path: path.join(__dirname, '../vue-template/'), // 打包输出的路径
            filename: 'js/[name].[chunkhash].js' // 输出名称
        },
        plugins: [
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
            new webpack.optimize.CommonsChunkPlugin({
                names: ['vendor', 'manifest'], // 指定模块的名称
                minChunks: Infinity
            }),
            new HtmlwebpackPlugin({ //首页
                filename: 'index.html',
                template: './index.html',
                minify: { //压缩HTML文件
                    removeComments: true, //移除HTML中的注释
                    collapseWhitespace: true //删除空白符与换行符
                },
                cache: true,
                hash: true,
                chunks: ['vendor', 'manifest', 'index']
            }),

            new UglifyJSPlugin({ //压缩代码
                mangle: {
                    except: ['$super', 'export', 'import', 'require']
                }
            }),
            new ExtractTextPlugin("css/[name].[contenthash].css"),
        ]
    }
);


module.exports = prodWebpackConfig;