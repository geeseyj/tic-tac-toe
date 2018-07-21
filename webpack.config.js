var webpack = require( 'webpack' );

var path = require( 'path' );

module.exports = {
    entry: './src/js/main.js',
    output: {
        path: path.resolve(__dirname, './dist'),
        filename: 'bundle.js',
    },
    mode: 'none',
    module: {
        rules:[
            {
                test: /\.s[ac]ss$/,
                loader: [ 'style-loader', 'css-loader', 'sass-loader' ],
            },
            {
                test: /\.js$/,
                exclude: /node_modules/ ,
                loader: 'babel-loader',
            }
        ],
    },
};