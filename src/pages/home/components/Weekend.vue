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
  data () {
    return {
      title: '周末去哪儿',
      weekendList: [
        {
          id: '01',
          imgUrl: 'http://img1.qunarzz.com/sight/source/1811/f3/86173f863bef61.jpg_r_640x214_52b003ac.jpg',
          title: '故宫',
          desc: '世界五大宫之首，穿越与您近在咫尺'
        },
        {
          id: '02',
          imgUrl: 'http://img1.qunarzz.com/sight/source/1811/7e/476589267ebb41.jpg_r_640x214_bf599709.jpg',
          title: '京城遛娃必去',
          desc: '德智体美劳全面发展的亲子日，这些地方该去看看…'
        },
        {
          id: '03',
          imgUrl: 'http://img1.qunarzz.com/sight/source/1505/aa/7baaf8a851d221.jpg_r_640x214_1431200f.jpg',
          title: '颐和园',
          desc: '中国现存最大的皇家园林'
        },
        {
          id: '04',
          imgUrl: 'http://img1.qunarzz.com/sight/source/1606/85/c6b6bad1b977e.jpg_r_640x214_5c638941.jpg',
          title: '八达岭长城',
          desc: '不到长城非好汉'
        },
        {
          id: '05',
          imgUrl: 'http://img1.qunarzz.com/sight/source/1505/53/02091f1ee43d0a.jpg_r_640x214_2e3256b1.jpg',
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
  .img-wrapper
    overflow hidden
    height 0
    padding-bottom 36.5%
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
