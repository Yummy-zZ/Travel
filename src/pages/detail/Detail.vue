<template>
  <div>
    <div class="banner" @click="showGallary">
      <img class="banner-img" src="//img1.qunarzz.com/sight/p0/1409/19/adca619faaab0898245dc4ec482b5722.jpg_600x330_f922b488.jpg" alt="故宫">
      <div class="banner-info">
        <div class="img-desc">故宫(AAAAA景区)</div>
        <div class="img-sum">
          <span class="iconfont">&#xe604;</span>
          5
        </div>
      </div>
    </div>

    <Gallary class="gallary"
             :gallaryImgs="gallaryImgs"
             v-show="isShowGallary"
             @close="notShowGallary"
    ></Gallary>
  </div>
</template>

<script>
import Gallary from 'common/gallary/Gallary'

export default {
  name: 'Detail',
  data () {
    return {
      gallaryImgs: ['http://img1.qunarzz.com/sight/p0/1409/19/adca619faaab0898245dc4ec482b5722.jpg_r_800x800_6edd8174.jpg',
        'http://img1.qunarzz.com/sight/p0/1909/4e/4e1afc2e1133ade7a3.img.jpg_350x240_2646c984.jpg'],
      isShowGallary: false
    }
  },
  methods: {
    showGallary () {
      this.isShowGallary = true
    },
    notShowGallary () {
      this.isShowGallary = false
    }
  },
  components: {
    Gallary
  }
}
</script>

<style lang="stylus" scoped>
  .banner
    overflow hidden
    height 0
    padding-bottom 55%
    .banner-img
      width 100%
    .banner-info
      display flex
      position relative
      bottom 0
      margin-top -.6rem
      padding-bottom .2rem
      z-index 1
      background-image: linear-gradient(to top, rgba(0,0,0,.8),rgba(0,0,0,0));
      .img-desc
        flex 1
        margin-left .2rem
        font-size .36rem
        text-shadow: 0 1px 2px rgb(0 0 0 / 70%);
        color #fff
      .img-sum
        height .4rem
        width 1.2rem
        line-height .4rem
        text-align center
        margin-right .4rem
        background: rgba(0,0,0,.5);
        border-radius .2rem
        color #fff
        .iconfont
          padding-right .05rem
</style>
