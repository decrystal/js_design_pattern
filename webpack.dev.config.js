const path = require('path')
const HtmlWepackPlugin = require('html-webpack-plugin')

module.exports = {
  mode: 'development',
  entry: './src/patterns/decorator/decorator.js',
  output: {
    path: path.resolve(__dirname,'dist'),
    filename: 'bundle.js'
  },
  plugins: [
    new HtmlWepackPlugin({
      template: './index.html'
    })
  ],
  devServer: {
    hot: true,
    
    static: {
      directory: path.join(__dirname, 'dist'),
    },
    
    open: true,//自动打开浏览器；
    port: 9000,
    compress: true,
    // proxy: {
    //   '/api/*': {
    //     target: 'http://localhost:8080'
    //   }
    // }
  },
  module: {
    rules: [{
        test: /\.js?$/,
        exclude: /(node_modules)/,
        loader: 'babel-loader'
    }]
  }
}