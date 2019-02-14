import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {//存值
    count:0,
    a:'xxx',
    b:20

  },
  mutations: {//修改值
    add(state,num){
      state.count += num; 
    }
  },
  getters:{
    sum:(state)=>{
      return state.count + state.b;
    }
  },
  actions: {
    addAction({commit},num){
      commit('add',num);

    }

  }
})
