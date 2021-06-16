<template>
  <div class="projectsDiv">
    <div class="projectHeader">
      <div class="projectContainer project1">
        <div class="imgContainer"></div>
        {{ projects[0].name }}
      </div>
      <div class="textContainer">
        <p class="header">PROJECTS</p>
        <p class="intro">
          Those are projects that I made during the past few years, some of them are conception
          proof, and some of them are inpire by porject s from work, and some just for fun!
        </p>
      </div>
    </div>
    <div class="projectList">
      <div
        class="projectContainer"
        v-for="project in projects"
        :key="project.name"
        :style="{ width: project.width }"
      >
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
          width: '300px',
        },
        {
          name: 'Project3',
          url: '1234',
          thumbnail: '33dsds',
          desc: 'nsdcsncdslcndslc',
          width: '400px',
        },
        {
          name: 'Project4',
          url: '1234',
          thumbnail: '33dsds',
          desc: 'nsdcsncdslcndslc',
          width: '350px',
        },
        {
          name: 'Project5',
          url: '1234',
          thumbnail: '33dsds',
          desc: 'nsdcsncdslcndslc',
          width: '600px',
        },
        {
          name: 'Project6',
          url: '1234',
          thumbnail: '33dsds',
          desc: 'nsdcsncdslcndslc',
          width: '500px',
        },
        {
          name: 'Project7',
          url: '1234',
          thumbnail: '33dsds',
          desc: 'nsdcsncdslcndslc',
          width: '550px',
        },
      ],
    };
  },
};
// TODO: 演算法排列project？
</script>

<style lang="scss" scoped>
@import "../style/colorSet.scss";
::-webkit-scrollbar {
  display: none;
}

.projectsDiv {
  // height: 400px;
  // background-color: $colorSet1;
  margin: 50px;
  .projectHeader {
    margin: 0 30px;
    display: flex;
    justify-content: space-between;
    .textContainer {
      max-width: 400px;
      display: flex;
      .header {
        color: $colorSet3;
        text-align: right;
        padding-top: 10px;
        writing-mode: vertical-lr;
        transform: rotate(180deg);
        font-family: "Roboto", sans-serif;
        &:after {
          content: "";
          height: 70%;
          position: absolute;
          border-left: 3px solid $colorSet3;
          left: 0;
          bottom: 0;
        }
      }
      .intro {
        color: #ffffff;
        font-size: 2rem;
        text-align: left;
      }
    }
  }

  .projectContainer {
    border-radius: 5px;
    background-color: transparent;
    min-width: 250px;
    height: 300px;
    // margin: 5px;
    border: 1px solid $colorSet6;
  }
  .project1 {
    // max-width:800px;
    height: 350px;
    flex-grow: 1;
  }
  .projectList {
    margin: 0 30px;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    .projectContainer {
      margin-bottom:10px;
      // margin:5px 10px;
    }
  }
}
</style>
