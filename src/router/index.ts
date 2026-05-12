import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'
import About from '../views/About.vue'
import Popis from '../views/Popis.vue'

const routes = [
  { path: '/', component: Home },
  { path: '/about', component: About },
  { path: '/popis', component: Popis}
]

const router = createRouter({
  history: createWebHistory(),
  routes,
})

export default router