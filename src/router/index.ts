import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: () => import('@/views/ShopView.vue')
    },
    {
      path: '/profile',
      name: 'profile',
      component: () => import('@/views/AboutView.vue')
    },
    {
      path: '/not-found',
      name: '404',
      component: () => import('@/views/404View.vue')
    },
    {
      path: '/about',
      redirect: '/not-found'
    },
    {
      path: '/community',
      redirect: '/not-found'
    },
    {
      path: '/support',
      redirect: '/not-found'
    },
    {
      path: '/chat',
      redirect: '/not-found'
    }
  ]
})

export default router
