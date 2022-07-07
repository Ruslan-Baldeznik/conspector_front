<template>
  <div class="content">
    <div class="content__header">
      <div class="header__text">Новые статьи</div>
      <Search></Search>
    </div>
    <div class="content__blocks">
      <div class="block">
        <div class="block__name">Python: c 0 до Junior-разработчика</div>
        <div class="block__info">Расскажем и покажем как стать программистом на примере профессии Backend-разработчик</div>
        <div class="block__buttons">
          <div class="statistics">
            <div class="buttons__like">
              <div class="like__svg"></div>
              <div class="like__count"></div>
            </div>
            <div class="buttons__dislike">
              <div class="dislike__svg"></div>
              <div class="dislike__count"></div>
            </div>
            <div class="buttons__view">
              <div class="view__svg"></div>
              <div class="view__count"></div>
            </div>
          </div>
          <button class="buttons__more-info"></button>
        </div>
      </div>
      <div class="block">
        <div class="block__name">Синкай Макото: мегаполис, первая любовь и разлука</div>
        <div class="block__info">Биография одно из самых популярных аниматоров современности, чьи работы, рассчитанные на подростков, поднимают вполне взрослые проблемы</div>
        <div class="block__buttons">
          <div class="statistics">
            <div class="buttons__like">
              <div class="like__svg"></div>
              <div class="like__count"></div>
            </div>
            <div class="buttons__dislike">
              <div class="dislike__svg"></div>
              <div class="dislike__count"></div>
            </div>
            <div class="buttons__view">
              <div class="view__svg"></div>
              <div class="view__count"></div>
            </div>
          </div>
          <button class="buttons__more-info"></button>
        </div>
      </div>
      <div class="block">
        <div class="block__name">Почему азитские културы такие разные</div>
        <div class="block__info">Китайцы, корейцы, японцы, вьетнамцы и все все все</div>
        <div class="block__buttons">
          <div class="statistics">
            <div class="buttons__like">
              <div class="like__svg"></div>
              <div class="like__count"></div>
            </div>
            <div class="buttons__dislike">
              <div class="dislike__svg"></div>
              <div class="dislike__count"></div>
            </div>
            <div class="buttons__view">
              <div class="view__svg"></div>
              <div class="view__count"></div>
            </div>
          </div>
          <button class="buttons__more-info"></button>
        </div>
      </div>
      <div class="block">
        <div class="block__name">Как выбрать ноутбук в 2022 году</div>
        <div class="block__info">О критериях выбора, расценках и топовых решениях</div>
        <div class="block__buttons">
          <div class="statistics">
            <div class="buttons__like">
              <div class="like__svg"></div>
              <div class="like__count"></div>
            </div>
            <div class="buttons__dislike">
              <div class="dislike__svg"></div>
              <div class="dislike__count"></div>
            </div>
            <div class="buttons__view">
              <div class="view__svg"></div>
              <div class="view__count"></div>
            </div>
          </div>
          <button class="buttons__more-info"></button>
        </div>
      </div>
    </div>
    <div class="content__switcher"></div>
  </div>
</template>

<script>
import Search from '@/components/MainPage/Content/Search'
export default {
  name: 'ArticlesContent',
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
      background-color: #2E2E30;
      border-radius: 13px;
      min-height: 100px;
      width: 100%;
      padding: 15px;
      font-size: 16px;
      transition-duration: 0.3s;
    }
    .block:hover{
      box-shadow: 0 0 15px #45A4B7;
    }
  }
}
</style>
