import Vue from 'vue'
import App from './App.vue'
import shuvi from '../../dist/shuvi.js'
import '../../dist/shuvi.css'

Vue.use(shuvi)

new Vue({
  el: '#app',
  render: h => h(App)
})
