const path = require("path")
const HtmlWebpackPlugin = require("html-webpack-plugin")

module.exports = {
    entry: "./src/index.js",
    output: {
        path: path.resolve(__dirname, "dist"),
        filename: "[name].pack.js"
    },
    plugins: [
        new HtmlWebpackPlugin({
            filename: 'index.html',
            favicon: 'favicon.ico',
            inject: true,
            template: path.resolve(__dirname, "index.html")
        })
    ],
    module: {
        rules: [
            {
                test: /\.(png|jpe?g|gif|svg)$/,
                use: {
                    loader: 'file-loader',
                    options: {
                        name: '[name][hash].[ext]',
                        outputPath: 'images'
                    }
                }
                
            },
            {
                test: /\.js$/,
                exclude: /node_modules/,
                use: {
                    loader: "babel-loader",
                    options: {
                        presets: [
                            "@babel/preset-env",
                            "@babel/preset-react"
                        ]
                    }
                },
            },
        ]
    }
};
