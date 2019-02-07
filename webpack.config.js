const path = require('path');
const CopyWebpackPlugin = require('copy-webpack-plugin')

module.exports = {
  mode: 'development',
  entry: [
    'babel-polyfill',
    './src/js/index.js'
  ],
  output: {
    path: path.resolve(__dirname, './web'),
    filename: 'js/app.js'
  },
  
  externals: {
    "react": "React",
    "react-dom": "ReactDOM"
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        use: {
          loader: 'babel-loader'
        }
      }
    ]
  },
  plugins: [
    new CopyWebpackPlugin([{ from: './src/index.html', to: '' }])
  ]
};