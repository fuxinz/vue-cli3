<template>
  <div class="home">
    <div class="bar">
      <ul>
        <li v-for="(item,index) in list" :key="index" @click="ruterGo(index)">
          <img :src="cur==index?item.imgActive:item.img" />
          <p :class="{active:cur==index}">{{item.title}}</p>
        </li>
      </ul>
    </div>
    <keep-alive>
      <router-view v-if="$route.meta.keepAlive" />
    </keep-alive>
    <router-view v-if="!$route.meta.keepAlive" />
  </div>
</template>

<script>
export default {
  data() {
    return {
      list: [
        {
          img: require("../../assets/img/Home-灰.png"),
          imgActive: require("../../assets/img/Home.png"),
          title: "首页",
          router: "/"
        },
        {
          img: require("../../assets/img/Group-灰.png"),
          imgActive: require("../../assets/img/Group.png"),
          title: "我的",
          router: "/"
        }
      ],
      cur: 0,
      route: ""
    };
  },
  mounted() {
    let vm = this;
    vm.init();
    window.addEventListener(
      "popstate",
      function() {
        if (vm.$route.path == "/home/my") {
          vm.cur = 1;
        } else {
          vm.cur = 0;
        }
      },
      false
    );
  },
  methods: {
    ruterGo(index) {
      let vm = this;
      if (vm.cur != index) {
        vm.cur = index;
        vm.route = vm.list[index].router;
        vm.$router.push(vm.list[index].router);
      }
    },
    init() {
      let vm = this;
      if (vm.$route.path == "/home/my") {
        vm.cur = 1;
      } else {
        vm.cur = 0;
      }
    }
  }
};
</script>
<style lang="scss" scoped>
.home {
  background: white;
  width: 100%;
  height: 100%;
  .bar {
    position: fixed;
    z-index: 100;
    background: white;
    bottom: 0;
    width: 100%;
    height: 55px;
    border: 1px solid rgba(233, 233, 233, 1);
    ul {
      display: flex;
      margin: 0;
      padding: 0;
      justify-content: space-around;
      li {
        height: 55px;
        flex: 1;
        font-size: 12px;
        display: flex;
        justify-content: center;
        align-items: center;
        flex-flow: column;
        img {
          width: 20px;
          height: 20px;
          display: block;
          margin-bottom: 8px;
        }
        .active {
          color: #fe9434;
        }
        p {
          font-size: 12px;
          margin: 0;
          font-family: PingFangSC-Regular, PingFangSC;
          font-weight: 400;
          color: rgba(133, 143, 162, 1);
        }
      }
    }
  }
}
</style>
