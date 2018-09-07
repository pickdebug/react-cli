var path = require('path');
module.exports = {
    entry: ['./dev/js/index/comps/main.jsx'],
    output: {
        path: __dirname,
        filename: './dev/js/index/index.js'
    },
    module: {
        rules: [{
            test: /\.js[x]?$/,
            exclude: /(node_modules|bower_components)/,
            loader: 'babel-loader',
            query: {
                presets: ['es2015','react']
            }
        },{
            test: /\.css$/,
            loader: 'style-loader',
        },{
            test: /\.css$/,
            loader: 'css-loader',
        },{
            test:/\.(png|jpg)$/,
            loader: 'url?limit=25000',
        }]
    }
}