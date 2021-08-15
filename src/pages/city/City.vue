<template>
  <div>
    <city-header></city-header>
    <Search></Search>
  </div>
</template>

<script>
import CityHeader from './components/Header'
import Search from './components/Search'
export default {
  name: 'City',
  components: {
    CityHeader,
    Search
  }
}
</script>

<style lang="stylus" scoped>

</style>
