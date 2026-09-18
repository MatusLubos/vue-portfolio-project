import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'
import About from '../views/About.vue'
import Description from '../views/Description.vue'

const routes = [
  { path: '/', component: Home },
  { path: '/about', component: About },
  { path: '/description', component: Description}
]

const router = createRouter({
  history: createWebHistory(),
  routes,
})

export default router