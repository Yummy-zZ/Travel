<template>
  <div>
    <city-header></city-header>
    <Search :cities="data.cities"></Search>
    <List :hotCities="data.hotCities"
          :cities="data.cities"
          :word="letter"
    >
    </List>
    <Alphabet :cities="data.cities" @toCity="getAlphabet"></Alphabet>
  </div>
</template>

<script>
import CityHeader from './components/Header'
import Search from './components/Search'
import List from './components/List'
import Alphabet from './components/Alphabet'
import axios from 'axios'
import {onMounted, reactive, ref} from "vue";

export default {
  name: 'City',
  components: {
    CityHeader,
    Search,
    List,
    Alphabet
  },
  setup () {
    const {letter, getAlphabet} = useLetterLogic()
    const {data} = useCityLogic()
    return { data, letter, getAlphabet }
  }
}

  function useCityLogic() {
    const data = reactive({
      hotCities: [],
      cities: {},
    })
    async function getInfo() {
      let res = await axios.get('/api/city.json')
      res = res.data
      if (res.ret && res.data) {
        const result = res.data
        data.hotCities = result.hotCities
        data.cities = result.cities
      }
    }
    onMounted(() => {
      getInfo()
    })
    return {data}
  }

  function useLetterLogic() {
    const letter = ref('')
    function getAlphabet(word) {
      letter.value = word
    }
    return {letter,getAlphabet}
  }
</script>

<style lang="stylus" scoped>

</style>
