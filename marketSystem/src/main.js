import Vue from 'vue'
import App from './App.vue'
import router from './router'

//引入element-ui
import ElementUI from 'element-ui'; // JS组件
import 'element-ui/lib/theme-chalk/index.css'; // CSS样式
//引入css重置
import "@/assets/css/base.css"
//引入reqest.js 封装的axios
import request from "./utils/request";
//挂到Vue的原型上  Vue构造的对象都能用  export 相当于new Vue
Vue.prototype.request = request;

//注册element-ui   
Vue.use(ElementUI);

Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
