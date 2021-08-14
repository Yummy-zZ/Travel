<template>
  <div>
    <div class="recommend">热门推荐</div>
    <ul>
      <li class="item border-bottom" v-for="item in recommendList" :key="item.id">
        <img class="item-img" :src="item.imgUrl" alt="">
        <div class="item-content">
          <p class="item-title">{{item.title}}</p>
          <p class="item-desc">{{item.desc}}</p>
          <button class="item-button">查看详情</button>
        </div>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'Recommend',
  props: {
    recommendList: Array
  }
}
</script>

<style lang="stylus" scoped>
  @import "~styles/varibles.styl"
  @import "~styles/mixins.styl"
  .recommend
    margin-top .2rem
    line-height .8rem
    text-indent .2rem
    background-color #eee
  .item
    overflow: hidden
    display flex
    height 1.9rem
    .item-img
      width: 1.7rem
      height: 1.7rem
      padding .1rem
    .item-content
      flex 1
      padding .1rem
      min-width 0 // 文字超出范围省略号的hack写法
      .item-title
        line-height .54rem
        font-size .32rem
        ellipsis()
      .item-desc
        line-height .4rem
        color #4DA2CE
        ellipsis()
      .item-button
        line-height .44rem
        margin-top .16rem
        padding 0 .2rem
        border-radius .06rem
        color #fff
        background-color $bgcolor
</style>
