<template>
  <div class="hello">
    <p>
      {{num}}
      <br>check out the
      <a
        target="_blank"
        rel="noopener"
        @click="add"
      >vuex-test</a>.
    </p>
    <router-link to="/mine">Go to mine</router-link>
  </div>
</template>

<script>
import Home from "@/api/home"
export default {
  name: 'HelloWorld',
  data(){
    return {
      num:null
    }
  },
  mounted(){
    this.num = this.$store.state.test
    Home.getUser()
  },
  methods:{
    add(){
        this.$store.dispatch('A')
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
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
