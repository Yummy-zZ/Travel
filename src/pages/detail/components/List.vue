<template>
  <div>
    <div class="item" v-for="(item, index) in categoryList" :key="index">
      <div class="item-title border-bottom">
        <span class="iconfont item-title-icon">&#xe602;</span>
        {{item.title}}
        <span>￥:{{item.cost}}</span>
      </div>

      <div v-if="item.children" class="item-children">
        <List :category-list="item.children"></List>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'List',
  props: {
    categoryList: Array
  }
}
</script>

<style lang="stylus" scoped>
    .item-title-icon
      display inline-block
      width .36rem
      height .36rem
      margin-right .1rem
    .item-title
      line-height .8rem
      font-size .32rem
      padding 0 .2rem
    .item-children
      padding-left .4rem
</style>
