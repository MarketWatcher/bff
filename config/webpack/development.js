import webpackConfig from "./_base"
import webpack from "webpack"

webpackConfig.devtool = "source-map"

for(let loader in webpackConfig.module.loaders) {
    if(loader.test == /\.js$/) {
        loader.loaders.push("react-hot")
    }
}
webpackConfig.plugins.push(
    new webpack.DefinePlugin({
        __DEVELOPMENT__: true,
        "process.env": {
            "NODE_ENV": JSON.stringify("development")
        }
    }),
)

webpackConfig.devServer = {
    proxy: {
        "/api*": {
            target: "http://localhost:8000/"
        }
    }
}

export default webpackConfig
