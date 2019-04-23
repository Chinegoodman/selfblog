import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    userdata:{
      nickname:'游客'
    },
    iflogin:false,
    mengbanstatus:false,
    loginregistboxstatus:false,
  },
  mutations: {
    settuserdata(state,userdata){
      state.userdata = userdata;
    },
    setiflogin(state,loginstates){
      state.iflogin = loginstates;
    },
    mengbanstatus(state,val){
      state.mengbanstatus = val
    },
    loginregistboxstatus(state,val){
      state.loginregistboxstatus = val
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
    mengbanstatus(context,val){
      context.commit('mengbanstatus',val);
    },
    loginregistboxstatus(context,val){
      context.commit('loginregistboxstatus',val);
    }
  }
})
