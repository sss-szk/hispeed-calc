<template>
  <h1>ハイスピを固定しつつ白数字を変えたときの緑数字を出すやつ</h1>
  <label class="subtitle">現在のハイスピ設定</label>
  <HispeedCalculator v-model:bpm="bpm" v-model:white="white" v-model:sud="sud" v-model:lift="lift" v-model:green="green"></HispeedCalculator>
  <button type="button" class="btn btn-primary" @click="saveToCookies">Save</button>
  <div v-if="isMessageVisible">
    <br />
    <p>初期値を保存しました</p>
    <p>BPM:{{ this.bpm }} SUD+:{{ this.sud }} LIFT:{{ this.lift }} 緑数字:{{ this.green }} </p>
  </div>
  <br />
  <label class="subtitle">新しいハイスピ設定</label>
  <GreenCalculator v-model:bpm="bpm"></GreenCalculator>
</template>

<script>
import HispeedCalculator from './components/HispeedCalculator.vue'
import GreenCalculator from './components/GreenCalculator.vue';
import Cookies from 'js-cookie';

export default {
  name: 'App',
  components: {
    HispeedCalculator,
    GreenCalculator
  },
  data: function(){
    return {
      // フォーム初期値
      bpm: 160,
      sud: 220,
      lift: 240,
      white: 460,
      green: 280,
      isMessageVisible: false,
    }
  },
  methods: {
    saveToCookies() {
      Cookies.set('bpm', this.bpm, { expires: 30 });
      Cookies.set('sud', this.sud, { expires: 30 });
      Cookies.set('lift', this.lift, { expires: 30 });
      //Cookies.set('white', this.white, { expires: 30 });
      Cookies.set('green', this.green, { expires: 30 });
      this.showMessage();
    },
    loadFromCookies() {
      const savedBpm = Cookies.get('bpm');
      const savedSud = Cookies.get('sud');
      const savedLift = Cookies.get('lift');
      const savedWhite = Cookies.get('white');
      const savedGreen = Cookies.get('green');

      if (savedBpm !== undefined) this.bpm = parseInt(savedBpm);
      if (savedSud !== undefined) this.sud = parseInt(savedSud);
      if (savedLift !== undefined) this.lift = parseInt(savedLift);
      if (savedWhite !== undefined) this.white = parseInt(savedWhite);
      if (savedGreen !== undefined) this.green = parseInt(savedGreen);
    },
    showMessage() {
      this.isMessageVisible = true;
    },
    closeMessage() {
      if (this.isMessageVisible) this.isMessageVisible = false;
    },
  },
  watch: {
    bpm: 'closeMessage',
    sud: 'closeMessage',
    lift: 'closeMessage',
    white: 'closeMessage',
    green: 'closeMessage',
  },
  mounted(){
    this.loadFromCookies();
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}

.subtitle {
  margin-top: 30px;
  font-size: 1.5em;
}
</style>
