import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

export const router = new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      component: () => import('@/layouts/HomeLayout.vue'),
      children: [
        {
          path: '',
          component: () => import('@/views/Home.vue')
        }
      ]
    }
  ]
})