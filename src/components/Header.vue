<template>
  <div :class="{header: true, black: scrolled}">
    <div class="title">
      WEB TECH LAB
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      scrolled: false,
    };
  },
  created() {
    window.addEventListener('scroll', this.handleScroll);
  },
  methods: {
    handleScroll() {
      this.scrolled = window.scrollY > 50;
    },
  },
};
</script>

<style lang="scss" scoped>
@import "../style/colorSet.scss";

.header {
  width: 100%;
  height: 50px;
  background-color:rgba(0,0,0, 0);
  position: fixed;
  z-index: 3;
  transition:all  ease 1s;
  .title {
    position: absolute;
    left: 0;
    height: 50px;
    color: #ffffff;
    display: flex;
    justify-items: center;
    align-items: center;
    padding: 0px 20px;
    font-size: 1.5rem;
    font-weight: bold;
    font-family: "Roboto";
  }
}
.black{
  background-color: $colorSet7;
}
</style>
