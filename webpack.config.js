var webpack = require('webpack');
var Path = require('path');
module.exports = {
    entry: ['./app/main.js'],
    output: {
        path: Path.join(__dirname, './build'),
        filename: 'bundle.js'
    },
    resolve: {
        extensions: ['', '.js', '.jsx']
    },
    module: {
        loaders: [{
            test: /\.jsx?$/,
            exclude: /node_modules/,
            loader: 'babel-loader',
            query: {
                presets: ['react', 'es2015']
            }
        },{
          test:/\.css$/,
          loader:'style!css'
        }]
    }
};