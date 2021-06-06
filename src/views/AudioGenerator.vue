<template>
  <div>
    <button @mouseenter="audioPlay"> Hover me</button>
  </div>
</template>

<script>
export default {
  mounted() {
    this.AudioContext = window.AudioContext || window.webkitAudioContext;
    this.audioCtx = new this.AudioContext();
    this.oscillator = this.audioCtx.createOscillator();
    this.gainNode = this.audioCtx.createGain();
    this.oscillator.connect(this.gainNode);
    this.gainNode.connect(this.audioCtx.destination);
    this.oscillator.type = 'sine';
  },
  data() {
    return {
      AudioContext: null,
      audioCtx: null,
      oscillator: null,
      gainNode: null,
    };
  },
  methods: {
    audioPlay() {
      this.oscillator.frequency.value = 196.00;
      this.gainNode.gain.setValueAtTime(0, this.audioCtx.currentTime);
      // 0.01秒時間內音量從剛剛的0變成1,線性變化
      this.gainNode.gain.linearRampToValueAtTime(1, this.audioCtx.currentTime + 0.01);
      // 聲音走起
      this.oscillator.start(this.audioCtx.currentTime);
      // 1秒時間內音量從剛剛的1變成0.001,指數變化
      this.gainNode.gain.exponentialRampToValueAtTime(0.001, this.audioCtx.currentTime + 1);
      // 1秒後停止聲音
      this.oscillator.stop(this.audioCtx.currentTime + 1);
    },
  },
};
</script>

<style lang="stylus" scoped>

</style>
