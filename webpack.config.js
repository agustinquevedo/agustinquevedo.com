const HtmlWebPackPlugin = require("html-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const webpack= require("webpack")

module.exports = {
    module: {
        rules: [
            {
                test: /\.js$/,
                exclude: "/node_modules/",
                use: [ "babel-loader" ]
            },
            {
                test: /\.html$/,
                use: [
                    {
                        loader: "html-loader",
                        // options: { minimize: true }
                    } 
                ]
            },
            {
                test: /\.scss$/,
                use: [ "style-loader","css-loader", "sass-loader" ]
            },
            {
                test: /\.(png|svg|jpg|gif)$/,
                use: [ "file-loader" ]
            }
        ]
    },
    plugins: [
        new HtmlWebPackPlugin({
            template: "./src/index.html",
            filename: "./index.html"
        }),
        new MiniCssExtractPlugin({
            // Option similar to the same option in webpackOptions.output
            // both options are optional
            filename: "[name].css",
            chunkFilenmae: "[id].css"
        }),
        new webpack.ProvidePlugin({
            $: 'jquery',
            jQuery: 'jquery',
            "window.jQuery": "jquery"
          })
    ]
}