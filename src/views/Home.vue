<template>
  <div style="display:inline-block;">
    <div v-for="i in 50" :key="i" style="display:flex;">
      <div
        class="home"
        v-for="j in 50"
        :key="j"
        :style="{ backgroundPosition: `-${j * 20}px -${i * 20}px` }"
      ></div>
    </div>
  </div>
</template>

<script>
// import { throttle } from 'lodash/function';
// import { last } from 'lodash/array';

export default {
  name: 'Home',
  components: {},
};
</script>

<style lang="scss" scoped>
.home {
  background-image: url("~@/assets/home_bg.png");
  height: 20px;
  width: 20px;
  // transition: 0.8s;
  &:hover {
    -webkit-filter: drop-shadow(12px 12px 7px rgba(0, 0, 0, 0.7));
    filter: drop-shadow(12px 12px 7px rgba(0, 0, 0, 0.7))
  }
}
</style>
