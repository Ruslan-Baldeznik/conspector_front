<template>
<div class="main">
  <MobileSearch></MobileSearch>
  <div class="main__container">
    <Navigation></Navigation>
    <router-view/>
  </div>
</div>
</template>

<script>
import Navigation from './Navigation.vue'
import MobileSearch from '@/components/MainPage/Content/MobileSearch'
export default {
  name: 'ContentMain',
  data: function () {
    return {
    }
  },
  components: {
    Navigation,
    MobileSearch
  }
}
</script>

<style scoped lang="scss">
.main{
  padding: 30px 0;
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: center;
  min-height: 100%;
  width: 100%;
  background-color: #121212;
  @media (max-width: 600px) {
    padding: 0;
  }
  .main__container{
    display: flex;
    width: 100%;
    height: 100%;
    padding: 0 17%;
    @media (max-width: 1150px) {
      padding: 0 10%;
    }
    @media (max-width: 600px) {
      padding: 0;
    }
  }
}

</style>
