const HtmlWebpackPlugin = require("html-webpack-plugin")
const path = require("path")
const webpack = require("webpack")
const CleanWebpackPlugin = require('clean-webpack-plugin');
module.exports = {
    mode: "development",
    devtool: "#source-map",
    entry: {
        app: "./index.js"
    },
    output: {
        path: path.resolve(__dirname, "./dist"),
        filename: "[name].js",
        chunkFilename: "[name].js",
        publicPath: "./"
    },
    resolve:{extensions: [".js", ".jsx", ".ts", ".tsx"]},
    module: {
        rules: [
            {test: /\.jsx?$/, loader: 'babel-loader'},
            {test: /\.tsx?$/, loader: 'ts-loader'},
        ],
    },
    plugins: [
        new HtmlWebpackPlugin({
			template: 'index.html'
        }),
        // new webpack.DefinePlugin({
        //     'process.env.NODE_ENV': JSON.stringify('"development'),
        // }),
        // new CleanWebpackPlugin(['dist']),
        new webpack.HotModuleReplacementPlugin(),
    ],
    devServer: {
        port: 8081,
        contentBase: path.resolve(__dirname, "./dist"),
        // open: true,
        historyApiFallback: {
            rewrites: [
                {from: /app\.js$/, to: "/app.js"},
                {from : "/*", to: "/index.html"}
            ]
        }
    },
    watchOptions: {
		ignored: /node_modules/
	}
}