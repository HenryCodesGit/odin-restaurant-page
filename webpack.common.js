const path = require('path');
const HTMLWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  entry: {
    app: './src/index.js',
    root: './src/pages/root.js',
    menu: './src/pages/menu.js',
    home: './src/pages/home.js',
    contact: './src/pages/contact.js',
    two: './src/two.js',
  },

  output: {
    filename: '[name].bundle.js',
    path: path.resolve(__dirname, 'dist'),
    clean: true,
  },
  module:{
    rules:[
        {
            test: /\.css$/i,
            use: ['style-loader', 'css-loader'],
        },
        {
            test: /\.(png|svg|jpg|jpeg|gif)$/i,
            type: 'asset/resource',
        },
        {
            test: /\.(woff|woff2|eot|ttf|otf)$/i,
            type: 'asset/resource',
          },
    ],
  },
  plugins:[
    new HTMLWebpackPlugin(
        {
            template: './src/index.html',
            filename: 'index.html',
            inject: 'head',
            scriptLoading: 'defer', 
            chunks: ['app'],
        }
    ),
    new HTMLWebpackPlugin(
      {
          template: './src/two.html',
          filename: 'two.html',
          inject: 'head',
          scriptLoading: 'defer', 
          chunks: ['two'],
      }
  ),
  ]
};