<template>
  <div class="wrapper">
    <swiper :options="swiperOptions">
      <swiper-slide v-for="item in swiperList" :key="item.id">
        <img class="swiper-img" :src="item.imgUrl">
      </swiper-slide>
      <div class="swiper-pagination" slot="pagination"></div>
    </swiper>
  </div>
</template>

<script>
export default {
  name: 'HomeSwiper',
  data () {
    return {
      swiperOptions: {
        pagination: '.swiper-pagination',
        loop: true,
        autoplay: 2500,
        speed: 1200,
        autoplayDisableOnInteraction: false
      },
      swiperList: [
        {
          id: '0001',
          imgUrl: 'http://img.zcool.cn/community/0195405543db6f0000019ae90f8547.jpg@1280w_1l_2o_100sh.jpg'
        },
        {
          id: '0002',
          imgUrl: 'http://hbimg.huabanimg.com/59fb7fa84b40d893f3159ed4dadad27a17193b2410f89f-R1ENm6_fw658'
        },
        {
          id: '0003',
          imgUrl: 'http://img.zcool.cn/community/01b6b25543db6f0000019ae945d6f4.jpg'
        }
      ]
    }
  }
}
</script>

<style lang="stylus" scoped>
  .wrapper >>> .swiper-pagination-bullet-active
    background-color #fff
  .wrapper
    overflow hidden
    width 100%
    height 0
    height 31.25%
    background-color #eee
    .swiper-img
      width 100%
</style>
