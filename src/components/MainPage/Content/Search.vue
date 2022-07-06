<template>
  <div class="search">
    <input placeholder="Поиск" class="search__line"/>
    <div class="search__button"><span class="iconify" data-icon="akar-icons:search" data-width="24" data-height="24"></span></div>
  </div>
</template>

<script>

export default {
  name: 'SearchContentHeader'
}
</script>

<style lang="scss" scoped>
.search{
  border-top-right-radius: 13px;
  border-top-left-radius: 13px;
  @media (max-width: 600px) {
    border-top-right-radius: 0;
    border-top-left-radius: 0;
  }
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  border-bottom: 2px solid white;
  width: 33%;
  min-width: 260px;
  @media (max-width: 600px) {
    min-width: 0;
  }
  transition-duration: 0.3s;
  .search__line{
    background-color: inherit;
    border: none;
    min-height: 40px;
    font-size: 16px;
    color: white;
    margin: 0 15px 0 0;
    min-width: 0;
    @media (max-width: 600px) {
      margin-left: 10px;
    }
  }
  .search__button{
    height: 100%;
    display: flex;
    align-items: center;
    @media (max-width: 600px) {
      margin: 0 10px;
    }
  }
}
.search:hover{
  box-shadow: 0 0 15px #45A4B7;
}
</style>
