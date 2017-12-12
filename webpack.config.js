const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    context: path.join(__dirname, 'src', 'app'),
    entry: [
        './index.js',
    ],
    output: {
        path: path.join(__dirname, 'dist', 'static'),
        filename: '[hash].js',
    },
    module: {
        rules: [
            {
                test: /\.js$/,
                exclude: /node_modules/,
                use: ['babel-loader'],
            },
        ],
    },
    plugins: [new HtmlWebpackPlugin()],
};