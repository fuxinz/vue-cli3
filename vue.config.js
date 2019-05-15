const path = require("path");

const resolve = dir => {
  return path.join(__dirname, dir);
};

module.exports = {
  publicPath: process.env.NODE_ENV === "production" ? "/test/" : "/",
  chainWebpack: config => {
    config.resolve.alias.set("@", resolve("src"));
  },
  productionSourceMap: false
};
