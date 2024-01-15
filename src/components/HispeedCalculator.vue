<template>
  <div>
    <div class="container mt-4">

      <div class="row justify-content-center">
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
          <label for="green">緑数字:</label>
          <input type="number" class="form-control" id="green" v-model="green" />
        </div>
      </div>

      <div class="row justify-content-center">
        <div class="col-md-3 mb-3">
          <label for="hispeed">☆計算したHiSpeed:</label>
          <label class="big-bold">{{ this.hispeed }}</label>
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
      green: 290,
      hispeed: 0
    };
  },
  methods: {
    calcHS() {
      var hispeed = 174800 * ( (1000 - this.white) / 1000) / (this.bpm * this.green);
      hispeed = Math.ceil( hispeed * 100 );
      hispeed = hispeed / 100;
      this.hispeed = hispeed;
    }
  },
  watch: {
    bpm: 'calcHS',
    white: 'calcHS',
    green: 'calcHS',
  },
  mounted() {
    // ページが表示されたときにハイスピを計算
    this.calcHS();
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.big-bold {
  font-weight: bold;
  font-size: 2em;
}

.nowrap {
  white-space: nowrap;
}

</style>
