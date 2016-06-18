import webpackConfig from "./_base"
import webpack from "webpack"

webpackConfig.plugins.push(
    new webpack.DefinePlugin({
        __DEVELOPMENT__: false
    })
)

export default webpackConfig
