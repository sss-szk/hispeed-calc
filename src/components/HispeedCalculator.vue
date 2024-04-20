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
        <label for="white" >白数字:{{ localWhite }}</label>
      </div>
      <div class="row justify-content-center">
        <div class="col-md-2 mb-3">
          <label for="sud">SUD+:</label>
          <input type="number" class="form-control" id="sud" v-model="localSud" />
        </div>
        <div class="col-md-2 mb-3">
          <label for="lift">LIFT:</label>
          <input type="number" class="form-control" id="lift" v-model="localLift" min="0"/>
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
      
      <div>
        <p>ノーツ表示時間:{{ this.blue }}s</p>
      </div>
    </div>

  </div>
</template>

<script>
import { ref, watch, onMounted } from 'vue';
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
    lift: {
      type: Number,
      required: true,
    },
    sud: {
      type: Number,
      required: true,
    },
    green: {
      type: Number,
      required: true,
    },
  },
  setup(props, { emit }) {
    // refを使用してローカルなリアクティブな変数 localBpm を定義し、props.bpm の初期値で初期化
    const localBpm = ref(props.bpm);
    const localSud = ref(props.sud);
    const localLift = ref(props.lift);
    const localWhite = ref(props.white);
    const localGreen = ref(props.green);

    const hispeed = ref(0);
    const blue = ref(0);

    // localBpm の変更を検知して、emit('update:bpm', newBpm) で親コンポーネントに通知
    watch(localBpm, (newBpm) => {
      emit('update:bpm', newBpm);
    });
    watch(localWhite, (newWhite) => {
      emit('update:white', newWhite);
    });
    watch(localSud, (newSud) => {
      emit('update:sud', newSud);
    });
    watch(localLift, (newLift) => {
      emit('update:lift', newLift);
    });
    watch(localGreen, (newGreen) => {
      emit('update:green', newGreen);
    });

    // props.bpm の変更を検知して、localBpm.value を新しい値で更新
    watch(() => props.bpm, (newBpm) => {
      localBpm.value = newBpm;
      hispeed.value = calcHS(localWhite.value, localBpm.value, localGreen.value);
    });
    watch(() => props.white, (newWhite) => {
      localWhite.value = newWhite;
      hispeed.value = calcHS(localWhite.value, localBpm.value, localGreen.value);
    });
    watch(() => props.sud, (newSud) => {
      localSud.value = newSud;
      localWhite.value = newSud + localLift.value;
    });
    watch(() => props.lift, (newLift) => {
      localLift.value = newLift;
      localWhite.value = localSud.value + newLift;
    });
    watch(() => props.green, (newGreen) => {
      localGreen.value = newGreen;
      hispeed.value = calcHS(localWhite.value, localBpm.value, localGreen.value);
      blue.value = calcBlue(localGreen.value);
    });

    // onMountedフックで初期化
    onMounted(() => {
      hispeed.value = calcHS(localWhite.value, localBpm.value, localGreen.value);
      blue.value = calcBlue(localGreen.value);
    });

    function calcHS(white, bpm, green) {
      var hs = 174800 * ( (1000 - parseFloat(white)) / 1000) / (parseFloat(bpm) * parseFloat(green));
      hs = Math.ceil( hs * 100 );
      hs = hs / 100;
      return hs;
    }

    function calcBlue(green) {
      var blue =  parseFloat(green) * 0.01666 / 10;
      return parseFloat(blue.toFixed(3));
    }

    // setup関数から返すオブジェクト。これにより、コンポーネント内で使用できる変数や関数を提供
    return {
      localBpm,localWhite,localGreen,localSud,localLift,hispeed,blue
    };
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
