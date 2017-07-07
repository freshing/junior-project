var HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  resolve: {
        extensions: ['.css', '.js'],
},
    entry: [
      "./entry.js",
      "./index.html"
    ],
    context: __dirname + '/src',
    output: {
        path: __dirname + "/dist",
        filename: "bundle.js"
    },
    plugins: [
       new HtmlWebpackPlugin({
           template: __dirname + '/src/index.html',
           filename: 'index.html',
           inject: 'body',
       })
   ],
    module: {
       loaders: [
           { test: /\.js$/, exclude: /node_modules/, loader: "babel-loader", query: {presets:['react','es2015']}},
           {
                test: /\.html$/,
                use: [{
                    loader: 'html-loader',
                    options: {
                        minimize: true
                    }
                }],
            },
            {
              test: /\.css$/,
              loader: "style-loader!css-loader"
            },
            {
                test: /\.(gif|jpg|png|eot|svg|ttf|otf|woff|woff2|pdf)$/,
                loader: 'file-loader?name=[path][name].[ext]'
            },
       ]
   }
};
