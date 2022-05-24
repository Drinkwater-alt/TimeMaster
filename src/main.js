import Vue from 'vue'
import App from './App.vue'
import router from './routers'
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
//添加Date Format 时间格式化函数
import './utils/DateFormat'

//使用iview2
//http://v1.iviewui.com/docs/guide/start
import {  Message,Button,Drawer } from 'iview';
import 'iview/dist/styles/iview.css'
import 'view-design/dist/styles/iview.css';

import ViewUI from 'view-design';
Vue.use(ViewUI);
Vue.use(Button);
Vue.use(Drawer)


Vue.prototype.$Message = Message



new Vue({
    router,
    store,
    render: h => h(App)
}).$mount('#app')
