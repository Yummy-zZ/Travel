<template>
  <div class="header">
    <router-link to="/" class="back">
      <span class="header-back iconfont" v-show="showAbs">&#xe66c;</span>
    </router-link>
    <div class="header-fixed"
         v-show="!showAbs"
         :style="opacityStyle"
    >
      景点详情
      <router-link to="/">
        <span class="header-fixed-back iconfont"
        >&#xe66c;</span>
      </router-link>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Header',
  data () {
    return {
      showAbs: true,
      opacityStyle: {
        opacity: 0
      }
    }
  },
  methods: {
    handleShowAbs () {
      const timer = null
      setTimeout(() => {
        if (timer) {
          clearTimeout(timer)
        }
        let top = document.documentElement.scrollTop
        if (top > 55) {
          let opacity = top / 140
          opacity = opacity > 1 ? 1 : opacity
          this.opacityStyle = { opacity }
          this.showAbs = false
        } else {
          this.showAbs = true
        }
      }, 6)
    }
  },
  activated () {
    window.addEventListener('scroll', this.handleShowAbs)
  },
  deactivated () {
    window.removeEventListener('scroll', this.handleShowAbs)
  }
}
</script>

<style lang="stylus" scoped>
  @import "~styles/varibles"
  .back
    position absolute
    left .2rem
    top .2rem
    height .8rem
    width .8rem
    border-radius .4rem
    background-color rgba(0, 0, 0, .6)
    text-align center
    line-height .8rem
    .header-back
      color #fff
      font-size .4rem
  .header-fixed
    position fixed
    top 0
    left 0
    width 100%
    height $headerHeight
    line-height $headerHeight
    font-size .32rem
    background-color $bgcolor
    color #fff
    text-align center
    z-index 998
    .header-fixed-back
      position absolute
      width .64rem
      font-size .4rem
      line-height 0.86rem
      left 0
      color #fff
</style>
