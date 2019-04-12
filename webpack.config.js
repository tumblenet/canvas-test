var path = require('path');
var webpack = require('webpack');
var BrowserSyncPlugin = require('browser-sync-webpack-plugin')
module.exports = {
    mode: 'development',
    devtool:'source-map',
    entry: ['./src/app.ts'],
    output: {
        path: path.resolve(__dirname, 'js'),
        filename: 'app.js'
    },
    module: {
        rules: [{
            test: /\.ts$/,
            include: path.resolve(__dirname, "src"),
            loader: 'ts-loader'
        }]
    },
    resolve: {
        extensions: [".webpack.js", ".web.js", ".ts", ".js"]
    },
    plugins: [
        /*new BrowserSyncPlugin({
            host: 'localhost',
            port: 3000,
            //reload: false,
            server: {baseDir:['./']}
            //startPath: "/"
        })*/
    ],
    watch:true
}