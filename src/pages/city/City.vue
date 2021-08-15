<template>
  <div>
    <city-header></city-header>
    <Search></Search>
    <List></List>
    <Alphabet></Alphabet>
  </div>
</template>

<script>
import CityHeader from './components/Header'
import Search from './components/Search'
import List from './components/List'
import Alphabet from './components/Alphabet'

export default {
  name: 'City',
  components: {
    CityHeader,
    Search,
    List,
    Alphabet
  }
}
</script>

<style lang="stylus" scoped>

</style>
