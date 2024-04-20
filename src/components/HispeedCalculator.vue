<template>
  <div>
    <div class="container mt-4">

      <div class="row justify-content-center">
        <div class="col-md-2 mb-3">
          <label for="bpm">BPM:</label>
          <input type="number" class="form-control" id="bpm" v-model="localBpm" />
        </div>
      </div>

      <div class="row justify-content-center">
        <div class="col-md-2 mb-3">
          <label for="white">白数字:</label>
          <input type="number" class="form-control" id="white" v-model="localWhite" />
        </div>
      </div>

      <div class="row justify-content-center">
        <div class="col-md-2 mb-3">
          <label for="green">緑数字:</label>
          <input type="number" class="form-control" id="green" v-model="localGreen" />
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
import { ref, watch } from 'vue';
export default {
  props: {
    bpm: {
      type: Number,
      required: true,
    },
    white: {
      type: Number,
      required: true,
    },
    green: {
      type: Number,
      required: true,
    },
  },
  // HTMLで使う変数
  data: function () {
    return {
      hispeed: 0
    };
  },
  setup(props, { emit }) {
    // refを使用してローカルなリアクティブな変数 localBpm を定義し、props.bpm の初期値で初期化
    const localBpm = ref(props.bpm);
    const localWhite = ref(props.white);
    const localGreen = ref(props.green);

    // localBpm の変更を検知して、emit('update:bpm', newBpm) で親コンポーネントに通知
    watch(localBpm, (newBpm) => {
      emit('update:bpm', newBpm);
    });
    watch(localWhite, (newWhite) => {
      emit('update:white', newWhite);
    });
    watch(localGreen, (newGreen) => {
      emit('update:green', newGreen);
    });

    // props.bpm の変更を検知して、localBpm.value を新しい値で更新
    watch(() => props.bpm, (newBpm) => {
      localBpm.value = newBpm;
    });
    watch(() => props.white, (newWhite) => {
      localWhite.value = newWhite;
    });
    watch(() => props.white, (newGreen) => {
      localWhite.value = newGreen;
    });

    // setup関数から返すオブジェクト。これにより、コンポーネント内で使用できる変数や関数を提供
    return {
      localBpm,localWhite,localGreen,
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
    localBpm: 'calcHS',
    localWhite: 'calcHS',
    localGreen: 'calcHS',
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
