const path = require("path");
const resolve = dir => {
  return path.join(__dirname, dir);
};
const PROXY_URL = "https://www.easy-mock.com/mock/5cdd133a15d65607859de8db/";
const isProduction = process.env.NODE_ENV === "production" ? true : false //生产环境

module.exports = {
  //打包目录
  publicPath: isProduction ? "/static" : "/",
  chainWebpack: config => {
    config.resolve.alias.set("@", resolve("src"));
    config.module
      .rule('images')
      .use('image-webpack-loader')
      .loader('image-webpack-loader')
      .options({ bypassOnDebug: true })
      .end() //图片压缩
  },
  css: {
    // 是否使用css分离插件 ExtractTextPlugin
    extract: true,
    // 开启 CSS source maps
    sourceMap: false,
    // css预设器配置项
    loaderOptions: {
      postcss: {
        plugins: [
          require("postcss-pxtorem")({
            // 把px单位换算成rem单位
            rootValue: 50,
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
  configureWebpack: (config) => {
    config.mode = process.env.NODE_ENV

    config.externals = {
      // key：vue是项目里引入时候要用的，value：是开发依赖库的主人定义的不能修改
      'vue': 'Vue',
      'vue-router': 'VueRouter',
      'vuex': 'Vuex',
      'axios': 'axios',
      "vuetify": "vuetify",
      "moment": "moment",
    }
  },
  productionSourceMap: false,
  devServer: {
    https: false,
    proxy: {
      "/api/*": {
        target: PROXY_URL,
        changeOrigin: true
      }
    }
  }
};
