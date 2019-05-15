import Vue from "vue";
import Router from "vue-router";

Vue.use(Router);
//路由配置
const routes = [
  {
    path: "/",
    name: "home",
    meta: {
      title: "首页"
    },
    component: () =>
      import(/* webpackChunkName: "home" */ "@/views/home/home.vue")
  }
];

const router = new Router({
  routes: routes,
  // history hash
  mode: "hash"
});

export default router;
