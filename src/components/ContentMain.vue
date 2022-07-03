<template>
<div>
  <router-view/>
  <div @click="change(route.name)" v-for="(route, index) in routes" v-bind:key="'nav-bar' + index">{{route.title}}</div>
</div>
</template>

<script>
import router from '@/router/router.js'
export default {
  name: 'ContentMain',
  data: function () {
    return {
      routes: [{ name: 'Curses', title: 'Курсы' },
        { name: 'Abstracts', title: 'Конспекты' }]
    }
  },
  methods: {
    change: function (name) {
      router.push({ name: name })
    }
  }
}
</script>

<style scoped lang="scss">

</style>
