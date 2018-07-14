const webpack = require('webpack');
const path = require('path');

module.exports = {
  mode: 'development',  
  entry: './client/src/index.jsx',
  resolve: { extensions: ['.js', '.jsx'] },
  output: {
    path: path.resolve(__dirname, 'public'),
    filename: 'mainBundle.js',
  },
  devtool: 'inline-source-map',
  module: {
    rules: [
      {
        test: [/\.(js)$/, /\.(jsx)$/],
        exclude: /node_modules/,
        use: ['babel-loader'],
      },
      {
        test: /\.css$/,
        use: [
          {
            loader: 'style-loader',
          },
        ]
      }
    ]
  }
};
