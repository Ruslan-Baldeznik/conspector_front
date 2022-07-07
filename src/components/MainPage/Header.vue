<template>
<header class="header">
  <div class="header__container">
    <div class="container__navigation">
      <button @click="change_page('Authorization')" tabindex="0" class="navigation__button">Главная</button>
      <button @click="change_page('Registration')" tabindex="1" class="navigation__button">Профиль</button>
      <button tabindex="2" class="navigation__button">Конспекты</button>
      <button tabindex="3" class="navigation__button">Курсы</button>
    </div>
    <div class="container__add-button">
      <div class="add-button__text">Добавить</div>
      <div class="add-button__plus">
        <div class="plus__horizontal-line"></div>
        <div class="plus__vertical-line"></div>
      </div>
    </div>
    <div class="container__burger-button" v-on:click="burger_button_to_cross">
      <div v-bind:class="{'burger-button__horizontal-line-1st': is_burger_active}" class="burger-horizontal-line"></div>
      <div v-bind:class="{'burger-button__horizontal-line-2nd': is_burger_active}" class="burger-horizontal-line"></div>
      <div v-bind:class="{'burger-button__horizontal-line-3rd': is_burger_active}" class="burger-horizontal-line"></div>
    </div>
  </div>
  <div v-bind:class="{'burger': is_burger_active}" class="none">
    <div @click="change_page('Abstracts')" v-bind:class="{'burger__button-opened': is_burger_active}" class="burger__button">Конспекты</div>
    <div v-bind:class="{'burger__button-opened': is_burger_active}" class="burger__button">Статьи</div>
    <div v-bind:class="{'burger__button-opened': is_burger_active}" class="burger__button">Профиль</div>
    <div v-bind:class="{'burger__button-opened': is_burger_active}" class="burger__button">Стаитстика</div>
    <div v-bind:class="{'burger__button-opened': is_burger_active}" class="burger__button">О проекте</div>
  </div>
</header>
</template>

<script>
import router from '@/router/router'

export default {
  name: 'HeaderMain',
  data: function () {
    return {
      is_burger_active: false
    }
  },
  methods: {
    burger_button_to_cross: function () {
      this.is_burger_active = !this.is_burger_active
    },
    change_page: function (name) {
      router.push({ name: name })
    }
  }
}
</script>

<style scoped lang="scss">
.header{
  z-index: 999999;
  color: white;
  background-color: #2F353B;
  min-height: 80px;
  font-weight: 700;
  font-size: 20px;
  display: flex;
  align-items: center;
  justify-content: center;
  transition-duration: 0.3s;
  @media (max-width: 600px) {
    box-shadow: 0 0 22px white;
  }
  .header__container{
    width: 100%;
    height: 100%;
    display: flex;
    background-color: inherit;
    align-items: center;
    justify-content: space-between;
    @media (max-width: 1150px) {
      padding: 0 10%;
    }
    @media(max-width: 777px){
      justify-content: end;
    }
    @media (max-width: 600px) {
      padding: 0;
    }
    flex-direction: row;
    padding: 0 17%;
    transition-duration: 0.3s;
    .container__navigation{
      @media(max-width: 777px){
        display: none;
      }
      height: 100%;
      display: flex;
      align-items: center;
      flex-direction: row;
      justify-content: space-between;
      transition-duration: 0.3s;
      .navigation__button{
        display: flex;
        align-items: center;
        justify-content: center;
        height: 100%;
        transition-duration: 0.3s;
        padding: 0 14px;
        color: inherit;
        font-size: inherit;
        background-color: inherit;
        border: none;
      }
      .navigation__button:hover{
        text-shadow: 0 0 16px white;
      }
    }
    .container__add-button{
      cursor: pointer;
      border: 2px solid #45A4B7;
      height: 60px;
      border-radius: 13px;
      display: flex;
      align-items: center;
      justify-content: space-around;
      transition-duration: 0.3s;
      padding: 16px;
      .add-button__text{
        display: flex;
        align-items: center;
        justify-content: center;
        transition-duration: 0.3s;
        margin-right: 10px;
        @media (max-width: 1150px){
          display: none;
        }
      }
      .add-button__plus{
        height: 28px;
        width: 28px;
        transition-duration: 0.3s;
        .plus__vertical-line{
          border: 1px solid white;
          height: 100%;
          width: 0;
          transform: translate(13px, 0);
          transition-duration: 0.3s;
        }
        .plus__horizontal-line{
          border: 1px solid white;
          width: 100%;
          height: 0;
          transform: translate(0, 15px);
          transition-duration: 0.3s;
        }
      }
    }
    .container__add-button:hover {
      box-shadow: 0 0 15px #45A4B7;
    }
    .container__add-button:active{
      box-shadow: 0 0 30px #45A4B7;
    }
    .container__add-button:hover .plus__horizontal-line{
      box-shadow: 0 0 8px white;
    }
    .container__add-button:active .plus__vertical-line{
      box-shadow: 0 0 16px white;
    }
    .container__add-button:active .plus__horizontal-line{
      box-shadow: 0 0 16px white;
    }
    .container__add-button:hover .plus__vertical-line{
      box-shadow: 0 0 8px white;
    }
    .container__add-button:hover .add-button__text{
      text-shadow: 0 0 2px white;
    }
    .container__add-button:active .add-button__text{
      text-shadow: 0 0 10px white;
    }
    .container__burger-button{
      display: none;
      flex-direction: column;
      align-items: center;
      justify-content: space-around;
      min-width: 80px;
      height: 80px;
      padding: 15px;
      transition-duration: 0.3s;
      .burger-horizontal-line{
        border: 1px solid white;
        width: 100%;
        height: 0;
        transition-duration: 0.3s;
      }
      @media (max-width: 777px) {
        display: flex;
      }
    }
    .burger-button__horizontal-line-1st{
        transform: translate(0px, 16.5px) rotate(45deg);
        box-shadow: 0 0 15px white;
    }
    .burger-button__horizontal-line-2nd{
        opacity: 0;
    }
    .burger-button__horizontal-line-3rd{
      transform: translate(0px, -16.5px) rotate(-45deg);
      box-shadow: 0 0 15px white;
    }
  }
  .none{
    opacity: 0.855;
    font-size: 25px;
    margin: 0 30%;
    align-self: center;
    justify-self: center;
    display: flex;
    align-items: center;
    justify-content: space-around;
    flex-direction: column;
    overflow: hidden;
    top: 80px;
    position: absolute;
    height: 0;
    width: 100%;
    transition-duration: 1s;
    background-color: #1C1C1E;
    @media (min-width: 777px) {
      display: none;
    }
    .burger__button{
      display: flex;
      align-items: center;
      justify-content: center;
      width: 0;
      overflow: hidden;
      transition-duration: 0.5s;
      padding: 0 0 25px 0;
    }
    .burger__button:hover{
      text-shadow: 0 0 10px white;
    }
    .burger__button:not(:last-child){
      border-bottom:3px solid white;
    }
    .burger__button-opened{
      width: 60%;
    }
  }
  .burger{
    height: 400px;
  }
}

</style>
