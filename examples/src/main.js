import Vue from 'vue'
import App from './App.vue'
import shuvi from '../../src/';

Vue.use(shuvi);

new Vue({
  el: '#app',
  render: h => h(App)
})
