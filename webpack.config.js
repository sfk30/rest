const path = require('path')
const htmlWebpackPlugin = require('html-webpack-plugin')

module.exports = {
    entry: './src/index.js', 
    output: {
        filename: 'main.js',
        path: path.resolve(__dirname, 'dist'),
        clean: true
    },
    module: {
        rules: [
            {
                test: /\.css$/i,
                use: ['style-loader','css-loader'],
            },
        ],
    },
    devtool : 'inline-source-map',
    plugins: [
        new htmlWebpackPlugin({
            template: './src/index.html',
            filename: 'index.html',
            inject: 'body'
        })
    ]
}