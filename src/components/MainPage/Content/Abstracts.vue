<template>
  <div class="content">
    <div class="content__header">
      <div class="header__text">Мои конспекты:</div>
      <Search></Search>
    </div>
    <div class="content__blocks">
      <div class="block">Алгоритм Деикстра на  С#</div>
      <div class="block">Квадратичные формы</div>
      <div class="block">Дворцовые перевороты</div>
      <div class="block">О славянских языках</div>
      <div class="block">Здесь какое-то название...</div>
    </div>
    <div class="content__switcher"></div>
  </div>
</template>

<script>
import Search from '@/components/MainPage/Content/Search'
export default {
  name: 'AbstractsContent',
  components: {
    Search
  }
}
</script>

<style scoped lang="scss">
.content{
  background-color: #1C1C1E;
  width: 100%;
  height: 90%;
  .content__header{
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    padding: 0 30px 0 0;
    @media (max-width: 1150px) {
      flex-direction: column;
      padding: 0;
    }
    @media (max-width: 600px) {
      display: none;
    }
    .header__text{
      display: flex;
      align-items: center;
      padding: 30px;
      font-size: 30px;
      width: 50%;
      min-width: 260px;
      @media (max-width: 1150px) {
        justify-content: center;
      }
    }
    white-space: nowrap;
  }
  .content__blocks{
    padding: 30px;
    :not(:last-child){
      margin: 0 0 20px 0;
    }
    .block{
      display: flex;
      background-color: inherit;
      border: 4px solid #45A4B7;
      border-radius: 13px;
      min-height: 50px;
      width: 100%;
      padding: 15px;
      font-size: 20px;
      transition-duration: 0.3s;
    }
    .block:hover{
      box-shadow: 0 0 15px #45A4B7;
    }
  }
}

</style>
