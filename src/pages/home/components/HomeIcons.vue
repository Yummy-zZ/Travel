<template>
  <div class="HomeIcons">
    <swiper :options="swiperOptions">
      <swiper-slide v-for="(page,index) in pages" :key="index">
        <div class="icon"  v-for="item in page" :key="item.id">
          <div class="img-icon">
            <img class="img-icon-content" :src="item.iconUrl" alt="">
          </div>
          <p class="content">{{item.msg}}</p>
        </div>
      </swiper-slide>
    </swiper>
  </div>
</template>

<script>
export default {
  name: 'HomeIcons',
  data () {
    return {
      swiperOptions: {
        loop: true
      },
      iconList: [
        {id: '0001', msg: '酒店', iconUrl: '//s.qunarzz.com/homenode/images/touchheader/hotel.png'},
        {id: '0002', msg: '机票', iconUrl: '//s.qunarzz.com/homenode/images/touchheader/flight.png'},
        {id: '0003', msg: '火车票', iconUrl: '//s.qunarzz.com/homenode/images/touchheader/train.png'},
        {id: '0004', msg: '度假', iconUrl: '//s.qunarzz.com/homenode/images/touchheader/package.png'},
        {id: '0005', msg: '景点门票', iconUrl: '//s.qunarzz.com/homenode/images/touchheader/piao.png'},
        {id: '0006', msg: '海外酒店', iconUrl: 'https://picbed.qunarzz.com/f5e5770393d759578962e53ee67798c8.png'},
        {id: '0007', msg: '低价机票', iconUrl: 'https://picbed.qunarzz.com/a36d2288f19e54562338f4d8ef986288.png'},
        {id: '0008', msg: '汽车票船票', iconUrl: 'https://picbed.qunarzz.com/377db8cb2143aebf01869c9baad3d325.png'},
        {id: '0009', msg: '民宿客栈', iconUrl: 'https://picbed.qunarzz.com/01d2f57f920666364197a850dab859a8.png'}
      ]
    }
  },
  computed: {
    pages () {
      const pages = []
      this.iconList.forEach((item, index) => {
        let page = Math.floor(index / 8)
        if (!pages[page]) {
          pages[page] = []
        }
        pages[page].push(item)
      })
      return pages
    }
  }
}
</script>

<style lang="stylus" scoped>
  @import "~styles/mixins.styl"
  .HomeIcons >>> .swiper-container
    height 0
    padding-bottom 50%
  .HomeIcons
    margin-top: .1rem;
    .icon
      position relative
      overflow hidden
      height 0
      float left
      width 25%
      padding-bottom  25%
      .img-icon
        position absolute
        left 0
        right 0
        top 0
        bottom .44rem
        text-align center
        box-sizing border-box
        padding .1rem
        .img-icon-content
          height 100%
      .content
        position: absolute;
        left 0
        right 0
        bottom 0
        height .44rem
        line-height .44rem
        text-align center
        ellipsis()
</style>
