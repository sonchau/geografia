const Dotenv           = require('dotenv-webpack');
const genDefaultConfig = require('@storybook/react/dist/server/config/defaults/webpack.config.js');
const path = require("path");

module.exports = (baseConfig, env) => {
  const config = genDefaultConfig(baseConfig, env);

  config.plugins.push(new Dotenv());

  config.module.rules.push({
    test: /\.scss$/,
    loaders: ["style-loader", "css-loader", "sass-loader"],
    include: path.resolve(__dirname, "../")
  });
  return config;
};