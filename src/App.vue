<template>
  <div id="app">
    <keep-alive>
      <router-view v-if="$route.meta.keepAlive&&isRouterAlive"></router-view>
    </keep-alive>
    <router-view v-if="!$route.meta.keepAlive&&isRouterAlive"></router-view>
  </div>
</template>
<script>
export default {
  name: "app",
  provide() {
    return {
      reload: this.reload
    };
  },
  data() {
    return {
      isRouterAlive: true
    };
  },
  methods: {
    reload() {
      (this.isRouterAlive = false),
        this.$nextTick(function() {
          this.isRouterAlive = true;
        });
    }
  }
};
</script>
<style>
</style>
