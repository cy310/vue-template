const ExtractTextPlugin = require('extract-text-webpack-plugin');

var config = {
    module: {
        loaders: [{
            test: /\.vue$/,
            loader: 'vue-loader',
        },
            {
                test: /\.js$/,
                loader: 'babel-loader',
                exclude: /node_modules/,
                query: {
                    presets: ['env'] // es2015 处理 ES6 语法
                }
            },
            {
                test: /\.(png|jpg|gif)$/,
                loader: 'url-loader',
                options: {
                    limit: 8192,
                    outputPath: "image/"
                }
            },
            {
                test: /\.(mp4|webm|ogg|mp3|wav|flac|aac)(\?.*)?$/,
                loader: 'url-loader',
                options: {
                    limit: 10000,
                    name: '/[name].[hash].[ext]',
                    outputPath: 'media/'
                }
            },
            {
                test: /\.(eot|svg|ttf|woff|woff2)$/,
                loader: 'file-loader',
                options: {
                    name: '[hash].[ext]',
                    // outputPath: 'css/',
                }
            },
            {
                test: /\.css$/,
                use: ExtractTextPlugin.extract({
                    fallback: "style-loader",
                    use: [{
                        loader: "css-loader",
                        options: {
                            minimize: true
                        }
                    },]
                }),
            }
        ]
    }
};

module.exports = config;