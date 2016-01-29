var path = require('path');
var webpack = require('webpack');

var port = parseInt(process.env.PORT, 10) + 1 || 3001;

var config = {
  // cheap: no column-mappings in the source-map.
  // module: source-maps from loaders are simplified to a single mapping per line.
  devtool: 'cheap-module-eval-source-map',

  // the base directory for resolving the entry option
  context: path.resolve(__dirname, '..'),

  // the entry point for the bundle
  entry: [
    'webpack-hot-middleware/client?path=http://localhost:' + port + '/__webpack_hmr',
    './src/client.js'
  ],

  output: {
    // the output directory as an absolute path (required).
    // Note: this option makes no difference when only using the in-memory
    // bundles from webpack-dev-middleware
    path: path.join(__dirname, '../dist'),

    filename: 'bundle.js',

    // the public URL address of the output files when referenced in a browser.
    publicPath: 'http://localhost:' + port + '/static/'
  },

  plugins: [
    new webpack.HotModuleReplacementPlugin(),

    // no assets are emitted that include errors
    new webpack.NoErrorsPlugin(),

    // define free variables
    new webpack.DefinePlugin({
      __DEVELOPMENT__: true,
    })
  ],

  module: {
    loaders: [
      {
        // these conditions MUST be met
        test: /\.js$/,
        include: path.resolve(__dirname, '../src'),

        loader: 'babel',
        query: {
          presets: ["react", "es2015", "stage-0", "react-hmre"]
        },
      }
    ]
  }
};

module.exports = config;