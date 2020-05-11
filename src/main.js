import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
// 引入echars
import echarts from 'echarts'
Vue.prototype.$echarts = echarts 
// 引入axios
import axios from 'axios'
Vue.prototype.axios = axios;
Vue.config.productionTip = false
// 导入mint-ui
 import MintUI from 'mint-ui'; 
//导入样式表文件 
import "mint-ui/lib/style.min.css";
//运用  mint-ui
//注册全局组件 底部选项卡
import Tabbar from '../src/components/Tabbar';
Vue.component('tabbar',Tabbar)

Vue.use(MintUI);
Vue.config.productionTip = false

new Vue({
  router,
  
  store,
  render: h => h(App)
}).$mount('#app')
