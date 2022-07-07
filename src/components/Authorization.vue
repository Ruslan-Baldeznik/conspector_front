<template>
<div class="container">
  <div class="container__authorization">
    <div class="authorization__text"></div>
    <div class="authorization__data"></div>
    <div class="authorization__buttons">
      <div @click="change_page('HomePage')" class="button__authorization">Войти</div>
    </div>
  </div>
</div>
</template>

<script>
import router from '@/router/router'
export default {
  name: 'AuthorizationPage',
  components: {
  },
  data: function () {
    return {
    }
  },
  methods: {
    change_page: function (name) {
      router.push({ name: name })
    }
  }
}
</script>

<style scoped lang="scss">
.container{
  height: 100%;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: #121212;
  .container__authorization{
    height: 500px;
    width: 300px;
    background-color: #1C1C1E;
  }
  .button__authorization{
    height: 100px;
    width: 200px;
    background-color: red;
    color: white;
    font-size: 30px;
  }
}
</style>
