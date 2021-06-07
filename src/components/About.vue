<template>
  <div class="aboutDiv">
    <div class="content">
      <div class="info">
        <div>
          <p>Name: Peter Yang</p>
          <p>Email: weiyang2016@gmail.com</p>
          <p>Date of Birth: 1989/03/12</p>
          <p>Location: Taiwan</p>
        </div>
      </div>
      <p class="header">ABOUT ME</p>
      <!-- <div class="photoArea">
        <div class="imgContainer">
          <img :src="require('@/assets/me.jpg')" alt="photo" />
        </div>
      </div> -->
      <div class="descriptionContainer">
        <div :class="{ boxContainer: true, expend: desIn }"></div>
        <p>{{ descreption }}</p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  mounted() {
    const options = this.options || {};
    this.observer = new IntersectionObserver(([entry]) => {
      console.log(entry.isIntersecting);
      if (entry) {
        this.desIn = entry.isIntersecting;
      }
    }, options);

    this.observer.observe(this.$el);
  },
  data() {
    return {
      descreption:
        'I am a driven individual with experience in developing software related to mechanical/electrical products. Dedicated to javascript with 4 years experience in which I have acquired a wide range of technical skills ranging from the latest JavaScript frameworks to software architecture and am looking to increase my skill and knowledge in this area.',
      observer: null,
      options: {
        rootMargin: '0px',
        threshold: 1,
      },
      desIn: false,
    };
  },
  methods: {},
};
</script>

<style lang="scss" scoped>
@import "../style/colorSet.scss";
.aboutDiv {
  margin: 50px;
  position: relative;

  .content {
    display: flex;
    flex-direction: row;
    .photoArea {
      // flex-basis: 40%;
      max-width: 300px;
      .imgContainer {
        width: 200px;
        img {
          width: 100%;
          border-radius: 5px;
          box-shadow: 0px 1px 15px rgba(0, 0, 0, 0.3);
        }
      }
    }
    .info {
      display: flex;
      color: #eaeaea;
      padding: 10px 25px 20px 0px;
      /* border-right: 1px solid; */
      min-width: 300px;
      p {
        text-align: left;
        font-weight: bold;
      }
    }
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
    .descriptionContainer {
      // background-color: #000000;
      display: flex;
      align-items: center;
      justify-content: center;
      padding: 20px;
      position: relative;
      .boxContainer {
        left: 0;
        height: 100%;
        width: 0%;
        background-color: #000000;
        position: absolute;
        transition: all 0.8s ease;
      }
      .expend {
        width: 100%;
      }
      p {
        text-align: initial;
        color: $colorSet5;
        z-index: 1;
      }
    }
  }
  .boxContainer {
    width: 100%;
    height: 50px;
    .box {
      position: relative;
    }
    .box:before {
      content: "";
      position: absolute;
      z-index: 2;
      top: 0px;
      left: 50px;
      width: 30px;
      height: 30px;
      background: $colorSet3;
      border-radius: 2px;
      transform: rotate(45deg);
      animation: box 0.8s infinite;
    }
    .box:after {
      content: "";
      position: absolute;
      z-index: 1;
      top: 43px;
      left: 55px;
      width: 20px;
      height: 3px;
      background: #eaeaea;
      border-radius: 100%;
      animation: shadow 0.8s infinite;
    }
    @keyframes box {
      0% {
        top: 0px;
        transform: rotate(90deg); /**/
      }
      20% {
        border-radius: 2px;
      }
      50% {
        top: 15px;
        transform: rotate(45deg);
        border-bottom-right-radius: 15px;
      }
      80% {
        border-radius: 2px;
      }
      100% {
        top: 0px;
        transform: rotate(0deg);
      }
    }

    @keyframes shadow {
      0%,
      100% {
        left: 55px;
        width: 20px;
        background: #eaeaeac0;
      }
      50% {
        top: 40px;
        left: 50px; /*讓陰影保持在原位*/
        width: 30px;
        height: 7px;
        background: rgba(238, 238, 238, 0.747);
      }
    }
  }
}
</style>
