import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from './store'
import axios from "./utils/http";
import config from "@/config"
import MintUI from "mint-ui";
import "mint-ui/lib/style.css";

Vue.config.productionTip = false;

Vue.prototype.$http = axios;
Vue.prototype.$store = store;
Vue.prototype.$config = config

Vue.use(MintUI);

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount("#app");
