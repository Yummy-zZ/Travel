<template>
  <div class="list" ref="wrapper">
    <div>
      <div class="area">
        <div class="title border-topbottom">当前城市</div>
        <div class="button-list">
          <div class="button-wrapper">
            <div class="button">{{ this.currentCity }}</div>
          </div>
        </div>
      </div>

      <div class="area">
        <div class="title border-topbottom">热门城市</div>
        <div class="button-list">
          <div class="button-wrapper"
               v-for="hotCity in hotCities"
               :key="hotCity.id"
               @click="changeCity(hotCity.name)"
          >
            <div class="button">{{ hotCity.name }}</div>
          </div>
        </div>
      </div>

      <div class="area"
           v-for="(value, keys) in cities"
           :key="keys"
           :ref="keys"
      >
        <div class="title border-topbottom">{{ keys }}</div>
        <div class="item-list">
          <div class="item border-bottom"
               v-for="item in value"
               :key="item.id"
               @click="changeCity(item.name)"
               >{{ item.name }}
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import BScroll from '@better-scroll/core'// 滚动优化
import {mapState} from 'vuex'

export default {
  name: 'List',
  props: {
    hotCities: Array,
    cities: Object,
    word: String
  },
  watch: {
    word () {
      if (this.word) {
        let element = this.$refs[this.word][0]
        this.scroll.scrollToElement(element)
      }
    }
  },
  methods: {
    changeCity (city) {
      this.$store.commit('changeCity', city)
      this.$router.push('/')
    }
  },
  computed: {
    ...mapState({
      currentCity: 'city'
    })
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
  .list
    overflow hidden
    position absolute
    top 1.58rem
    left 0
    right 0
    bottom 0
    .border-topbottom
      &:before
        border-color #ccc
      &:after
        border-color #ccc
    .border-bottom
      &:before
        border-color #ccc
    .title
      line-height .44rem
      padding .12rem
      background-color #eee
      padding-left .2rem
      color #000
      font-size .26rem
    .button-list
      overflow hidden
      padding .1rem .6rem .1rem .1rem
      .button-wrapper
        float left
        width 33.33%
        .button
          margin .1rem
          padding .1rem 0
          text-align center
          border .02rem solid #ccc
          border-radius .06rem
    .item-list
      .item
        line-height .76rem
        padding-left .2rem
</style>
