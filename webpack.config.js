const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');

module.exports = {
    entry: ['@babel/polyfill', 
    './src/js/index.js', ],
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: "js/bundle.js",
    },

    devServer: {
        contentBase: './dist'
    },

    module: {
        rules: [
            {
                test: /\.js$/,
                exclude: /node_modules/,
                use: {  
                    loader: "babel-loader"
                }

            },

            {
                // Apply rule for .sass, .scss or .css files
                test: /\.(sa|sc|c)ss$/,
                exclude: /node_modules/,
          
                // Set loaders to transform files.
                // Loaders are applying from right to left(!)
                // The first loader will be applied after others
                use: [

                    {
                        // After all CSS loaders we use plugin to do his work.
                        // It gets all transformed CSS and extracts it into separate
                        // single bundled file
                        loader: MiniCssExtractPlugin.loader
                      }, 
                       {
                         // This loader resolves url() and @imports inside CSS
                         loader: "css-loader",
                       },
                       {
                         // Then we apply postCSS fixes like autoprefixer and minifying
                         loader: "postcss-loader"
                       },
                       {
                         // First we transform SASS to standard CSS
                         loader: "sass-loader",
                         options: {
                           implementation: require("sass")
                         }
                       },

                       
                       
                     ]
              },

              {
                // Now we apply rule for images
                test: /\.(png|jpe?g|gif|svg)$/i,
                use: [
                       {
                         // Using file-loader for these files
                         loader: "file-loader",
          
                         // In options we can set different things like format
                         // and directory to save
                         options: {
                           outputPath: './css/images/',
                           publicPath: './images/'
                         }
                       }
                     ]
              }

        ]
    },

    plugins: [
        new HtmlWebpackPlugin({
            filename: "index.html",
            template: './src/index.html'

        }),

        new MiniCssExtractPlugin({
            // Options similar to the same options in webpackOptions.output
            // all options are optional
            //path: path.resolve(__dirname, 'dist'),
            filename: './css/style.css',
        }),

        new CopyWebpackPlugin([
            {from:'src/resources/img/',to:'resources/img/'}
        ])
    ],
};