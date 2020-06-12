<template>
  <div>
    <h1>canvas </h1>
    <b-row class="text-center">
      <b-col></b-col>
      <b-col cols="8">
        <canvas
          id="myCanvas"
          @mousedown="onCanvasMouseDown"
          @mouseup="onCanvasMouseUp"
          :style="`background-color: ${canvasBackgroundColor}`"
        ></canvas
      ></b-col>
      <b-col>
        <div style="display: flex; flex-direction: column; width: 60%;">
          <label for="">
            Background Color
            <b-form-input v-model="canvasBackgroundColor" type="color"></b-form-input>
          </label>
          <hr>
          <label for="">
            Stork Color
            <b-form-input v-model="storkColor" type="color"></b-form-input>
          </label>
          <hr>
          <label for="">
            parts: {{parts}}
            <b-form-input v-model="parts" type="range" min="1" max="10"></b-form-input>
          </label>
          <hr>
          <b-button @click="resetCanvas">Clear</b-button>
          <hr>
          <b-button v-if="isRandom" @click="randomfill">Stop</b-button>
          <b-button v-if="!isRandom" @click="randomfill">Random</b-button>
        </div>
      </b-col>
    </b-row>
  </div>
</template>

<script>
import { throttle } from 'lodash/function';
import { random } from 'lodash/number';
import { last } from 'lodash/array';

export default {
  mounted() {
    this.setCanvas();
    this.setWindowEvent();
  },
  methods: {
    setCanvas() {
      this.canvas = document.getElementById('myCanvas');
      const ctx = this.canvas.getContext('2d');
      this.vueCanvas = ctx;
      this.canvas.height = window.innerHeight * 0.7;
      this.canvas.width = this.canvas.height;
      this.vueCanvas.translate(this.canvas.height / 2, this.canvas.height / 2);
      this.vueCanvas.strokeStyle = this.storkColor;
      this.vueCanvas.fillStyle = this.storkColor;
    },
    onCanvasMouseUp() {
      this.isMouseDown = false;
    },
    onCanvasMouseDown() {
      this.isMouseDown = true;
    },
    setWindowEvent() {
      window.addEventListener('mousemove', throttle(this.mousemoveCallback, 50));
    },
    mousemoveCallback(evt) {
      const curPos = this.getCanvasMousePosition(evt.clientX, evt.clientY);

      if (this.isMouseDown) {
        this.pushAndPop(curPos);
      }
    },
    getCanvasMousePosition(clientX, clientY) {
      const canvasPosition = this.vueCanvas.canvas.getBoundingClientRect();
      const x = clientX - canvasPosition.x - this.canvas.height / 2;
      const y = clientY - canvasPosition.y - this.canvas.height / 2;
      return { x, y };
    },
    pushAndPop(pos) {
      this.historyArray.push(pos);
      if (this.historyArray.length > 100) {
        this.historyArray.shift();
      }
    },
    drawRotate() {
      const radian = Math.PI / 180;
      const { canvas } = this.vueCanvas;
      this.vueCanvas.translate(-this.canvas.height / 2, -this.canvas.height / 2);
      this.vueCanvas.clearRect(0, 0, canvas.width, canvas.height);
      this.vueCanvas.translate(this.canvas.height / 2, this.canvas.height / 2);
      for (let i = 0; i < this.parts; i += 1) {
        this.vueCanvas.rotate((360 / this.parts) * radian);

        this.vueCanvas.save();
        this.drawCanvasPath();
        this.vueCanvas.restore();
      }
    },
    drawCanvasPath() {
      this.vueCanvas.beginPath();
      for (let i = 1; i < this.historyArray.length; i += 1) {
        const prePos = this.historyArray[i - 1];
        const pos = this.historyArray[i];
        this.drawLine(prePos, pos);
        this.drawLine({ x: prePos.y, y: prePos.x }, { x: pos.y, y: pos.x });
        this.vueCanvas.moveTo(prePos.x, prePos.y);
        this.vueCanvas.lineTo(pos.x, pos.y);
      }
      const point = last(this.historyArray);
      this.vueCanvas.arc(point.x, point.y, 3, 0, Math.PI * 2, true);
      this.vueCanvas.moveTo(point.y, point.x);
      this.vueCanvas.arc(point.y, point.x, 3, 0, Math.PI * 2, true);
      this.vueCanvas.fill();
      this.vueCanvas.stroke();
    },
    drawLine(from, to) {
      this.vueCanvas.moveTo(from.x, from.y);
      this.vueCanvas.lineTo(to.x, to.y);
    },
    resetCanvas() {
      const { canvas } = this.vueCanvas;
      this.vueCanvas.translate(-this.canvas.height / 2, -this.canvas.height / 2);
      this.vueCanvas.clearRect(0, 0, canvas.width, canvas.height);
      this.historyArray = [];

      this.vueCanvas.translate(this.canvas.height / 2, this.canvas.height / 2);
    },
    randomfill() {
      this.pushAndPop({
        x: 0,
        y: 0,
      });
      if (!this.isRandom) {
        this.randomInterval = setInterval(() => {
          const pre = last(this.historyArray);
          const xShift = random(-20, 20);
          const yShift = random(-20, 20);
          const pos = {
            x: pre.x + xShift > this.canvas.height / 2 ? pre.x + xShift : pre.x - xShift,
            y: pre.y + yShift > this.canvas.height / 2 ? pre.y + yShift : pre.y - yShift,
          };
          this.pushAndPop(pos);
        }, 100);
      } else {
        clearInterval(this.randomInterval);
      }
      this.isRandom = !this.isRandom;
    },
  },
  watch: {
    historyArray() {
      console.log('array change');
      // console.log(this.historyArray.length);
      if (this.historyArray.length) {
        this.drawRotate();
      }
    },
    storkColor() {
      this.vueCanvas.strokeStyle = this.storkColor;
      this.vueCanvas.fillStyle = this.storkColor;
    },
    parts() {
      this.historyArray = [];
    },
  },
  data() {
    return {
      canvas: null,
      vueCanvas: null,
      canvasBackgroundColor: '#097c9c',
      storkColor: '#ffffff',
      isMouseDown: false,
      historyArray: [],
      isRandom: false,
      randomInterval: null,
      parts: 8,
    };
  },
};
</script>
