<template>
  <div class="root">
    <StarTravel class="background" />
    <div class="scrollPart">
      <div class="blank"></div>
      <About />
      <Skills />
      <Projects />
      <Experience />
    </div>
    <!-- <div class="fadein"></div>
    cv footer -->
  </div>
</template>

<script>
// import { throttle } from 'lodash/function';
// import { last } from 'lodash/array';
import StarTravel from '@/components/StarTravel.vue';
import About from '@/components/About.vue';
import Skills from '@/components/Skills.vue';
import Projects from '@/components/Projects.vue';
import Experience from '@/components/Experience.vue';

export default {
  name: 'LandingPage',
  mounted() {
    // window.addEventListener('scroll', this.handleScroll);
  },
  computed: {},
  components: {
    StarTravel,
    About,
    Skills,
    Projects,
    Experience,
  },
  data() {
    return {
    };
  },
  methods: {
  },
};
</script>

<style lang="scss" scoped>
@import "../style/colorSet.scss";
.root {
  // position: relative;
  background: $colorSet2;
  width: 100%;
  .fadein {
    height: 50px;
    background: linear-gradient($colorSet1 70%, transparent);
  }
}
.background {
  position: fixed;
}
.blank{
  height: 100vh;
  width: 100%;
}
.scrollPart {
  position: absolute;
  z-index: 1;
  width: 100%;
}

</style>
