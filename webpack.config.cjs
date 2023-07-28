const path = require('path')
const glob = require('glob')

const globEntries = globPath =>
  glob.sync(globPath, { dotRelative: true }).reduce(
    (acc, file) =>
      Object.defineProperty(acc, path.basename(file, path.extname(file)), {
        value: file,
        enumerable: true,
      }),
    {},
  )

module.exports = {
  mode: 'production',
  entry: globEntries('./src/*.test.js'),
  output: {
    path: path.resolve(__dirname, 'dist'), // eslint-disable-line
    libraryTarget: 'commonjs',
    filename: '[name].bundle.js',
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        use: 'babel-loader',
      },
    ],
  },
  target: 'web',
  externals: /k6(\/.*)?/,
}
