<template>
  <div class="loading"></div>
</template>
<script>
import { Indicator } from "mint-ui";

export default {
  data() {
    return {};
  },
  methods: {
    highFunc() {
      Function.prototype.bind = function(context) {
        let self = this;
        let arr = Array.prototype.slice.call(arguments, 1);
        return function() {
          var bindArrs = Array.prototype.slice.call(arguments);
          return self.apply(context, arr.concat(bindArrs));
        };
      };
    },
    quickSort(){
      
    },
    shellSort(arr, gap) {
      let len = arr.length,
        temp;
      gap = gap || 1;
      while (gap < len / 5) {
        gap = gap * 5 + 1;
      }
      for (gap; gap > 0; gap = Math.floor(gap / 5)) {
        for (var i = gap; i < len; i++) {
          temp = arr[i];
          for (var j = i - gap; j >= 0 && arr[j] > temp; j -= gap) {
            arr[j + gap] = arr[j];
          }
          arr[j + gap] = temp;
        }
      }
      return arr;
    }
  },
  mounted() {}
};
</script>
<style lang="sass" scoped>

</style>
