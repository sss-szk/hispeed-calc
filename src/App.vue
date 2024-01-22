<template>
  <h1>ハイスピを固定しつつ白数字を変えたときの緑数字を出すやつ</h1>
  <label class="subtitle">現在のハイスピ設定</label>
  <HispeedCalculator v-model:bpm="bpm" v-model:white="white" v-model:green="green"></HispeedCalculator>
  <p>入力内容を保存</p>
  <button type="button" class="btn btn-primary" @click="saveToCookies">Save</button>
  <br class="button" />
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
      bpm: 187,
      white: 455,
      green: 290
    }
  },
  methods: {
    saveToCookies() {
      Cookies.set('bpm', this.bpm, { expires: 30 });
      Cookies.set('white', this.white, { expires: 30 });
      Cookies.set('green', this.green, { expires: 30 });
    },
    loadFromCookies() {
      const savedBpm = Cookies.get('bpm');
      const savedWhite = Cookies.get('white');
      const savedGreen = Cookies.get('green');

      if (savedBpm !== undefined) this.bpm = parseInt(savedBpm);
      if (savedWhite !== undefined) this.white = parseInt(savedWhite);
      if (savedGreen !== undefined) this.green = parseInt(savedGreen);
    },
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
