const path = require("path");

const resolve = dir => {
  return path.join(__dirname, dir);
};

module.exports = {
  publicPath: process.env.NODE_ENV === "production" ? "/my-project/" : "/",
  chainWebpack: config => {
    config.resolve.alias
      .set("@", resolve("src"))
  }
};
