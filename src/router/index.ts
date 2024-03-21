import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
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
      path: '/profile',
      name: 'profile',
      component: () => import('../views/AboutView.vue')
    },
    {
      path: '/support',
      redirect: '/not-found'
    },
    {
      path: '/chat',
      redirect: '/not-found'
    },
    {
      path: '/not-found',
      name: '404',
      component: () => import('../views/404View.vue')
    }
  ]
})

export default router
