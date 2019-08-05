const path = require("path");

const resolve = dir => {
  return path.join(__dirname, dir);
};
const PROXY_URL = "https://www.easy-mock.com/mock/5cdd133a15d65607859de8db/";

module.exports = {
  publicPath: process.env.NODE_ENV === "production" ? "/static" : "/",
  chainWebpack: config => {
    config.resolve.alias.set("@", resolve("src"));
  },
  css: {
    // 是否使用css分离插件 ExtractTextPlugin
    extract: true,
    // 开启 CSS source maps?
    sourceMap: false,
    // css预设器配置项
    loaderOptions: {
      postcss: {
        plugins: [
          require("postcss-pxtorem")({
            // 把px单位换算成rem单位
            rootValue: 75,
            unitPrecision: 3, // 最小精度，小数点位数
            propList: ["*"], // !不匹配属性（这里是字体相关属性不转换）
            selectorBlackList: [],
            minPixelValue: 2 // 替换的最小像素值
          })
        ]
      }
    },
    // 启用 CSS modules for all css / pre-processor files.
    modules: false
  },
  productionSourceMap: false,
  devServer: {
    https: true,
    proxy: {
      "/api": {
        target: PROXY_URL,
        ws: true,
        changeOrigin: true
      }
    }
  }
};
