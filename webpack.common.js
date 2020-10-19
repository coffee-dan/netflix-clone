const path = require("path")
const { CleanWebpackPlugin } = require("clean-webpack-plugin")
const HtmlWebpackPlugin = require("html-webpack-plugin")

module.exports = {
    entry: "./src/index.js",
    output: {
        path: path.resolve(__dirname, "dist"),
        filename: "[name].pack.js"
    },
    plugins: [
        new CleanWebpackPlugin(),
        new HtmlWebpackPlugin({
            filename: "index.html",
            favicon: 'favicon.ico',
            inject: true,
            template: path.resolve(__dirname, "index.html")
        })
    ],
    module: {
        rules: [
            {
                test: /\.js$/,
                use: {
                    loader: "babel-loader",
                    options: {
                        presets: [
                            "@babel/preset-env",
                            "@babel/preset-react"
                        ]
                    }
                },
                exclude: /node_modules/
            },
            {
                test: "/\.(png|jpe?g|gif|ico)$/i",
                use: [
                    {
                        loader: "file-loader"
                    }
                ]
            }
        ]
    }
};