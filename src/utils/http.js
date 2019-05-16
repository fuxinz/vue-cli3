import axios from "axios";
import { Indicator } from "mint-ui";
import config from "../config";
//设置axios默认值
axios.defaults.baseURL =
  process.env.NODE_ENV === "production" ? config.pro : config.dev;
// axios.defaults.headers.common['Authorization'] = 'AUTH_TOKEN';
// axios.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded';

// 添加请求拦截器
axios.interceptors.request.use(
  function(config) {
    // 在发送请求之前做些什么
    Indicator.open({spinnerType: 'fading-circle'});
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
    // 对响应数据做点什么
    Indicator.close();
    return response;
  },
  function(error) {
    // 对响应错误做点什么
    Indicator.close();
    return Promise.reject(error);
  }
);

export default axios;
