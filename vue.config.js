const path = require("path");

const resolve = dir => {
  return path.join(__dirname, dir);
};
const PROXY_URL = "https://www.easy-mock.com/mock/5cdd133a15d65607859de8db/";

module.exports = {
  publicPath: process.env.NODE_ENV === "production" ? "/test/" : "/",
  chainWebpack: config => {
    config.resolve.alias.set("@", resolve("src"));
  },
  productionSourceMap: false,
  devServer: {
    proxy: {
      "/api": {
        target: PROXY_URL,
        ws: true,
        changeOrigin: true
      }
    }
  }
};
