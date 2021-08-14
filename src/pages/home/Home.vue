<template>
  <div class="home">
    <Header></Header>
    <home-swiper></home-swiper>
    <home-icons></home-icons>
    <Recommend></Recommend>
    <Weekend></Weekend>
  </div>
</template>

<script>
import Header from './components/Header'
import HomeSwiper from './components/HomeSwiper'
import HomeIcons from './components/HomeIcons'
import Recommend from './components/Recommend'
import Weekend from './components/Weekend'

export default {
  name: 'Home',
  components: {Header, HomeSwiper, HomeIcons, Recommend, Weekend}
}
</script>

<style lang="stylus" scoped>

</style>
