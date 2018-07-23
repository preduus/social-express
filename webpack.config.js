const webpack = require('webpack');
const path = require('path');

const config = {
    entry: './app/app.js',
    output: {
        path: path.resolve(__dirname, 'public'),
        filename: 'app.js'
    },
    module: {
        rules: [
            {
                test: /\.(js|scss|jsx)$/,
                exclude: /node_modules/,
                use: ['babel-loader']
            }
        ]
    },
};
module.exports = config;