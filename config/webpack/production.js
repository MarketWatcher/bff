import webpackConfig from "./_base"
import webpack from "webpack"

webpackConfig.plugins.push(
    new webpack.DefinePlugin({
        __DEVELOPMENT__: false,
        "process.env": {
            "NODE_ENV": JSON.stringify("production")
        }
    }),
    new webpack.optimize.UglifyJsPlugin({
        compress : {
            "dead_code": true,
            "unused": true,
            "warnings": false,
            "join_vars": true
        }
    })
)

export default webpackConfig
