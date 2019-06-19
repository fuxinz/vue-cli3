<template>
  <div class="scroll">
    <div class="box" ref="box">
      <p class="marquee" ref="marquee" :style="animation">{{context}}</p>
    </div>
  </div>
</template>
<script>
import { setTimeout } from 'timers';
export default {
  props: {
    context: {
      type: String
    },
    speed: {
      type: Number,
      default: 20
    }
  },
  data() {
    return {
      width: "",
      boxWidth: "",
      animation: {}
    };
  },
  // watch:{
  //   width: function(val){
  //       // if(val)
  //   }
  // },
  methods: {
    init() {
      let vm = this;
      vm.width = vm.$refs.marquee.clientWidth;
      vm.boxWidth = vm.$refs.box.clientWidth;
      if (vm.width > vm.boxWidth) {
        vm.animation = {
          "margin-left": -vm.width + "px",
          transition: "margin-left",
          "transition-duration": (vm.width / vm.boxWidth) * vm.speed + "s",
          "transition-timing-function": "linear"
        };
      }
    },
    animation(timer){
      setTimeout(()=>{
        
      },timer)
    }
  },
  mounted() {
    let vm = this;
    vm.init();
  }
};
</script>
<style lang="scss" scoped>
.scroll {
  .box {
    width: 100%;
    .marquee {
      display: inline-block;
      white-space: nowrap;
      box-sizing: border-box;
    }
  }
}
</style>
