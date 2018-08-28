const path = require('path')

module.exports = {

  entry: './src/index.js',
  output: {
    filename: './build/index.js'
  },

  devServer: {
    contentBase: path.join(__dirname, '/'),
    compress: true,
    port: 9000,
    allowedHosts: [
      '.taobao.com',
    ],
    useLocalIp: true,
    host: '0.0.0.0',
  },
};