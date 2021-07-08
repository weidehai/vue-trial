import Vue from 'vue'
import Vuex from 'vuex'
Vue.use(Vuex)

const store = new Vuex.Store({
  state: {
    count:0,
    fisrtName:'wei',
    lastName:'dehai'
  },

  mutations: {
    add(state){
      state.count++
    }
  },

  actions: {

  },

  getters: {
    getFullName(state){
      console.log('我被执行了');
      return state.fisrtName+state.lastName
    }
  }
})

export default store
