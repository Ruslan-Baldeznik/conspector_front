import Vue from 'vue'
import VueRouter from 'vue-router'
import Curses from '@/components/MainPage/Content/Curses.vue'
import Abstracts from '@/components/MainPage/Content/Abstracts.vue'
import HomePage from '@/components/HomePage'
import Authorization from '@/components/Authorization'
import Registration from '@/components/Registration'
import Articles from '@/components/MainPage/Content/Articles'

Vue.use(VueRouter)

const routesPage = [{ name: 'HomePage', component: HomePage, path: '/home_page', children: [{ name: 'Curses', component: Curses, path: 'curses' }, { name: 'Abstracts', component: Abstracts, path: 'abstracts' }, { name: 'Articles', component: Articles, path: 'articles' }] },
  { name: 'Authorization', component: Authorization, path: '/' },
  { name: 'Registration', component: Registration, path: '/registration' }]

const routes = [...routesPage]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
