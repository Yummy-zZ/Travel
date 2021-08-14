<template>
  <div class="header">
    <div class="left">
      <span class="iconfont">&#xe66c;</span>
    </div>
    <div class="center">
        <span class="iconfont">&#xe67d;</span>
        输入城市/景点/游玩主题
    </div>
    <div class="right">
      {{city}}
      <span class="iconfont icon-arrow">&#xe688;</span>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Header',
  props: ['city']
}
</script>

<!--scoped表示样式只在组件内有效-->
<style lang="stylus" scoped>
  @import "~styles/varibles"
  .header
    line-height 0.86rem
    display flex
    background-color $bgcolor
    color #fff
    .left
      width 0.64rem
      float left
      text-align center
    .center
      flex: 1
      height .64rem
      line-height .64rem
      margin-left .2rem
      margin-top .12rem
      padding-left .1rem
      border-radius .06rem
      background-color #fff
      color #ccc
    .right
      width 1.24rem
      float right
      text-align center
      .icon-arrow
        font-size 60%
</style>
