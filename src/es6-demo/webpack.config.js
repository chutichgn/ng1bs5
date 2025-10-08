const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  entry: './src/app.js',
  output: {
    path: path.resolve(__dirname, '../dist/es6-demo'),
    filename: 'bundle.[contenthash].js',
    clean: true
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader'
        }
      },
      {
        test: /\.css$/,
        use: ['style-loader', 'css-loader']
      }
    ]
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: './src/index.html',
      inject: 'body'
    })
  ],
  devServer: {
    static: {
      directory: path.join(__dirname, '../dist/es6-demo'),
    },
    compress: true,
    port: 9000,
    hot: true
  },
  resolve: {
    extensions: ['.js'],
    alias: {
      // Alias to import ng1bs5 components directly from source
      // Updated path to match new project structure with src/ folder
      '@ng1bs5': path.resolve(__dirname, '../src/components')
    }
  }
};
