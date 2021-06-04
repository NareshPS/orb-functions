const path = require('path')

module.exports = {
  mode: 'development',
  entry: {
    index: "./src/index.js",
  },
  output: {
    filename: "[name].js",
    path: path.join(__dirname, 'dist'),
    library: "orbfns"
  },
  module: {
    rules: [
      // {
      //   test: /\.js$/,
      //   use: {
      //     loader: 'babel-loader',
      //     options: {
      //       presets: [
      //         // https://stackoverflow.com/questions/53558916/babel-7-referenceerror-regeneratorruntime-is-not-defined
      //         [
      //           '@babel/preset-env',
      //           {
      //             useBuiltIns: "entry", // alternative mode: "entry"
      //             corejs: 3, // default would be 2
      //             targets: "> 0.25%, not dead" 
      //           }
      //         ]
      //       ],
      //       plugins: [ "@babel/plugin-proposal-class-properties" ]
      //     }
      //   }
      // },
      {
        test: /\.js$/,
        enforce: 'pre',
        use: ["source-map-loader"],
      }
    ],
  },
  devtool : 'inline-source-map',
  resolve: {
    modules: ['node_modules']
  },
}
