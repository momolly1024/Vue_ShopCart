import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    cart: []
  },
  mutations: {
    addCart (state, data) {
      state.cart.push(data)
    },
    delCart (state, data) {
      state.cart.splice(data, 1)
    }
  },
  getters: {
    cart (state) {
      return state.cart
    }
  },
  actions: {
  },
  modules: {
  }
})
