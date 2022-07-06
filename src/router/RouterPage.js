import Vue from 'vue'
import VueRouter from 'vue-router'
import HomePage from '@/components/HomePage'
import Registration from '@/components/Registration'
import Authorization from '@/components/Authorization'

Vue.use(VueRouter)

const routes = [
  { name: 'HomePage', component: HomePage, path: '/' },
  { name: 'Authorization', component: Authorization, path: '/authorization' },
  { name: 'Registration', component: Registration, path: '/registration' }
]

const routerContent = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default routerContent
