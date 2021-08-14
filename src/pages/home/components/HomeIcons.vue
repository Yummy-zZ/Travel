<template>
  <div class="HomeIcons">
    <swiper :options="swiperOptions">
      <swiper-slide v-for="(page,index) in pages" :key="index">
        <div class="icon"  v-for="item in page" :key="item.id">
          <div class="img-icon">
            <img class="img-icon-content" :src="item.imgUrl" alt="">
          </div>
          <p class="content">{{item.desc}}</p>
        </div>
      </swiper-slide>
    </swiper>
  </div>
</template>

<script>
export default {
  name: 'HomeIcons',
  props: {
    iconList: Array
  },
  data () {
    return {
      swiperOptions: {
      }
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
