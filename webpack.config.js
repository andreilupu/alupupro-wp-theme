module.exports = (env = {}) => {
  return {
    entry: ['./assets/scss/milligram.sass'],
    output: {
      filename: 'assets/css/bundle.css',
    },
    module: {
      rules: [
        {
          test: /\.sass$/,
          use: [
            {
              loader: 'postcss-loader'
            },
            {
              loader: 'sass-loader'
            }
          ]
        }
      ]
    }
  }
};