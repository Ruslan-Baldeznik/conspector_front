<template>
  <div class="container">
    <div class="container__authorization">
      <div class="authorization__text-container">
        <div class="text-container__text">Регистрация</div>
        <a  @click="change_page('Authorization')" class="text-container__link">Авторизироваться</a>
      </div>
      <div class="authorization__data">
        <input type="text" class="data__user-name">
        <input type="password" class="data__password">
      </div>
      <div class="authorization__buttons">
        <div @click="change_page('HomePage')" class="buttons__authorization">Зарегистрироваться</div>
        <div class="buttons__social">
          <div class="social__google"></div>
          <div class="social__yandex"></div>
          <div class="social__vk"></div>
          <div class="social__facebook"></div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import router from '@/router/router'

export default {
  name: 'RegistrationPage',
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
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  .authorization__text-container{
    display: flex;
    align-items: center;
    justify-content: space-between;
    flex-direction: row;
    .text-container__text{
      font-size: 24px;
      display: flex;
      align-items: center;
      justify-content: center;
    }
    .text-container__link{
      display: flex;
      align-items: center;
      justify-content: center;
    }
  }
  .authorization__data{
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
  }
  .authorization__buttons {
    .buttons__authorization {
      height: 100px;
      width: 200px;
      background-color: red;
      color: white;
      font-size: 30px;
    }
  }
}
}
</style>
