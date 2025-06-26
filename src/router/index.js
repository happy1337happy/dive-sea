import { createRouter, createWebHistory } from 'vue-router'

import Home from '@/pages/Home.vue'
// import About from '@/pages/About.vue'
import Discover from '@/pages/Discover.vue'
import Creators from '@/pages/Creators.vue'
import Sell from '@/pages/Sell.vue'
import Stats from '@/pages/Stats.vue'
import Author from '@/pages/Author.vue'
import ProductDetail from '@/pages/ProductDetail.vue'

const routes = [
  { path: '/', component: Home},
  // { path: '/about', component: About},
  { path: '/discover',component: Discover},
  { path: '/creators', component: Creators},
  { path: '/sell', component: Sell},
  { path: '/stats', component: Stats},
  { path: '/author', component: Author},
  { path: '/product-detail/:id', component: ProductDetail},
]

const router = createRouter({
  history: createWebHistory(),
  routes,
  scrollBehavior(to, from, savedPosition) {
    if (savedPosition) {
      return savedPosition
    }
    return { top: 0 }
  }
})

export default router;