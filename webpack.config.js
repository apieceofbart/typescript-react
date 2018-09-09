module.exports = function (env) {
  return {
    mode: env,
    entry: './src/index.js',
    output: {
      path: `${__dirname}/dist`,
      filename: 'main.bundle.js'
    }
  }
}