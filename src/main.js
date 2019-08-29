import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

// import axios from 'axios'
import { setlocalstorage, getlocalstorage, removelocalstorage } from './usefuljs/index'

// 方式一:
// const fashionclock = require('fashionclock')
// Vue.prototype.fashionclock =fashionclock

// 方式二
import fashionclock from 'fashionclock'
Vue.prototype.fashionclock = fashionclock

import fashion_music_cvs from 'fashion_music_cvs'
Vue.prototype.cvsgetready = fashion_music_cvs

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