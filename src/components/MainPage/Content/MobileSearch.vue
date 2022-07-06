<template>
<div class="search">
  <div class="search__filter"></div>
  <div class="vertical-line"></div>
  <div class="search__search-line"><Search></Search></div>
</div>
</template>

<script>
import Search from '@/components/MainPage/Content/Search'
export default {
  name: 'MobileSearch',
  components: {
    Search
  }
}
</script>

<style lang="scss" scoped>
.search{
  display: none;
  height: 60px;
  width: 100%;
  @media (max-width: 600px) {
    display: flex;
  }
  .search__filter{
    height: 100%;
    width: 50%;
  }
  .vertical-line{
    height: 100%;
    width: 0;
    border: 1px solid white;
  }
  .search__search-line{
    height: 100%;
    width: 50%;
  }
}
</style>
