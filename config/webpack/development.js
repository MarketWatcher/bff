import webpackConfig from './_base';
var webpack = require('webpack');

webpackConfig.devtool = 'source-map';
webpackConfig.plugins.push(
  new webpack.DefinePlugin({
    __DEVELOPMENT__: true,
    __ALERTS_SERVICE_URI__: "http://localhost:8000"
  }),
);

webpackConfig.devServer = {
    proxy: {
        "/api/alerts*": {
            target: 'http://localhost:8000',
        }
    }
};

export default webpackConfig;
