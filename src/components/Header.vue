<template>
<header class="header">
  <div class="header__container">
    <div class="container__navigation">
      <div tabindex="0" class="navigation__button">Главная</div>
      <div tabindex="1" class="navigation__button">Профиль</div>
      <div tabindex="2" class="navigation__button">Конспекты</div>
      <div tabindex="3" class="navigation__button">Курсы</div>
    </div>
    <div class="container__add-button">
      <div class="add-button__text">Добавить</div>
      <div class="add-button__plus">
        <div class="plus__horizontal-line"></div>
        <div class="plus__vertical-line"></div>
      </div>
    </div>
    <div class="container__burger-button">
      <div class="burger-button__horizontal-line-1st"></div>
      <div class="burger-button__horizontal-line-2nd"></div>
      <div class="burger-button__horizontal-line-3rd"></div>
    </div>
    <div class="container__burger">
      <div class="burger__button"></div>
      <div class="burger__button"></div>
      <div class="burger__button"></div>
      <div class="burger__button"></div>
    </div>
  </div>
</header>
</template>

<script>
export default {
  name: 'HeaderMain'
}
</script>

<style scoped lang="scss">
.header{
  color: white;
  background-color: #2F353B;
  height: 80px;
  font-weight: 700;
  font-size: 20px;
  display: flex;
  align-items: center;
  justify-content: center;
  transition-duration: 0.3s;
  .header__container{
    width: 100%;
    height: 100%;
    display: flex;
    background-color: inherit;
    align-items: center;
    justify-content: space-between;
    flex-direction: row;
    padding: 0 17%;
    transition-duration: 0.3s;
    @media (max-width: 1150px) {
      padding: 0 10%;
    }
    .container__navigation{
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
      }
      .navigation__button:hover{
        text-shadow: 0 0 16px white;
      }
    }
    .container__add-button{
      border: 2px solid #2DC686;
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
      box-shadow: 0 0 15px #2DC686;
    }
    .container__add-button:active{
      box-shadow: 0 0 30px #2DC686;
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
    }
    .container__burger{
      display: none;
    }
  }
}

</style>
