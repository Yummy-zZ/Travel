<template>
<div class="list">
  <ul>
    <li class="item"
        v-for="item in letters"
        :key="item"
        :ref="item"
        @touchstart="handleTouchStart"
        @touchmove="handleTouchMove"
        @touched="handleTouchEnd"
        @click="getWorlds"
    >
      {{item}}
    </li>
  </ul>
</div>
</template>

<script>
export default {
  name: 'Alphabet',
  data () {
    return {
      touchStatus: false,
      startY: 0
    }
  },
  props: {
    cities: Object
  },
  updated () {
    this.startY = this.$refs['A'][0].offsetTop
  },
  methods: {
    getWorlds (event) {
      this.$emit('toCity', event.target.innerText)
    },
    handleTouchStart () {
      this.touchStatus = true
    },
    handleTouchMove (event) {
      let timer = null
      if (this.touchStatus) {
        // const startY = this.$refs['A'][0].offsetTop
        if (timer) {
          clearTimeout(timer)
        } else {
          setTimeout(() => {
            const touchY = event.touches[0].clientY - 79
            const index = Math.floor((touchY - this.startY) / 20)
            if (index >= 0 && index < this.letters.length) {
              this.$emit('toCity', this.letters[index])
            }
          }, 16)
        }
      }
    },
    handleTouchEnd () {
      this.touchStatus = false
    }
  },
  computed: {
    letters () {
      const letters = []
      for (const i in this.cities) {
        letters.push(i)
      }
      return letters
    }
  }
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
