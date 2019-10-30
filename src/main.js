import Vue from "vue";
import App from "./App.vue";
import router from "./routes/router";
import bus from "./utils/bus";
import store from "./store";
import axios from "./utils/http";
import filter from "./utils/filters";
import moment from "moment";
import MintUI from "mint-ui";
import "mint-ui/lib/style.css";
import "./utils/flex";
import "reset-css";

Vue.config.productionTip = false;
Vue.prototype.$http = axios;
Vue.prototype.$store = store;
Vue.prototype.$Bus = bus;
Vue.prototype.moment = moment;

Vue.use(filter);
Vue.use(MintUI);

new Vue({
  el: "#app",
  router,
  render: h => h(App)
});
