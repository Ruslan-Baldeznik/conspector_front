<template>
  <div class="container">
    <div class="container__authorization">
      <div class="authorization__text-container">
        <div class="text-container__text">Регистрация</div>
        <button  @click="change_page('Authorization')" class="text-container__link">Авторизация</button>
      </div>
      <div class="authorization__data">
        <input placeholder="имя пользователя" type="text" class="data__user-name data__field">
        <input type="text" placeholder="почта" class="data__email data__field">
        <input placeholder="пароль" type="password" class="data__password data__field">
      </div>
      <div class="authorization__buttons">
        <div class="buttons__rules">
          <input type="checkbox" class="rules__checkbox">
          <div class="rules__text">Политика конфиденциальности</div>
        </div>
        <button @click="change_page('HomePage')" class="buttons__authorization">Зарегистрироваться</button>
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
  padding: 30px;
  height: 100%;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: #121212;
.container__authorization{
  height: 430px;
  width: 340px;
  background-color: #1C1C1E;
  display: flex;
  align-items: center;
  justify-content: space-around;
  flex-direction: column;
  .authorization__text-container{
    width: 280px;
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
      border: none;
      color: white;
      background-color: inherit;
      font-size: 13px;
      display: flex;
      align-items: center;
      justify-content: center;
      transition-duration: 0.3s;
    }
    .text-container__link:hover{
      text-shadow: 0 0 10px white;
    }
  }
  .authorization__data{
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    width: 280px;
    .data__field{
      border: 2px solid gray;
      border-radius: 13px;
      background-color: inherit;
      width: 100%;
      height: 35px;
      padding: 0;
      display: flex;
      align-items: center;
      color: white;
      text-align: center;
      box-shadow: 0 0 10px white;
      transition-duration: 0.3s;
    }
    .data__field:hover{
      box-shadow: 0 0 15px #45A4B7;
      border-color: #45A4B7;
    }
    :not(:last-child){
      margin-bottom: 20px;
    }
  }
  .authorization__buttons {
    width: 280px;
    .buttons__rules{
      display: flex;
      flex-direction: row;
      align-items: center;
      justify-content: space-around;
      margin-bottom: 20px;
    }
    .buttons__authorization {
      display: flex;
      align-items: center;
      justify-content: center;
      height: 40px;
      width: 100%;
      background-color: inherit;
      border-radius: 13px;
      border: 2px solid #45A4B7;
      color: white;
      font-size: 18px;
      transition-duration: 0.3s;
    }
    .buttons__authorization:hover{
      box-shadow: 0 0 15px #45A4B7;
    }
    .buttons__authorization:active{
      box-shadow: 0 0 25px #45A4B7;
    }
  }
}
}
</style>
