import Vue from 'vue'
import App from './App.vue'
import './registerServiceWorker'
import api from './api/index' //导入api接口
import router from './plugins/router'
import 'lib-flexible' //移动端自适应
import './assets/css/base.css' //消除所有默认样式
import store from './store/index'
Vue.config.productionTip = false
Vue.prototype.$api = api //把api挂载到vue原型上
console.log(process.env.VUE_APP_URL)
new Vue({
  render: h => h(App),
  router,
  store
}).$mount('#app')
