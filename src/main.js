'use strict'
import Vue from 'vue'
// 全局注册
import componentsRegister from '@/utils/componentsRegister';
// 国际化支持
import i18n from '@/language/index'
// Vuex 状态管理
import store from '@/store/userInfo'
import App from '@/App.vue'
//Vue Router 路由管理
import router from '@/routes/routes'
// 样式
import {BootstrapVue, BootstrapVueIcons, IconsPlugin} from 'bootstrap-vue'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'

Vue.config.productionTip = false

//全局注册基本组件
componentsRegister();
// 使用 BootstrapVue
Vue.use(BootstrapVue)
// Optionally install the BootstrapVue icon components plugin
Vue.use(IconsPlugin)
Vue.use(BootstrapVueIcons)

new Vue({
  i18n,
  store,
  router,
  render: h => h(App),
}).$mount('#app')
