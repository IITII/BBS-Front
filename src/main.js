'use strict'
import Vue from 'vue'
import componentsRegister from '@/utils/componentsRegister';
import i18n from './language/index'
import store from './store/userInfo'
import App from './App.vue'
import router from './routes/routes'
import {BootstrapVue, BootstrapVueIcons, IconsPlugin} from 'bootstrap-vue'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'

Vue.config.productionTip = false

componentsRegister();
// Install BootstrapVue
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
