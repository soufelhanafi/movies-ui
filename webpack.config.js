module.exports = {
  module: {
    rules: [
      {
        test: /\.scss$/i,
        use: [
          // Compiles Sass to CSS
          'sass-loader'
        ]
      }
    ]
  }
};
