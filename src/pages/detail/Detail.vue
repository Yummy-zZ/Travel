<template>
  <div>
    <Header></Header>
    <Banner></Banner>
    <div class="content">
      <List :list="list"></List>
    </div>
  </div>
</template>

<script>
import Banner from './components/Banner'
import Header from './components/Header'
import List from './components/List'

export default {
  name: 'Detail',
  data () {
    return {
      list: [
        { title: '成人票',
          cost: '998',
          children: [{ title: '有导游参观',
            cost: '1998',
            children: [{title: '有人工解说', cost: '19998'}]
          }, {title: '无导游参观', cost: '996'}] },
        { title: '学生票' }, { title: '儿童票' },
        { title: '特惠票' }
      ]
    }
  },
  components: {
    Header,
    Banner,
    List
  }
}
</script>

<style lang="stylus" scoped>
  .content
    height 50rem
</style>
