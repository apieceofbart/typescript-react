const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = function (env) {
  return {
    mode: env,
    entry: './src/index.js',
    output: {
      path: `${__dirname}/dist`,
      filename: 'main.bundle.js'
    },
    module: {
      rules: [
        {
          test: /\.js$/,
          exclude: /node_modules/,
          use: {
            loader: 'babel-loader'
          }
        }
      ]
    },
    plugins: [new HtmlWebpackPlugin({
      template: 'index.html'
    })]
  }
}
