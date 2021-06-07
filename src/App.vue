<template>
  <div id="app">
    <Header/>
    <router-view />
  </div>
</template>

<script>
import Header from '@/components/Header.vue';

export default {
  components: {
    Header,
  },
};
</script>

<style lang="scss">
@import "./style/main.scss";
@import url('https://fonts.googleapis.com/css?family=Roboto+Condensed');

#app {
  font-family: monospace, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  position:relative;
  width: 100%;
  height: 100vh;
}
// .header{
//   display: block;
//   height:40px;
// }
</style>
