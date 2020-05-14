'use strict'
import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

export default [{
  // 为了避免找不到入口点
  path: '/',
  component: () => import('../App'),

}]
