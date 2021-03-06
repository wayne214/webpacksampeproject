const webpack = require('webpack');
/**
 * HtmlWebpackPlugin
 *这个插件的作用是依据一个简单的index.html模板，生成一个自动引用你打包后的JS文件的新index.html。
 * 这在每次生成的js文件名称不同时非常有用（比如添加了hash值）。
 *
 * */
const HtmlWebpackPlugin = require('html-webpack-plugin');
module.exports = {
    devtool: 'eval-source-map',

    entry: __dirname + "/app/main.js", // 唯一的入口文件
    output: {
        path: __dirname + "/build", // 打包后的文件存放的地方
        filename: "bundle.js" // 打包后输出文件的文件名
    },

    devServer: {
        contentBase: "./public", //本地服务器所加载的页面所在目录
        historyApiFallback: true, // 不跳转
        inline: true, // 实时刷新
        hot: true
    },

    module: {
        rules: [
            {
                test: /(\.jsx|\.js)$/,
                use: {
                    loader: "babel-loader",
                },
                exclude: /node_modules/
            },
            {
                test: /\.css$/,
                use: [{
                    loader: "style-loader"
                }, {
                    loader: "css-loader",
                    options: {
                        modules: true, // 指定启用css modules
                    }
                }, {
                    loader: "postcss-loader"
                }
                ]
            }
        ]
    },
    plugins: [
        new webpack.BannerPlugin('版权所有，翻版必究'),
        new HtmlWebpackPlugin({
            template: __dirname + "/app/index.tmpl.html" // new 一个这个插件的实例，并传入相关参数
        }),
        new webpack.HotModuleReplacementPlugin() // 热加载插件
    ],
};