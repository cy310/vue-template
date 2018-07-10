const webpack = require('webpack')
const webpackConfig = require('./webpack.prod.conf')

webpack(webpackConfig , (err, stats) => {
    process.stdout.write(stats.toString({
        colors: true,
        modules: false,
        children: false,
        chunks: false,
        chunkModules: false
    }))
});