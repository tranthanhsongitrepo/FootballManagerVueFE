import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import SignInView from '../views/SignInView.vue'
import SignUpView from '../views/SignUpView.vue'
import PlayerManagementView from '../views/PlayerManagementView.vue'
import PlayerSearchView from '../views/PlayerSearchView.vue'

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/signIn',
    name: 'signIn',
    component: SignInView
  },
  {
    path: '/signUp',
    name: 'signUp',
    component: SignUpView
  },
  {
    path: '/player/all',
    name: 'findPlayerAll',
    component: PlayerManagementView
  },
  {
    path: '/player/find',
    name: 'findPlayerByName',
    component: PlayerSearchView
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
