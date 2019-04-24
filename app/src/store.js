import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    count:111,
    msg:'hahah'
  },
  mutations: {
    add(state,num){
      state.count+=num;
    },
    reduce(state,num){
      state.count-=num;
    }
  },
  getters:{
    num(state){
      return state.count + state.msg;
    },
    xx(state){
      return state.count*20;
    }
  },
  actions: {

  }
})
