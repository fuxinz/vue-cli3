import Vue from "vue";
import Router from "vue-router";

Vue.use(Router);

const router = new Router({
  routes: routes,
  // history hash
  mode: "hash"
});

const routes = [
  {
    path: "/home",
    name: "home",
    meta: {
      title: "首页"
    },
    component: () => import("@/views/home/home.vue")
  }
];

export default router;
