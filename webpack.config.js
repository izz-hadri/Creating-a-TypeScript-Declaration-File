module.exports = {
  entry: './app/Communicator.ts',
  mode: 'development',
  module: {
    rules: [
      {
        test: /\.tsx?$/, // tsx only necessary for react projects
        use: 'ts-loader',
        exclude: /node_modules/
      },
    ],
  },
  resolve: {
    extensions: ['.ts', '.js'],
  },
  output: {
    filename: 'bundle.js'
  },
  devtool: "eval-source-map"
};
