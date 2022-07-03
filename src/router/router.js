import Vue from 'vue'
import VueRouter from 'vue-router'
import Curses from '@/components/Content/Curses.vue'
import Abstracts from '@/components/Content/Abstracts.vue'

Vue.use(VueRouter)

const routes = [
  { name: 'Curses', component: Curses, path: '/curses' },
  { name: 'Abstracts', component: Abstracts, path: '/abstracts' }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
