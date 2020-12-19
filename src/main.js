// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import fastClick from 'fastclick'
import VueAwesomeSwiper from 'vue-awesome-swiper'
// 将 store派发到每个子组件
import store from './store/index'
import 'styles/reset.css'
import 'styles/border.css'
import 'styles/iconfont.css'
import 'swiper/dist/css/swiper.css'

Vue.config.productionTip = false
fastClick.attach(document.body)
/* eslint-disable no-new */
Vue.use(VueAwesomeSwiper)

new Vue({
  el: '#app',
  router,
  // 将store实例导入根实例
  store,
  components: { App },
  template: '<App/>'
})
