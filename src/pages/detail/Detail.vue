<template>
  <div>
    <Header></Header>
    <Banner :sightName="sightName"
            :bannerImg="bannerImg"
            :gallaryImgs="gallaryImgs"
    ></Banner>
    <div class="content">
      <List :categoryList="categoryList"></List>
    </div>
  </div>
</template>

<script>
import Banner from './components/Banner'
import Header from './components/Header'
import List from './components/List'
import axios from 'axios'

export default {
  name: 'Detail',
  data () {
    return {
      sightName: '',
      bannerImg: '',
      gallaryImgs: [],
      categoryList: []
    }
  },
  components: {
    Header,
    Banner,
    List
  },
  methods: {
    handleDataSucc (res) {
      res = res.data
      if (res.ret && res.data) {
        const data = res.data
        this.sightName = data.sightName
        this.bannerImg = data.bannerImg
        this.gallaryImgs = data.gallaryImgs
        this.categoryList = data.categoryList
      }
    },
    getDataInfo () {
      axios.get('/api/detail.json', {
        params: {
          id: this.$route.params.id
        }
      })
        .then(this.handleDataSucc)
    }
  },
  mounted () {
    this.getDataInfo()
  }
}
</script>

<style lang="stylus" scoped>
  .content
    height 50rem
</style>
