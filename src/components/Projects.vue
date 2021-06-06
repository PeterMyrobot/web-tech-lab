<template>
  <div class="ProjectsDiv">
    <h2>Projects</h2>
    <div class="projectList">
      <div class="projectContainer" v-for="project in projects" :key="project.name">
        {{ project.name }}
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      projects: [
        {
          name: 'Project1',
          url: '1234',
          thumbnail: '33dsds',
          desc: 'nsdcsncdslcndslc',
        },
        {
          name: 'Project2',
          url: '1234',
          thumbnail: '33dsds',
          desc: 'nsdcsncdslcndslc',
        },
        {
          name: 'Project3',
          url: '1234',
          thumbnail: '33dsds',
          desc: 'nsdcsncdslcndslc',
        },
        {
          name: 'Project4',
          url: '1234',
          thumbnail: '33dsds',
          desc: 'nsdcsncdslcndslc',
        },
        {
          name: 'Project5',
          url: '1234',
          thumbnail: '33dsds',
          desc: 'nsdcsncdslcndslc',
        },
        {
          name: 'Project6',
          url: '1234',
          thumbnail: '33dsds',
          desc: 'nsdcsncdslcndslc',
        },
        {
          name: 'Project7',
          url: '1234',
          thumbnail: '33dsds',
          desc: 'nsdcsncdslcndslc',
        },
      ],
    };
  },
};
</script>

<style lang="scss" scoped>
@import "../style/colorSet.scss";
::-webkit-scrollbar {display:none}

.ProjectsDiv {
  height: 400px;
  background-color: $colorSet1;

  .projectList{
    margin: auto;
    overflow: scroll;
    overflow-y: wrap;
    display: flex;
    width: 90%;
    .projectContainer{
      border-radius: 5px;
      background-color: whitesmoke;
      min-width: 250px;
      height: 300px;
      margin: 5px;
    }
  }
}
</style>
