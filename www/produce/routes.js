/**
 * Created by mazhenxiao on 2017/4/26.
 */
var HtmlWebpackPlugin = require('html-webpack-plugin');
var path = require("path");
module.exports = {
    routes:[
        new HtmlWebpackPlugin({
            title: 'My App',
            filename: 'test.html',
            template:'./layout/template.ejs',
            content:"./view/index.ejs",
            inject:true,
            minify:false,
            hash:false,
            cache:false,
            showErrors:true,
                xhtml:false

        })
    ]


}