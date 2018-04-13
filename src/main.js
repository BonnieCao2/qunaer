/* eslint-disable */
import Vue from 'vue'
import App from './App'
import router from './router'
/*某些机型或浏览器上移动端300mm延迟解决*/
import fastClick from  'fastClick'
import VueAwesomeSwiper from 'vue-awesome-swiper'
import './assets/styles/reset.css'
/*移动端多倍屏1px边框解决方案*/
import './assets/styles/border.css'
import './assets/styles/iconfont.css'
import 'swiper/dist/css/swiper.css'

Vue.config.productionTip = false
fastClick.attach(document.body)
Vue.use(VueAwesomeSwiper)

new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})


//路由根据网址不同返回不同的内容
//es6键值相同写一个即可
