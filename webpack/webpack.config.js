const path = require('path');
const webpack = require("webpack");
const HtmlPlugin = require('html-webpack-plugin');
const ExtractTextPlugin = require("extract-text-webpack-plugin");
const glob = require('glob');
const PurifyCSSPlugin = require('purifycss-webpack');
const xx = require('./webpack_config/webpack_entry_config');
const CopyWebpackPlugin = require('copy-webpack-plugin');
module.exports = {
    mode: 'development', //production
    entry: xx,
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: '[name].js'
    },
    module: {
        rules: [{
                test: /\.css$/,
                //css-loader：用来将css插入到页面的style标签 style-loader：用来处理css文件中的url()等，url挂在到js中 
                // use:["style-loader","css-loader"]  
                use: ExtractTextPlugin.extract({
                    fallback: "style-loader",
                    use: [{
                        loader:"css-loader",
                        options:{importLoaders:1}

                    },'postcss-loader']
                })
            }, {
                test: /\.(jpg|png|gif)$/, //css中的图片打包
                use: [{
                    loader: "url-loader",
                    options: {
                        limit: 5000, //是把小于500000B的文件打成 Base64的格式，写入css。
                        outputPath: "img/"
                    }
                }]
            }, {
                test: /\.html$/i, //html中的图片打包
                loader: "html-withimg-loader"
            }, {
                test: /\.scss$/,
                // use: ['style-loader', 'css-loader', 'sass-loader']
                use: ExtractTextPlugin.extract({
                    use: ["css-loader", 'sass-loader'],
                    fallback: 'style-loader'
                })

            },{
                test:/\.js$/,
                use:[
                    {
                        loader:"babel-loader",
                        options:{
                            presets:['@babel/preset-env']
                        }
                    }
                ],
                exclude:/node_modules/

            }
            
        ],
    },

    plugins: [
        new webpack.HotModuleReplacementPlugin(),
        new HtmlPlugin({
            // minify:{
            //     removeAttributeQuotes:true
            // },去掉属性的双引号。 
            hash: true, //清除缓存
            template: "./src/test.html", //是要打包的html模 版路径和文件名称
            filename: "test.html" //使名字一致
        }),
        new ExtractTextPlugin("./index.css"), //把css分离出来
        new PurifyCSSPlugin({
            // Give paths to parse for rules. These should be absolute!
                paths: glob.sync(path.join(__dirname, 'src/*.html')),
            }),
            new webpack.BannerPlugin("唯创"),//打包时候的注释
            new webpack.ProvidePlugin({
                $:'jquery'
            }),
            new CopyWebpackPlugin([{
                from:__dirname+"/src/public",
                to:'./public'
            }])

    ],
    devServer: {
        //设置基本目录结构
        contentBase: path.resolve(__dirname, 'dist'),
        //服务器的ip地址，可以使用IP地址也可以使用localhost
        host: 'localhost', //127.0.1
        //服务端压缩是否开启
        compress: true,
        //配置服务端口号
        port: 8081,
        //自动开网页
        open: true
    },


}