<template>
  <div>
    <div class="container mt-4">

      <span class="nowrap" for="bpm">BPM:必ず上で入力したものと同じ値を入れてください</span>
      <br>
      <span class="nowrap" for="bpm">白数字:自由に入力してください</span>
      <br>
      <span class="nowrap" for="bpm">HiSpeed:上で計算した値を入れてください</span>
      <br><br>

      <div class="row justify-content-center nowrap">
        <div class="col-md-2 mb-3">
          <label for="bpm">BPM:</label>
          <input type="number" class="form-control" id="bpm" v-model="bpm" />
        </div>
      </div>

      <div class="row justify-content-center">
        <div class="col-md-2 mb-3">
          <label for="white">白数字:</label>
          <input type="number" class="form-control" id="white" v-model="white" />
        </div>
      </div>

      <div class="row justify-content-center">
        <div class="col-md-2 mb-3">
          <label for="green">☆HiSpeed:</label>
          <input type="number" step="0.01" class="form-control" id="green" v-model="hispeed" />
        </div>
      </div>

      <div class="row justify-content-center">
        <div class="col-md-3 mb-3">
          <label for="hispeed">☆計算した緑数字:</label>
          <label class="big-bold-green">{{ Math.ceil(this.green) }}</label>
        </div>
      </div>
    </div>

  </div>
</template>

<script>
export default {
  // HTMLで使う変数
  data: function () {
    return {
      bpm: 187,
      white: 455,
      green: 0,
      hispeed: 1.76
    };
  },
  methods: {
    calcGreen() {
      var  green = 174800 * ( (1000 - this.white) / 1000) / ( this.bpm * this.hispeed);
      this.green = green;
    }
  },
  watch: {
    bpm: 'calcGreen',
    white: 'calcGreen',
    hispeed: 'calcGreen',
  },
  mounted() {
    this.calcGreen()
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.big-bold-green {
  font-weight: bold;
  font-size: 2em;
  color:darkgreen
}

.nowrap {
  white-space: nowrap;
}

</style>
