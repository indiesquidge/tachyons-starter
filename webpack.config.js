const path = require('path')
const webpack = require('webpack')

const HtmlWebpackPlugin = require('html-webpack-plugin')

process.noDeprecation = true

module.exports = {
  context: path.resolve(__dirname, './src'),
  entry: {
    app: './app.js'
  },
  module: {
    rules: [
      {
        test: /\.jsx?$/,
        exclude: [/node_modules/],
        use: [{
          loader: 'babel-loader',
          options: {
            presets: ['stage-0']
          }
        }]
      },
      {
        test: /\.css$/,
        use: ['style-loader', 'css-loader']
      }
    ]
  },
  output: {
    filename: '[name].bundle.js',
    path: path.resolve(__dirname, './dist/assets'),
    publicPath: '/assets'
  },
  devServer: {
    contentBase: path.resolve(__dirname, './src')
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin(),
    new HtmlWebpackPlugin({
      template: path.resolve(__dirname, 'src/', 'index.html')
    })
  ]
}
