import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import axios from "./utils/http";
import "./utils/flexible";
import * as filters from "./utils/filters";
import config from "@/config";

// import MintUI from "mint-ui";
import "mint-ui/lib/style.css";
import {
  Picker,
  Toast,
  MessageBox,
  DatetimePicker,
  Field,
  Radio,
  Popup
} from "mint-ui";
Vue.component(Radio.name, Radio);
Vue.component(Field.name, Field);
Vue.component(Picker.name, Picker);
Vue.component(Toast.name, Toast);
Vue.component(Popup.name, Popup);
Vue.component(MessageBox.name, MessageBox);
Vue.component(DatetimePicker.name, DatetimePicker);

Vue.config.productionTip = false;
Vue.prototype.$http = axios;
Vue.prototype.$store = store;
Vue.prototype.$config = config;

Object.keys(filters).forEach(key => {
  Vue.filter(key, filters[key]);
});
// Vue.use(MintUI);

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount("#app");
