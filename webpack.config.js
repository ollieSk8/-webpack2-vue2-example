var path = require('path');
var webpack=require('webpack');
var ExtractTextPlugin = require("extract-text-webpack-plugin");
module.exports = {
  entry: './src/main.js',
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'dist')
  },
  resolve:{
  	extensions: ['.vue','js']
  },
  module: {
    rules: [
      {
	    test: /\.css$/,
	    use: ExtractTextPlugin.extract({
          fallback: "style-loader",
          use: ['css-loader','sass-loader']
        })
      },
      {
		 test: /\.js$/,
		 exclude: /(node_modules|bower_components)/,
		 use: {
		    loader: 'babel-loader',
		    options: {
		      presets: ['env']
		    }
		  }
	  },
	  {
        test: /\.scss$/,
        use: ExtractTextPlugin.extract({
          fallback: "style-loader",
          use: ['css-loader','sass-loader']
        })
      },
      {
		  test: /\.vue$/,
		  loader: 'vue-loader',
		  options: {
		  	extractCSS: true
		  }
		}
    ]
  },
  devtool: "source-map", 
  plugins: [
    new ExtractTextPlugin("css/styles.css")
  ],
  watch:true
};
