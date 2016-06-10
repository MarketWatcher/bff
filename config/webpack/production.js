import webpackConfig from "./_base"
var webpack = require("webpack")

webpackConfig.plugins.push(
    new webpack.DefinePlugin({
        __DEVELOPMENT__: false
    }),
)

export default webpackConfig
