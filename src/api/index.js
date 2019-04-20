import Vue from 'vue'
import axios from 'axios'
console.log(process.env.VUE_APP_BASE_API)
Vue.prototype.axios = axios.create({
    baseURL: process.env.VUE_APP_BASE_API,  // api的_url
    timeout: 50000, // request timeout
});

