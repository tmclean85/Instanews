module.exports = {
   entry: './javaScript/main.js',
   output: {
      filename: './build/js/bundle.js'
   },
   module: {
     rules: [{
       test: /\.scss$/,
       use: [
       { loader: 'style-loader' },
       { loader: 'css-loader' },
       { loader: 'sass-loader' }
       ]
     }]
   }
};