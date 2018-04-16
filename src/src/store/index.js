/* eslint-disable */
import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

let defaultCity = '北京'
try {
  if(localStorage.city){
    defaultCity = localStorage.city
  }
}catch (e){}


export default new Vuex.Store({
  state: {
    // city: localStorage.city || '北京'
    city: defaultCity
  },
  // actions: {
  //   changeCity(ctx,city){
  //     // console.log(city)
  //     ctx.commit('changeCity',city)
  //   }
  // },
  mutations: {
    changeCity(state,city){
      state.city = city
      try {
        if(localStorage.city){
          dafaultCity = localStorage.city
        }
      }catch (e){}
    }
  }
})

