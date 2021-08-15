<template>
  <div class="city">
    城市选择
    <router-link to="/">
      <span class="back-home iconfont">&#xe66c;</span>
    </router-link>
  </div>
</template>

<script>
export default {
  name: 'City'
}
</script>

<style lang="stylus" scoped>
  @import "~styles/varibles"
  .city
    position relative
    overflow hidden
    height $headerHeight
    line-height $headerHeight
    font-size .32rem
    background-color $bgcolor
    color #fff
    text-align center
    .back-home
      position absolute
      width .64rem
      font-size .4rem
      line-height 0.86rem
      left 0
      color #fff
</style>
