<template>
<div class="list">
  <ul>
    <li class="item">A</li>
    <li class="item">A</li>
    <li class="item">A</li>
    <li class="item">A</li>
    <li class="item">A</li>
    <li class="item">A</li>
    <li class="item">A</li>
    <li class="item">A</li>
    <li class="item">A</li>
  </ul>
</div>
</template>

<script>
export default {
  name: 'Alphabet'
}
</script>

<style lang="stylus" scoped>
@import "~styles/varibles"
.list
  position absolute
  display flex
  flex-direction column
  justify-content center
  top 1.58rem
  right 0
  bottom 0
  width: .4rem
  .item
    text-align center
    line-height .4rem
    color $bgcolor
</style>
