import { createRouter, createWebHistory } from 'vue-router'
import HomePage from '../views/HomePage.vue'
import TestPage from '../views/TestPage.vue'
import ErrorPage from '../views/ErrorPage'

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomePage
  },
  {
    path: '/test',
    name: 'TestPage',
    component: () => import('../views/TestPage.vue')
  },
  { path: '/:pathMatch(.*)*', component: ErrorPage },

]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
