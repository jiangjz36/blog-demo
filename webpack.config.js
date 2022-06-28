const nodeExternals = require('webpack-node-externals');

module.exports = [{
  mode: 'development',
  entry: './src/server.ts',
  output: {
    path: `${__dirname}/build`,
    filename: 'server.js'
  },
  externals: nodeExternals(),
  resolve: {
    extensions: ['.ts', '.js', '.jsx', '.tsx']
  },
  module: {
    rules: [{
      test: /\.(js|jsx)$/,
      exclude: /node_modules/,
      loader: 'babel-loader',
      options: {
        presets: ['@babel/preset-env', '@babel/preset-react'],
        plugins: ['@babel/plugin-transform-runtime']
      }
    }, {
      test: /\.(ts|tsx)$/,
      exclude: /node_modules/,
      use: [
        {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-env'],
            plugins: ['@babel/plugin-transform-runtime']
          }
        }, 
        {
          loader: 'ts-loader'
        }
      ]
    }]
  }
}, {
  mode: 'development',
  entry: './src/client.tsx',
  output: {
    path: `${__dirname}/static`,
    filename: 'client.js'
  },
  devtool: 'source-map',
  resolve: {
    extensions: ['.ts', '.js', '.jsx', '.tsx']
  },
  module: {
    rules: [{
      test: /\.(js|jsx)$/,
      exclude: /node_modules/,
      loader: 'babel-loader',
      options: {
        presets: ['@babel/preset-env', '@babel/preset-react'],
        plugins: ['@babel/plugin-transform-runtime']
      }
    }, {
      test: /\.(ts|tsx)$/,
      exclude: /node_modules/,
      use: [
        {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-env'],
            plugins: ['@babel/plugin-transform-runtime']
          }
        }, 
        {
          loader: 'ts-loader'
        }
      ]
    }]
  }
}];