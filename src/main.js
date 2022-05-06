import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
Vue.config.productionTip = false

// 挂载axios
import axios from 'axios'
axios.defaults.baseURL = "http://localhost:8080";
Vue.prototype.$axios = axios;

//导入rem计算
import './utils/rem'
//导入全局样式
import './assets/css/GlobalStyle.css'
import './assets/font-awesome-4.7.0/css/font-awesome.min.css'

//使用iview2
//http://v1.iviewui.com/docs/guide/start
import {  Message } from 'iview';
import 'iview/dist/styles/iview.css'
import 'view-design/dist/styles/iview.css';

import ViewUI from 'view-design';
Vue.use(ViewUI);


Vue.prototype.$Message = Message


new Vue({
    router,
    store,
    render: h => h(App)
}).$mount('#app')
