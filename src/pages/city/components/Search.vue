<template>
  <div>
    <div class="search">
      <input class="search-input"
             type="text"
             placeholder="输入城市或拼音"
             v-model="inputCity"
      >
    </div>
    <div class="search-content"
         ref="wrapper"
         v-show="inputCity"
    >
      <div>
        <ul>
          <li class="search-item border-bottom"
              v-for="item in list"
              :key="item.id"
              @click="changeCity(item.name)"
          >{{item.name}}</li>
          <li class="search-item border-bottom"
              v-show="hasNoData"
          >
            城市未匹配到
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
import BScroll from '@better-scroll/core' // 滚动优化

export default {
  name: 'Search',
  props: {
    cities: Object
  },
  data () {
    return {
      inputCity: '',
      list: []
    }
  },
  methods: {
    changeCity (city) {
      this.$store.commit('changeCity', city)
      this.$router.push('/')
    }
  },
  computed: {
    hasNoData () {
      return !this.list.length
    }
  },
  watch: {
    inputCity () {
      let timer = null
      if (timer) {
        return
      }
      if (!this.inputCity) {
        this.list = []
        return
      }
      setTimeout(() => {
        const result = []
        for (const i in this.cities) {
          this.cities[i].forEach(value => {
            if (value.spell.indexOf(this.inputCity) > -1 ||
              value.name.indexOf(this.inputCity) > -1) {
              result.push(value)
            }
          })
        }
        this.list = result
      }, 100)
    }
  },
  mounted () {
    // const vm = this
    // setTimeout(() => {
    this.scroll = new BScroll(this.$refs.wrapper)
    // }, 200)
  },
  updated () {
    this.scroll.refresh()
  }
}
</script>

<style lang="stylus" scoped>
  @import "~styles/varibles"
  .search
    height .72rem
    padding 0 .1rem
    background-color $bgcolor
    .search-input
      box-sizing border-box
      width 100%
      height .62rem
      line-height .62rem
      padding 0 .1rem
      text-align center
      border-radius .06rem
      color #666
  .search-content
    overflow: hidden
    position: absolute
    top 1.58rem
    left 0
    right 0
    bottom 0
    z-index 1
    background-color #eee
    .search-item
      line-height .62rem
      padding-left .2rem
      background-color #fff
      color #666
</style>
