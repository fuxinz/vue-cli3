import axios from "axios";
import { Indicator, Toast } from "mint-ui";
import config from "../config";
// import router from "../router";

//设置axios默认值
axios.defaults.baseURL =
  process.env.NODE_ENV === "production" ? config.pro : config.dev;
// axios.defaults.headers.common['Authorization'] = 'AUTH_TOKEN';
// axios.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded';

// 添加请求拦截器
axios.interceptors.request.use(
  function(config) {
    //请求头增加token
    // const token = localStorage.getItem("token");
    // if (token) {
    //   config.headers["Authorization"] = token;
    // }
    Indicator.open({ spinnerType: "fading-circle" });
    return config;
  },
  function(error) {
    // 对请求错误做些什么
    return Promise.reject(error);
  }
);

// 添加响应拦截器
axios.interceptors.response.use(
  function(response) {
    //对响应成功做些什么
    Indicator.close();
    const code = response.status;
    if (code === 200) {
      return Promise.resolve(response);
    } else {
      return Promise.reject(response);
    }
  },
  function(error) {
    // 对响应错误做点什么
    Indicator.close();
    const responseCode = error.response.status;
    switch (responseCode) {
      // 401：未登录
      case 401:
        // 跳转登录页
        // router.replace({
        //   path: '/login',
        //   query: {
        //     redirect: router.currentRoute.fullPath
        //   }
        // })
        break;
      // 403: token过期
      case 403:
        // 弹出错误信息
        Toast("登录信息过期，请重新登录");
        // 清除token
        localStorage.removeItem("token");
        // 跳转登录页面，并将要浏览的页面fullPath传过去，登录成功后跳转需要访问的页面
        // setTimeout(() => {
        //   router.replace({
        //     path: '/login',
        //     query: {
        //       redirect: router.currentRoute.fullPath
        //     }
        //   })
        // }, 1000)
        break;
      // 404请求不存在
      case 404:
        Toast("网络请求不存在");
        break;
      // 其他错误，直接抛出错误提示
      default:
        Toast(error.response.data.message);
    }
    return Promise.reject(error);
  }
);

export default axios;
