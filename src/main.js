// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
//element-ui的引入需要引入两个部分，一个是element-ui,一个是样式
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css';
import { create } from 'domain';

Vue.use(ElementUI);
Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
