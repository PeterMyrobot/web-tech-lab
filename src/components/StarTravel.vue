<template>
  <div class="rootDiv">
    <canvas class="starCanvas" id="myCanvas" ref="myCanvas"></canvas>
    <div class="title" :style="scrollStyle.title">
      <h1>I am Peter Yang.</h1>
      <span>A Software developer base in Taiwan</span>
      <div class="linkArea"></div>
    </div>
    <div class="bottom" v-show="scrolled">
      <img src="@/assets/icons/down-arrow.svg" alt="" />
    </div>
  </div>
</template>

<script>
export default {
  mounted() {
    window.addEventListener('resize', this.handleResize);
    window.addEventListener('scroll', this.handleScroll);
    this.handleScroll();
    this.handleResize();
    this.makeStar(200);
    requestAnimationFrame(this.init);
  },
  computed: {
    canvas() {
      return this.$refs.myCanvas;
    },
    ctx() {
      return this.canvas.getContext('2d');
    },
  },
  data() {
    return {
      margin: 0,
      eyesToScreen: 50,
      prevTime: null,
      midX: 0,
      midY: 0,
      stars: [],
      flySpeed: 0.02,

      scrolled: true,
      scrollStyle: {
        title: {
          transform: 'scale(1)',
          // opacity: 1,
          // position: 'absolute',
          // marginLeft: '10px',
        },
      },
    };
  },
  methods: {
    handleScroll() {
      if (window.scrollY > 0) {
        this.scrolled = false;
      } else {
        this.scrolled = true;
      }
      // if (window.scrollY < 300) {
      const dy = window.scrollY / 100;
      this.scrollStyle.title.transform = `scale(${(1 + dy ** 2)})`;
      this.scrollStyle.title.opacity = 1 - dy / 2;
      // }
    },
    handleResize() {
      // Calculate new canvas size based on window
      console.log(
        'resize?',
        window.innerWidth,
        document.body.scrollWidth,
        document.documentElement.scrollWidth,
      );
      this.canvas.height = window.innerHeight;
      this.canvas.width = window.innerWidth - 15;
      this.midX = (window.innerWidth - 15) / 2;
      this.midY = window.innerHeight / 2;
      this.$nextTick(() => {
        this.drawStar();
      });
    },
    drawCircle(x, y, r) {
      this.ctx.fillStyle = '#fff';
      this.ctx.arc(x, y, r, 0, Math.PI * 2, false);
      this.ctx.fill();
    },
    drawStar() {
      this.ctx.translate(this.canvas.width / 2, this.canvas.height / 2);
      this.stars.forEach((el) => {
        this.ctx.beginPath();
        const ratio = this.eyesToScreen / (el.z + this.eyesToScreen);
        const cx = (el.x / 100) * this.canvas.width * ratio;
        const cy = (el.y / 100) * this.canvas.height * ratio;
        const cSize = el.size * ratio;
        this.drawCircle(cx, cy, cSize);
      });
    },
    clear() {
      this.ctx.fillStyle = '#031926';
      this.ctx.translate(-this.canvas.width / 2, -this.canvas.height / 2);
      this.ctx.fillRect(0, 0, this.canvas.width, this.canvas.height);
    },
    makeStar(count) {
      this.stars = [];
      for (let i = 0; i < count; i += 1) {
        const obj = {
          size: Math.random() * 5,
          x: Math.random() * 100 - 50,
          y: Math.random() * 100 - 50,
          z: Math.random() * 300,
        };
        this.stars.push(obj);
      }
    },
    movingStar(distance) {
      this.stars.forEach((el, idx) => {
        let newDis = el.z - distance;
        while (newDis <= -50) {
          newDis += 300;
        }
        this.$set(this.stars[idx], 'z', newDis);
      });
    },
    init(time) {
      this.prevTime = time;
      requestAnimationFrame(this.tick);
    },
    tick(time) {
      const elapsed = time - this.prevTime;
      this.prevTime = time;
      this.movingStar(elapsed * this.flySpeed);
      this.clear();
      this.drawStar();
      requestAnimationFrame(this.tick);
    },
  },
};
</script>

<style lang="scss" scoped>
@import "../style/colorSet.scss";

.rootDiv {
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  .starCanvas {
    background-color: $colorSet1;
  }
  .title {
    position: absolute;
    margin: auto;
    color: #ffffff;
    span {
      color: $colorSet5;
    }
  }
  #myCanvas {
    width: 100%;
    height: auto;
  }
  .container {
    top: 0;
    height: 100vh;
    z-index: 1;
    display: flex;
    opacity: 1;
    transition: all 0.5 ease;
  }
  .title {
    margin: auto;
    color: #ffffff;
    span {
      color: $colorSet5;
    }
  }
  .bottom {
    position: absolute;
    bottom: 0;
    display: flex;
    height: 50px;
    width: 100%;
    img {
      margin: auto;
      height: 20px;
    }
  }
}
</style>
