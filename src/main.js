// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import '@/assets/font/iconfont.css'
import 'swiper/dist/css/swiper.css'
import axios from "axios"
import Mint from 'mint-ui';
import "@/common/directive"
import Gotop from "@/components/common/gotop"
import Tiao from "@/components/common/tiao"
Vue.use(Mint);
Vue.config.productionTip = false
Vue.component('Gotop',Gotop)
Vue.component('Tiao',Tiao)
Vue.prototype.$http = axios
/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
