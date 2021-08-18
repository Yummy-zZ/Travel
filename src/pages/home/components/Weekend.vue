<template>
  <div>
    <div class="recommend border-bottom">{{title}}</div>
    <ul>
      <li class="item" v-for="item in weekendList" :key="item.id">
        <div class="img-wrapper">
          <img class="item-img" :src="item.imgUrl" alt="">
        </div>
        <div class="item-content">
          <p class="item-title">{{item.title}}</p>
          <p class="item-desc">{{item.desc}}</p>
        </div>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'Weekend',
  props: {
    weekendList: Array
  },
  setup () {
    const title = '周末去哪儿'
    return { title }
  }
}
</script>

<style lang="stylus" scoped>
  @import "~styles/varibles.styl"
  @import "~styles/mixins.styl"
  .recommend
    line-height .8rem
    text-indent .2rem
    background-color #eee
  .img-wrapper
    overflow hidden
    height 0
    padding-bottom 37.09%
    .item-img
      width 100%
  .item-content
    padding .1rem
    margin-bottom .1rem
    text-indent .1rem
    min-width 0 // 文字超出范围省略号的hack写法
    .item-title
      line-height .54rem
      font-size .32rem
      ellipsis()
    .item-desc
      line-height .4rem
      color #616161
      ellipsis()
</style>
