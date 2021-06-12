<template>
  <div class="skillDiv">
    <p class="header">MY SKILLS</p>
    <div class="skills">
      <div class="skillContainer" v-for="skill in skills" :key="skill.name">
        <img :src="skill.icon" alt="" />
        <span>
          {{ skill.name }}
        </span>
        <div class="levelBar">
          <div class="level" :style="{ width: computeLevel(skill.level) }"></div>
        </div>
        <div class="levelText"> {{skill.levelText}}</div>
      </div>
    </div>
    <!-- <p class="description">
      dlncldscnldscnlsdcmsdcmdm dmlcdlsc dlscscmscmdslcmsdcdcdscd
    </p> -->
  </div>
</template>

<script>
// import IconBase from '@/components/icons/iconBase.vue';
// import vueIcon from '@/components/icons/vueIcon.vue';
import vueIcon from '@/assets/skillIcons/vue.svg';
import reactIcon from '@/assets/skillIcons/react.svg';
import electron from '@/assets/skillIcons/electron.svg';
import pythonIcon from '@/assets/skillIcons/python.svg';
import gitIcon from '@/assets/skillIcons/git.svg';
import raspiIcon from '@/assets/skillIcons/raspi.svg';

export default {
  data() {
    return {
      skills: [
        {
          name: 'Vue.js', icon: vueIcon, level: 9, levelText: 'fluent',
        },
        {
          name: 'React', icon: reactIcon, level: 8, levelText: 'expert',
        },
        {
          name: 'Electron', icon: electron, level: 7, levelText: 'learned',
        },
        {
          name: 'Python', icon: pythonIcon, level: 9, levelText: 'expert',
        },
        {
          name: 'git', icon: gitIcon, level: 8, levelText: 'expert',
        },
        {
          name: 'Raspi', icon: raspiIcon, level: 6, levelText: 'Proficient',
        },
      ],
    };
  },
  methods: {
    computeLevel(level) {
      return `${String((level / 10) * 100)}%`;
    },
  },
};
</script>

<style lang="scss" scoped>
@import "../style/colorSet.scss";
.skillDiv {
  // background-color: $colorSet3;
  margin: 50px;
  position: relative;
  display: flex;
  flex-direction: row;
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

  .skills {
    display: flex;
    flex-direction: column;
    // padding: 20px;
    justify-content: space-around;
    min-width: 500px;
    margin-left: 20px;

    .skillContainer {
      // border-radius: 2px;
      height: 30px;
      // width: 100px;
      // background-color: $colorSet3;
      // box-shadow: 1px 1px 3px;
      margin-bottom: 10px;
      display: flex;
      flex-direction: row;
      justify-content: end;
      align-items: center;
      img {
        // transition: ease-in-out 0.4s;
        height: 30px;
        width: 30px;
        margin-right: 20px;
      }
      span {
        // transition: ease-in-out 0.4s;
        display: none;
        cursor: default;
      }
      // &:hover {
      //   span {
      //     display: inline;
      //   }
      //   img {
      //     display: none;
      //   }
      // }
      .levelBar {
        width: 400px;
        height: 10px;
        background-color: #000000;
        .level {
          background-color: $colorSet3;
          height: 10px;
        }
      }
      .levelText{
        margin-left: 25px;
        color: $colorSet5;
        width:100px;
        border:1px solid $colorSet5;
        border-radius:2px;
      }
    }
  }
  .description {
    border: 1px solid #ffffff;
    color: #ffffff;
  }
}
</style>
