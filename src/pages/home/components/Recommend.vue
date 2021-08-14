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
  data () {
    return {
      recommendList: [
        {
          id: '01',
          imgUrl: 'http://img1.qunarzz.com/sight/p0/1409/19/adca619faaab0898245dc4ec482b5722.jpg_200x200_1bc99086.jpg',
          title: '故宫',
          desc: '世界五大宫之首，穿越与您近在咫尺'
        },
        {
          id: '02',
          imgUrl: 'http://img1.qunarzz.com/sight/p0/1507/cc/19733fc0135062788140cbb48ae606a7.water.jpg_200x200_d9ebe2fd.jpg',
          title: '北京野生动物园',
          desc: '敢与森林之王近距离接触吗？'
        },
        {
          id: '03',
          imgUrl: 'http://img1.qunarzz.com/sight/p0/1602/22/22b6ddfc418d0c3b90.water.jpg_200x200_9d9dabdb.jpg',
          title: '颐和园',
          desc: '中国现存最大的皇家园林'
        },
        {
          id: '04',
          imgUrl: 'http://img1.qunarzz.com/sight/p0/2005/39/3979f1867defec4ea3.water.jpg_200x200_325a015d.jpg',
          title: '八达岭长城',
          desc: '不到长城非好汉'
        },
        {
          id: '05',
          imgUrl: 'http://img1.qunarzz.com/sight/p0/1505/f5/f5f45e1a83537bcb.water.jpg_200x200_444cc7e8.jpg',
          title: '圆明园',
          desc: '百年皇家的珍宝,民族耻辱的见证'
        }
      ]
    }
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
