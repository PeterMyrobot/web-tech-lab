<template>
  <div>
    <div>
      <b-button-group>
        <b-button @click="startProgress('bfs')">BFS</b-button>
        <b-button @click="startProgress('dfs')">DFS</b-button>
        <b-button @click="gridReset()">clear</b-button>
      </b-button-group>
      <b-nav pills>
        <b-nav-item
          v-for="el in options"
          :key="el"
          :active="el === selected"
          @click="changeSelected(el)"
          >{{ el }}</b-nav-item
        >
      </b-nav>
    </div>
    <div class="box">
      <div v-for="(el, i) in gridArray" :key="i" style="display:flex; flex-direction: row;">
        <div
          v-for="(el, j) in gridArray[i]"
          :key="`${j}-${el}`"
          :class="el"
          @mouseenter="enterGrid(i, j)"
          @mousedown="startDraw(i, j)"
          @mouseup="endDraw()"
        ></div>
      </div>
    </div>

    <span>{{ selected }}</span>
  </div>
</template>

<script>
import _ from 'lodash';

export default {
  mounted() {
    this.initArray();
  },
  methods: {
    initArray() {
      this.gridArray = new Array(30);
      for (let i = 0; i < 30; i += 1) {
        this.gridArray[i] = new Array(80).fill('grid');
      }
    },
    gridReset() {
      if (this.tempGrid.length) {
        this.gridArray = _.cloneDeep(this.tempGrid);
      }
    },
    changeSelected(selected) {
      this.selected = selected;
    },
    enterGrid(i, j) {
      // console.log(i, j);
      if (this.chosing) {
        switch (this.selected) {
          case 'start':
            this.setArray(this.start.x, this.start.y, 'grid');
            this.start = { x: i, y: j };
            break;
          case 'end':
            this.setArray(this.end.x, this.end.y, 'grid');
            this.end = { x: i, y: j };
            break;
          default:
            break;
        }
        this.setArray(i, j, this.selected);
      }
    },
    setArray(i, j, val) {
      const newArray = [...this.gridArray[i]];
      newArray[j] = val;
      this.$set(this.gridArray, i, newArray);
    },
    startDraw(i, j) {
      if (!this.isProgress) {
        this.chosing = true;
        this.enterGrid(i, j);
      }
    },
    endDraw() {
      this.chosing = false;
    },
    startDFS() {
      this.tempGrid = _.cloneDeep(this.gridArray);
      const s = [this.start];
      const vm = this;

      function bfscall() {
        if (s) {
          const cur = s.pop();

          // console.log(cur);
          if (vm.gridArray[cur.x][cur.y] !== 'start') {
            vm.setArray(cur.x, cur.y, 'visited');
          }

          const dir = [[1, 0], [0, 1], [-1, 0], [0, -1]];

          for (let i = 0; i < dir.length; i += 1) {
            const tmpX = cur.x + dir[i][0];
            const tmpY = cur.y + dir[i][1];

            if (_.inRange(tmpX, 30) && _.inRange(tmpY, 80)) {
              if (vm.gridArray[tmpX][tmpY] === 'grid') {
                vm.setArray(tmpX, tmpY, 'inqueue');
                s.push({ x: tmpX, y: tmpY });
              } else if (vm.gridArray[tmpX][tmpY] === 'end') {
                console.log('find');
                clearInterval(vm.bfsInterval);
                vm.stopProgress();
              }
            }
          }
        }
      }

      this.bfsInterval = setInterval(bfscall, 20);
    },
    startBFS() {
      this.tempGrid = _.cloneDeep(this.gridArray);
      const s = [this.start];
      const vm = this;

      function bfscall() {
        if (s) {
          const cur = s.shift();

          // console.log(cur);
          if (vm.gridArray[cur.x][cur.y] !== 'start') {
            vm.setArray(cur.x, cur.y, 'visited');
          }

          const dir = [[1, 0], [0, 1], [-1, 0], [0, -1]];

          for (let i = 0; i < dir.length; i += 1) {
            const tmpX = cur.x + dir[i][0];
            const tmpY = cur.y + dir[i][1];

            if (_.inRange(tmpX, 30) && _.inRange(tmpY, 80)) {
              if (vm.gridArray[tmpX][tmpY] === 'grid') {
                vm.setArray(tmpX, tmpY, 'inqueue');
                s.push({ x: tmpX, y: tmpY });
              } else if (vm.gridArray[tmpX][tmpY] === 'end') {
                console.log('find');
                clearInterval(vm.bfsInterval);
                vm.stopProgress();
              }
            }
          }
        }
      }

      this.bfsInterval = setInterval(bfscall, 20);
    },
    startProgress(whichWay) {
      this.isProgress = true;
      if (this.tempGrid.length) {
        this.gridArray = _.cloneDeep(this.tempGrid);
      }
      switch (whichWay) {
        case 'bfs':
          this.startBFS();
          break;
        case 'dfs':
          this.startDFS();
          break;
        default:
          break;
      }
    },
    stopProgress() {
      this.isProgress = false;
    },
  },
  data() {
    return {
      gridArray: [],
      options: ['wall', 'grid', 'start', 'end'],
      selected: 'wall',
      start: { x: 0, y: 0 },
      end: { x: 29, y: 79 },
      chosing: false,
      tempGrid: [],
      isProgress: false,
      bfsInterval: null,
    };
  },
};
</script>

<style lang="scss" scoped>
.box {
  display: inline-block;
  margin: 0 auto;
}

%grid-base {
  width: 1rem;
  height: 1rem;
  border: 1px solid #ccc;
  transition: 0.3s;
  &:hover {
    border: 1px solid #333;
     box-shadow: 0 3px 15px 3px rgba(51, 51, 51, 0.5);
  }
}
.grid {
  @extend %grid-base;
}
.wall {
  @extend %grid-base;
  background-color: #0a4947;
  animation: mymove 0.4s cubic-bezier(0.25, 0.46, 0.45, 0.94) both;
}
.start {
  @extend %grid-base;
  background-color: #dd00ad;
}
.end {
  @extend %grid-base;
  background-color: #00dd30;
}
.inqueue {
  @extend %grid-base;
  background-color: #0072dd;
  animation: mymove 0.4s cubic-bezier(0.25, 0.46, 0.45, 0.94) both;
}
.visited {
  @extend %grid-base;
  background-color: #e4e3b2;
  animation: mymove 0.4s cubic-bezier(0.25, 0.46, 0.45, 0.94) both;
}

@keyframes mymove {
  10% {
    transform: scale(0.8);
  }
  30% {
    transform: scale(0.6);
  }
  100% {
    transform: scale(1);
  }
}
</style>
