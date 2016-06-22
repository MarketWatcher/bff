import webpackConfig from "./_base"
import webpack from "webpack"

webpackConfig.devtool = "source-map"
webpackConfig.plugins.push(
    new webpack.DefinePlugin({
        __DEVELOPMENT__: true
    }),
)

webpackConfig.devServer = {
    proxy: {
        "/api/alerts*": {
            target: "http://localhost:8000/"
        },
        "/api/trends*": {
            target: "http://localhost:8000/"
        }
    }
}

export default webpackConfig
