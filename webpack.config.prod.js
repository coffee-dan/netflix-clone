const path = require("path")
const { CleanWebpackPlugin } = require("clean-webpack-plugin")
const HtmlWebpackPlugin = require("html-webpack-plugin")

module.exports = {
    "mode": "production",
    "devtool": "source-map",
    "entry": "./src/index.js",
    "output": {
        "filename": "[name].pack.js",
        "path": path.resolve(__dirname, "dist")
    },
    "plugins": [
        new CleanWebpackPlugin(),
        new HtmlWebpackPlugin({
            filename: "index.html",
            inject: true,
            template: path.resolve(__dirname, "index.html")
        })
    ],
    "module": {
        "rules": [
            {
            "use": {
                "loader": "babel-loader",
                "options": {
                "presets": [
                    "@babel/preset-env",
                    "@babel/preset-react"
                ]
                }
            },
            "exclude": /node_modules/,
            "test": /\.js$/
            }
        ]
    }
};