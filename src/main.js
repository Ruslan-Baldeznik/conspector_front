import Vue from 'vue'
import App from './App.vue'
import routerContent from './router/RouterContent.js'
import store from './store'

Vue.config.productionTip = false

new Vue({
  router: routerContent,
  store,
  render: h => h(App)
}).$mount('#app')
