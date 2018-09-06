module.exports = {
    entry: './entry.js',
    output: {
        path: __dirname,
        filename: 'bundle.js',
    },
    module: {
        rules: [
            {test: /\.css$/, use: 'style-loader'},
            {test: /\.css$/, use: 'css-loader'},
        ]
    }
}