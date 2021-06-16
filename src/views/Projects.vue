<template>
  <div class="projectsDiv">
    <div class="toggleBtn" @click="toggleProjectsDropdown">
      Projest List
      <div class="projectsDropDown" v-show="projectsDropdown"></div>
    </div>

  </div>
</template>

<script>
export default {
  data() {
    return {
      projectsDropdown: false,
    };
  },
  methods: {
    toggleProjectsDropdown() {
      this.projectsDropdown = !this.projectsDropdown;
    },
  },

};
</script>

<style lang="scss" scoped>
  .projectsDiv{
    padding-top:50px;
    .toggleBtn{
      cursor: pointer;
      // border:
    }
  }
</style>
