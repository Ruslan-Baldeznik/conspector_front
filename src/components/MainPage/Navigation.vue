<template>
<div class="container">
  <!--  <div @click="change_content(route.name)" v-for="(route, index) in routes" v-bind:key="'nav-bar' + index">{{route.title}}</div>-->
  <div class="container__navigation">
    <button class="navigation__button">Мои темы</button>
    <div class="navigation__scroll">
      <button class="scroll__button" @click="change_content(route.name)" v-for="(route, index) in routes" v-bind:key="'nav-bar' + index">{{route.title}}</button>
      <button class="scroll__button">Математика</button>
      <button class="scroll__button">Программирование</button>
      <button class="scroll__button">История</button>
      <button class="scroll__button">Ботаника</button>
    </div>
    <button class="navigation__button">Статистика</button>
    <button class="navigation__button">Глобальный поиск</button>
  </div>
  <div class="container__advertisement">Реклама</div>
</div>
</template>

<script>
import router from '@/router/router.js'
export default {
  name: 'NavigationMain',
  data: function () {
    return {
      routes: [{ name: 'Curses', title: 'Курсы' },
        { name: 'Abstracts', title: 'Конспекты' }]
    }
  },
  methods: {
    change_content: function (name) {
      router.push({ name: name })
    }
  }
}
</script>

<style scoped lang="scss">
.container{
  @media (max-width: 777px) {
    display: none;
  }
  width: 30%;
  display: flex;
  align-items: center;
  flex-direction: column;
  background-color: #121212;
  min-height: 400px;
  height: 90%;
  margin: 0 30px 0 0;
  overflow: hidden;
  .container__navigation{
    overflow: hidden;
    display: flex;
    align-items: start;
    justify-content: space-around;
    flex-direction: column;
    padding: 10%;
    width: 100%;
    background-color: #1C1C1E;
    height: 45%;
    margin: 0 0 30px 0;
    .navigation__scroll{
      overflow-y: scroll;
      overflow-x: hidden;
      display: flex;
      align-items: start;
      justify-content: space-around;
      flex-direction: column;
      height: 50%;
      .scroll__button{
        color: inherit;
        font-size: inherit;
        background-color: inherit;
        border: none;
        margin-left: 15px;
        display: flex;
        transition-duration: 0.3s;
        padding-left: 5px;
        white-space: nowrap;
        margin-bottom: 7px;
      }
      .scroll__button:hover{
        box-shadow: -10px 0 0 #45A4B7;
        font-size: 20px;
        text-shadow: 0 0 20px white;
      }
    }
    .navigation__button{
      color: inherit;
      font-size: inherit;
      background-color: inherit;
      border: none;
      display: flex;
      transition-duration: 0.3s;
      padding-left: 5px;
      white-space: nowrap;
      margin-bottom: 10px;
    }
    .navigation__button:hover{
      box-shadow: -10px 0 0 #45A4B7;
      font-size: 20px;
      text-shadow: 0 0 20px white;
    }
  }
  .container__advertisement{
    padding: 10%;
    width: 100%;
    height: 52%;
    background-color: #1C1C1E;
  }
}
</style>
