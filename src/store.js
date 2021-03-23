import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const store = new Vuex.Store({
  state: {
    count: 0
  },
  mutations: { // mutations為同步處理
    increment(state, num) {
      state.count = state.count + num
    }
  },
  actions: { // 負責處理邏輯，只送mutations，允許非同步
    increment(context, num) {
      context.commit('increment', num)
    }
  }
})

export default store