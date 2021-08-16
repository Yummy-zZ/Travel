<template>
  <div class="container" @click="showGallary">
    <div class="wrapper">
      <swiper :options="swiperOptions">
        <swiper-slide v-for="(item, index) in gallaryImgs" :key="index">
          <img class="gallary-img" :src="item">
        </swiper-slide>
        <div class="swiper-pagination" slot="pagination"></div>
      </swiper>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Gallary',
  props: {
    gallaryImgs: {
      type: Array,
      default () {
        return []
      }
    }
  },
  data () {
    return {
      swiperOptions: {
        pagination: '.swiper-pagination',
        paginationType: 'fraction',
        observeParents: true,
        observer: true
      }
    }
  },
  methods: {
    showGallary () {
      this.$emit('close')
    }
  }
}
</script>

<style lang="stylus" scoped>
  .container >>> .swiper-container
    overflow inherit
  .container
    position fixed
    display flex
    flex-direction column
    justify-content center
    top 0
    left 0
    right 0
    bottom 0
    z-index 996
    background-color black
    .wrapper
      height 0
      width 100%
      padding-bottom 100%
      .swiper-pagination
        color #fff
        bottom -1rem
      .gallary-img
        width 100%
</style>
