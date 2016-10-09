var webpack = require('webpack');
var Path = require('path');
module.exports = {
    entry: ['./app/main.js'],
    output: {       
        path: Path.resolve(__dirname, './build'),
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
    },
    devServer: {
        hot: true,
        inline: true,
        port: 8080,
        host: '192.168.1.51',
        contentBase:'./build'
    }
};












