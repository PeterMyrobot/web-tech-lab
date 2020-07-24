<template>
  <div id="app">
    <Header />
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


$colorSet1: #2d3142;
$colorSet2: #bfc0c0;
$colorSet3: #ffffff;
$colorSet4: #ef8354;
$colorSet5: #4f5d75;

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  width: 100vw;
  height: 100vh;
}
</style>
