import Vue from 'vue'
import Vuex from 'vuex'
import createLogger from 'vuex/dist/logger'

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
  },
  // 在開發環境下啟用 監聽全域state用的查看器createLogger
  plugins: process.env.NODE_ENV !== 'production'
    ? [createLogger()]
    : []
})

export default store