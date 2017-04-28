/**
 * Created by mazhenxiao on 2017/4/26.
 */
var path = require("path");
var routes = require(path.join(__dirname,"produce/routes.js"))
var plugins = routes.routes;

    module.exports={
        entry:{
            main:path.join(__dirname,"js/main.js")
        },
        output:{
            path:__dirname,
            filename:"js/lib/[name]-webpack.js"
        },
        module: {
            loaders: [
                { test: /\.ejs$/,
                    loader: 'ejs-loader',

                },
            ]
        },
        plugins: plugins


    }

