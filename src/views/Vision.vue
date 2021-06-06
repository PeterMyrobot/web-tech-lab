<template>
  <div class="camera">
    <video autoplay class="feed"></video>
    <button class="snap" @click="$emit('takePicture')">SNAP</button>
  </div>
</template>

<script>
export default {
  beforeMount() {
    // this.init();
  },
  methods: {
    init() {
      if ('mediaDevices' in navigator && 'getUserMedia' in navigator.mediaDevices) {
        navigator.mediaDevices.getUserMedia({ video: true }).then((stream) => {
          const videoPlayer = document.querySelector('video');
          videoPlayer.srcObject = stream;
          videoPlayer.play();
        });
      } else {
        console.log('err');
      }
    },
  },

};
</script>

<style lang="scss" scoped>
.camera{
  width: 100vw;
  height: 100vh;
  padding:25px;
  box-sizing: border-box;

  .feed{
    display: block;
    margin:0 auto;
    width: 100%;
    max-width: 1200px;
    background-color:#171717;
    box-shadow: 6px 6px 12px 0px rgba(0, 0, 0, 0.35);

  }
  .snap{
    display: block;
    width: 75px;
    height: 75px;
    border-radius: 50%;
    margin: 25px auto;

    background-color:transparentize($color: #FFCE00, $amount: 0.5);
    border: 1px solid #171717;
    outline: none;

    &:hover{
      background-color: #FFCE00;
    }
    &:active{
      background-color: darken($color: #FFCE00, $amount: 10);
    }
  }

}
</style>
