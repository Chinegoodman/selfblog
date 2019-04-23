import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
// import axios from 'axios'
import { setlocalstorage,getlocalstorage,removelocalstorage } from './usefuljs/index'

// 自定义尝试eventbus
import eventbus from '@/eventbus'
Vue.use(eventbus);


import './api/index'
// Vue.prototype.axios = axios
import './components/selfcommon'

// quill
import VueQuillEditor from 'vue-quill-editor'
import 'quill/dist/quill.core.css'
import 'quill/dist/quill.snow.css'
import 'quill/dist/quill.bubble.css'

Vue.use(VueQuillEditor)

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
