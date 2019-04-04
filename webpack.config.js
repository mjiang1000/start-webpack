const webpackHtmlPlugin = require("webpack-html-plugin")
const path = require("path")
module.exports = {
    mode: "development",
    devtool: "source-map",
    entry: {
        app: "./index.js"
    },
    // output: "./dist",
    module: {
        rules: [
            {test: /\.jsx?$/, loader: 'babel-loader'},
            {test: /\.tsx?$/, loader: 'ts-loader'},
        ],
        noParse: /node_modules/
    },
    plugins: [
        new webpackHtmlPlugin({
            template: path.resolve(__dirname, "./index.html")
        })
    ],
    devServer: {
        port: 8081
    }
}