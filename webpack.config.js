const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

const staticPath = path.join(__dirname, 'dist', 'static');

module.exports = {
    context: path.join(__dirname, 'src', 'app'),
    entry: {
        admin: './admin/index.js',
        front: './front/index.js',
    },
    output: {
        path: staticPath,
        filename: '[name]/[hash].js',
    },
    module: {
        rules: [
            {
                test: /\.js$/,
                exclude: /node_modules/,
                use: ['babel-loader'],
            },
            {
                test: /\.html$/,
                use: ['html-loader'],
            },
        ],
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: path.join(__dirname, 'src', 'app', 'admin', 'index.html'),
            filename: path.join(staticPath, 'admin', 'index.html'),
            chunks: ['admin'],
        }),
        new HtmlWebpackPlugin({
            template: path.join(__dirname, 'src', 'app', 'front', 'index.html'),
            filename: path.join(staticPath, 'index.html'),
            chunks: ['front'],
        })
    ],
};