import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    color:"#ff0036",
    name:"电影",
    photos:[]

  },
  mutations: {
    change(state,obj){
      state.color = obj.bgColor;
      state.name = obj.name;    
    },
    addphoto(state,photo){
      state.photos = [...photo];


    }

  },
  actions: {

  }
})
