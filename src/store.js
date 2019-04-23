import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    userdata:{
      nickname:'游客'
    },
    iflogin:false,
  },
  mutations: {
    settuserdata(state,userdata){
      state.userdata = userdata;
    },
    setiflogin(state,loginstates){
      state.iflogin = loginstates;
    }
  }
  ,
  actions: {
    checkiflogin(context,item){
      context.commit('setiflogin',item)
    },
    settuserdata(context,item){
      context.commit('settuserdata',item)
    },
  }
})
