const HtmlWebpackPlugin = require("html-webpack-plugin")
const path = require("path")
const webpack = require("webpack")
const CleanWebpackPlugin = require('clean-webpack-plugin');
const host = "localhost"
const port = 8081
module.exports = {
    mode: "development",
    devtool: "#source-map",
    entry: {
        app: [`webpack-dev-server/client?http://${host}:${port}`, path.resolve(__dirname, "./index.js")],
        deferPage: [`webpack-dev-server/client?http://${host}:${port}`, path.resolve(__dirname, "./src/defer-and-async/js/index.js")]
    },
    output: {
        path: path.resolve(__dirname, "./dist"),
        filename: "[name].js",
        chunkFilename: "[name].js",
        publicPath: "/"
    },
    resolve:{extensions: [".js", ".jsx", ".ts", ".tsx"]},
    module: {
        rules: [
            {test: /\.jsx?$/, loader: 'babel-loader'},
            {test: /\.tsx?$/, loader: 'ts-loader'},
        ],
    },
    plugins: [
        // new CleanWebpackPlugin(),
        new HtmlWebpackPlugin({
            template: path.resolve(__dirname, "./src/defer-and-async/index.html"),
            chunks: ['deferPage'],
            filename: 'defer-and-async/index.html'
        }),
        new HtmlWebpackPlugin({
            template: 'index.html',
            chunks: ['app']
        }),
        // new webpack.DefinePlugin({
        //     'process.env.NODE_ENV': JSON.stringify('"development'),
        // }),
        // new webpack.HotModuleReplacementPlugin({}),
    ],
    devServer: {
        port: 8081,
        contentBase: path.resolve(__dirname, "./dist"),
        open: true,
        host,
        port,
        historyApiFallback: {
            rewrites: [
                {from: /app\.js$/, to: "/app.js"},
                {from : "/*", to: "/index.html"}
            ]
        },
        // hot: true,
    },
    watchOptions: {
        ignored: /node_modules/
	}
}