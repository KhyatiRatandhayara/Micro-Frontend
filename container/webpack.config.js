const HtmlWebpackPlugin = require('html-webpack-plugin');
const ModuleFederationPlugin = 
            require('webpack/lib/container/ModuleFederationPlugin');

module.exports = {
  mode: 'development',
  devServer: {
    port: 8080,
  },
  plugins: [
    new ModuleFederationPlugin({
      name: 'container',
      remotes: {
        microFrontEnd1: 'microFrontEnd1@http://localhost:8081/remoteEntry.js',
        microFrontEnd2: 'microFrontEnd2@http://localhost:8082/remoteEntry.js',
        MicroFrontEnd3: 'MicroFrontEnd3@http://localhost:8083/remoteEntry.js',
      },
    }),
    new HtmlWebpackPlugin({
      template: './public/index.html',
    }),
  ],
};

