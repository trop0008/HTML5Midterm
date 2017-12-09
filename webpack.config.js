var path = require("path");
var HtmlWebpackPlugin = require("html-webpack-plugin");
var ExtractTextPlugin = require("extract-text-webpack-plugin");

var webpackConfig = {
    entry: __dirname + "/src/js/index.js",
    output: {
        path: __dirname + "/dist",
        filename: "bundle.js"
    },
    devtool: "source-map",
    module: {
        loaders: [
            {
                test: /\.jsx?$/, // Match both .js and .jsx
                use: "babel-loader"
            },
            {
                test: /\.jsx?$/,
                use: "eslint-loader",
                exclude: /node_modules/
            },
            {
                test: /\.scss$/,
                use: ExtractTextPlugin.extract(["css-loader", "sass-loader"])
            },
            {
                test: /\.(svg|gif|png|eot|woff|ttf)$/,
                use: "url-loader"
            }
        ]
    },
    plugins: [
        new HtmlWebpackPlugin({
            author: "Marjan Tropper",
            date: "2017",
            title: "Contact List",
            template: "src/index.ejs"
        }),
        new ExtractTextPlugin({
            filename: "main.css",
            allChunks: true
        })
    ],
    devServer: {
        contentBase: path.join(__dirname, "dist")
    },
};

module.exports = webpackConfig;