const path = require('path');

module.exports = {
  entry: './src/index.ts',
  module: {
    rules: [],
  },
  resolve: {
    extensions: ['.ts'],
  },
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'dist'),
  },
};