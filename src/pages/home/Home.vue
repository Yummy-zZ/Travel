<template>
  <div class="home">
    <Header></Header>
    <home-swiper :swiperList="data.swiperList"></home-swiper>
    <home-icons :iconList="data.iconList"></home-icons>
    <Recommend :recommendList="data.recommendList"></Recommend>
    <Weekend :weekendList="data.weekendList"></Weekend>
  </div>
</template>

<script>
// Composition API
import Header from './components/Header'
import HomeSwiper from './components/HomeSwiper'
import HomeIcons from './components/HomeIcons'
import Recommend from './components/Recommend'
import Weekend from './components/Weekend'
import axios from 'axios'
import { useStore } from 'vuex'
import {reactive, onMounted} from 'vue'

export default {
  name: 'Home',
  components: {
    Header,
    HomeSwiper,
    HomeIcons,
    Recommend,
    Weekend
  },
  setup() {
    const data = reactive({
      swiperList: [],
      iconList: [],
      recommendList: [],
      weekendList: [],
      lastCity: ''
    })
    const store = useStore()
    const city = store.state.city
    async function getHomeInfo() {
    let res = await axios.get('/api/index.json?city=' + city.value)
    res = res.data
    if (res.ret && res.data) {
        const result = res.data
        data.swiperList = result.swiperList
        data.iconList = result.iconList
        data.recommendList = result.recommendList
        data.weekendList = result.weekendList
      }
    }
    onMounted(() => {
      data.lastCity = city
      getHomeInfo()
    })
    return { data }
  }
}
</script>

<style lang="stylus" scoped>

</style>
