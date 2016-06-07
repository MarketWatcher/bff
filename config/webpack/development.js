import webpackConfig from './_base';
var webpack = require('webpack');

webpackConfig.devtools = 'source-map';
webpackConfig.plugins.push(
  new webpack.DefinePlugin({
    __DEVELOPMENT__: true,
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
