<template>
  <div class="hello">
    <p>
      {{num}}
      <br>check out the
      <a target="_blank" rel="noopener" @click="add">vuex-test</a>.
    </p>
    <router-link to="/mine">Go to mine</router-link>
    <scroll-bar context="关键的时间点看世界的角sdsdfsdffffffffffffffffff度会计师斤斤计"></scroll-bar>
  </div>
</template>

<script>
import Home from "@/api/home";
import ScrollBar from "@/components/scrollBar";
export default {
  name: "HelloWorld",
  components: { ScrollBar },
  data() {
    return {
      num: null
    };
  },
  mounted() {
    this.num = this.$store.state.test;
    Home.getUser();
  },
  methods: {
    add() {
      this.$store.dispatch("A");
    },
    //图片上传
    uploadFile() {
      const file = document.getElementById("file").files[0];
      const formdata = new FormData();
      formdata.append("file", file);
      Home.uploadFile(formdata);
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.hello{
  width: 500px;
  height: 500px;
  background-color: aqua
}
h3 {
  margin: 40px 0 0;
}
p{
  font-size: 14px;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
