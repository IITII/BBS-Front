'use strict'
import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

const routes = [{
  // 为了避免找不到入口点
  path: '/',
  component: () => import('../App'),
  children: [
    {
      path: '',
      redirect: '/home'
    },
    //主页
    {
      path: '/home',
      component: () => import('../views/home')
    },
    // 登录界面
    {
      path: '/login',
      component: () => import('../views/login/login')
    },
    //发帖
    {
      path: '/new-post',
      component: () => import('../views/post/newPost')
    },
    // 查看帖子详情
    {
      path: '/post/:post_id',
      component: () => import('../views/post/post'),
      // children: [
      //   {
      //     path: '',
      //     component: () => import('../views/post/comment/replyPost'),
      //     meta: {
      //       keepAlive: true
      //     }
      //   }
      // ]
    },
    // 用户个人信息
    {
      path: '/me',
      component: () => import('../views/user/user'),
      children: [
        {
          path: 'like',
          component: () => import('../views/user/children/liked')
        },
        {
          path: 'fans',
          component: () => import('../views/user/children/fans')
        },
        {
          path: 'my_post',
          component: () => import('../views/user/children/my_post')
        },
        {
          path: 'com_mag',
          component: () => import('../views/user/children/commentMag')
        }
      ]
    },
    //404
    {
      path: '*',
      component: () => import('../views/404')
    }
  ]
}];
const routerFactory = () => new Router({
  // mode: 'history', // require service support
  // 滚动行为，详见 https://router.vuejs.org/zh/guide/advanced/scroll-behavior.html#%E6%BB%9A%E5%8A%A8%E8%A1%8C%E4%B8%BA
  scrollBehavior: () => ({y: 0}),
  routes: routes
})
const router = routerFactory();

// Detail see: https://github.com/vuejs/vue-router/issues/1234#issuecomment-357941465
export function resetRouter() {
  const newRouter = routerFactory();
  router.matcher = newRouter.matcher; // reset router
}

export default router;
