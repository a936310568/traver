import Vue from 'vue'
import Vuex from 'vuex'
import state from './state'

//  通过vue.use来使用 插件vuex
Vue.use(Vuex)

// 导出通过vuex创建的仓库
export default new Vuex.Store({
  state,
  actions: {
    // ctx为上下文参数,帮助我们拿到commit方法
    changeCity (ctx, city) {
      // changecity为mutations里面的方法
      ctx.commit('changeCity', city)
    }
  },
  // getters: {
  //   doubleCity (state) {
  //     return state.city + '' + state.city
  //   }
  // },
  mutations: {
    changeCity (state, city) {
      state.city = city
      // 本地存储
      // localStorage.city = city
      try {
        localStorage.city = city
      } catch (e) {}
    }
  }
})
