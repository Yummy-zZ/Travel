<template>
  <div>
    <city-header></city-header>
    <Search></Search>
    <List :currentCity="currentCity"
          :hotCities="hotCities"
          :cities="cities"
          :word="word"
    >
    </List>
    <Alphabet :cities="cities" @toCity="getAlphabet"></Alphabet>
  </div>
</template>

<script>
import CityHeader from './components/Header'
import Search from './components/Search'
import List from './components/List'
import Alphabet from './components/Alphabet'
import axios from 'axios'

export default {
  name: 'City',
  data () {
    return {
      currentCity: '',
      hotCities: [],
      cities: {},
      word: ''
    }
  },
  components: {
    CityHeader,
    Search,
    List,
    Alphabet
  },
  methods: {
    getAlphabet (word) {
      this.word = word
    },
    getInfoSucc (res) {
      res = res.data
      if (res.ret && res.data) {
        const data = res.data
        this.currentCity = data.city
        this.hotCities = data.hotCities
        this.cities = data.cities
      }
    },
    getInfo () {
      axios.get('/api/city.json')
        .then(this.getInfoSucc)
    }
  },
  mounted () {
    this.getInfo()
  }
}
</script>

<style lang="stylus" scoped>

</style>
