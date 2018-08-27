const path = require('path')

module.exports = {

  // mode: 'production',
  mode: 'development',

  entry: './src/index.js',
  output: {
    filename: './build/index.js'
  },

  devServer: {
    contentBase: path.join(__dirname, '/'),
    compress: true,
    port: 9000,
  },
};