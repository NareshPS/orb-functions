const path = require('path')

module.exports = {
  mode: 'production',
  entry: {
    index: "./src/index.js",
  },
  output: {
    filename: "[name].js",
    path: path.join(__dirname, 'dist'),
    library: "orbfns"
  },
  module: {
    rules: [],
  },
  resolve: {
    modules: ['node_modules']
  },
}
