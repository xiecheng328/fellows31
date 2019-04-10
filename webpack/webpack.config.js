const path = require('path');
const glob = require('glob');
const HtmlPlugin = require('html-webpack-plugin');
const ExtractTextPlugin = require("extract-text-webpack-plugin");
const PurifyCSSPlugin = require('purifycss-webpack');
const webpack = require('webpack');
const entry = require('./entry');
const CopyWebpackPlugin = require('copy-webpack-plugin');
module.exports = {
    mode: 'development',
    entry: entry,
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: '[name].js'
    },
    module: {
        rules: [{
                test: /\.css$/,
                // use:['style-loader','css-loader']
                use: ExtractTextPlugin.extract({
                    fallback: "style-loader",
                    use: [{
                        loader:"css-loader",
                        options: { importLoaders: 1 }
                    },"postcss-loader"]
                })
            },
            {
                test:/\.scss$/,
                // use:['style-loader','css-loader','sass-loader']
                use: ExtractTextPlugin.extract({
                    fallback: "style-loader",
                    use: ["css-loader","sass-loader"]
                })
            },
            {
                test: /\.(jpg|png|gif)$/,
                use: [{
                    loader: 'url-loader',
                    options: {
                        limit: 500,
                        outputPath: 'images/'
                    }
                }]
            },{
                test:/\.(htm|html)/i,
                use:['html-withimg-loader']
            },{
                test:/\.js$/,
                use:[{
                    loader:"babel-loader",
                    options:{
                        presets:["@babel/preset-env"]
                    }
                }],
                exclude:/node_modules/
            }
        ]
    },
    plugins: [
        new HtmlPlugin({
            filename: 'xx.html',
            minify: {
                removeAttributeQuotes: true
            },
            template: './src/index.html',
            hash: true
        }),
        new ExtractTextPlugin('index.css'),
        new PurifyCSSPlugin({
            // Give paths to parse for rules. These should be absolute!
            paths: glob.sync(path.join(__dirname, 'src/*.html')),
          }),
        new webpack.BannerPlugin("唯创所有！！"),
        new CopyWebpackPlugin([{
            from:'./src/public',
            to:'public'
        }])
    ],
    devServer: {
        contentBase: path.resolve(__dirname, 'dist'),
        host: 'localhost',
        compress: true,
        port: 8081,
        open: true
    }
}