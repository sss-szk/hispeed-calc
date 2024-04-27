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
          <input type="number" class="form-control" id="bpm" v-model="localBpm" disabled/>
        </div>
      </div>

      <div class="row justify-content-center">
          <label for="white">白数字:{{ white }}</label>
      </div>
      <div class="row justify-content-center">
        <div class="col-md-2 mb-3">
          <label for="sud">SUD+:</label>
          <input type="number" class="form-control" id="sud" v-model="sud" />
        </div>
        <div class="col-md-2 mb-3">
          <label for="lift">LIFT:</label>
          <input type="number" class="form-control" id="lift" v-model="lift" min="0"/>
        </div>
      </div>

      <div class="row justify-content-center">
        <div class="col-md-2 mb-3">
          <label for="hispeed">☆HiSpeed:</label>
          <input type="number" step="0.01" class="form-control" id="hispeed" v-model="hispeed" />
        </div>
      </div>

      <div class="row justify-content-center">
        <div class="col-md-3 mb-3">
          <label for="green">☆計算した緑数字:</label>
          <label class="big-bold-green">{{ Math.ceil(this.green) }}</label>
        </div>
      </div>

      <DetailInfo v-model:green="green" v-model:white="white"></DetailInfo>
    </div>

  </div>
</template>

<script>
import { ref, watch ,onMounted } from 'vue';
import DetailInfo from './DetailInfo.vue';

export default {
  components: {
    DetailInfo
  },
  props: {
    bpm: {
      type: Number,
      required: true,
    },
  },
  setup(props, { emit }) {
    // refを使用してローカルなリアクティブな変数 localBpm を定義し、props.bpm の初期値で初期化
    const localBpm = ref(props.bpm);
    const green = ref(0);
    const hispeed = ref(0);
    const white = ref(0);
    const lift = ref(0);
    const sud = ref(0);

    // localBpm の変更を検知して、emit('update:bpm', newBpm) で親コンポーネントに通知
    watch(localBpm, (newBpm) => {
      emit('update:bpm', newBpm);
    });

    // props.bpm の変更を検知して、localBpm.value を新しい値で更新
    watch(() => props.bpm, (newBpm) => {
      localBpm.value = newBpm;
      green.value = calcGreen(white.value, localBpm.value, hispeed.value);
    });
    watch(() => hispeed.value, (newHs) => {
      hispeed.value = newHs;
      green.value = calcGreen(white.value, localBpm.value, hispeed.value);
    })
    watch(() => white.value, (newWhite) => {
      white.value = newWhite;
      green.value = calcGreen(white.value, localBpm.value, hispeed.value);
    })
    watch(() => sud.value, (newSud) => {
      sud.value = newSud;
      white.value = newSud + lift.value;
    });
    watch(() => lift.value, (newLift) => {
      lift.value = newLift;
      white.value = sud.value + newLift;
    });

    // onMountedフックで初期化
    onMounted(() => {
      white.value = 455;
      hispeed.value = 2.11;
      sud.value = 220;
      lift.value = 240;
      green.value = calcGreen(white.value , localBpm.value , hispeed.value);
    });

    function calcGreen(white, bpm, hs) {
      var  green = 174800 * ( (1000 - parseFloat(white)) / 1000) / ( parseFloat(bpm) * parseFloat(hs));
      return green;
    }

    // setup関数から返すオブジェクト。これにより、コンポーネント内で使用できる変数や関数を提供
    return {
      localBpm,green,hispeed,white,lift,sud
    };
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
