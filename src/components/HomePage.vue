<template>
<main>
  <Header/>
  <ContentMain/>
  <Footer/>
</main>
</template>

<script>
import Header from '@/components/MainPage/Header'
import ContentMain from '@/components/MainPage/ContentMain'
import Footer from '@/components/MainPage/Footer'
export default {
  name: 'PageSwitcher',
  components: {
    Header,
    ContentMain,
    Footer
  }
}
</script>

<style scoped lang="scss">

</style>
