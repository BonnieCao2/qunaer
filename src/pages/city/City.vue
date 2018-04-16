<template>
  <div>
    <city-header></city-header>
    <city-search :cities="cities"></city-search>
    <city-list
      :cities="cities"
      :hot="hotCities"
      :letter="letter"></city-list>
    <city-alphabet
      :cities="cities"
      @letterVal="handleLetterVal"></city-alphabet>
  </div>
</template>

<script>
/* eslint-disable */
import axios from 'axios'
import CityHeader from './components/CityHeader'
import CitySearch from './components/Search'
import CityList from './components/List'
import CityAlphabet from './components/Alphabet'
export default {
    name: "city",
    components: {
      CityHeader,
      CitySearch,
      CityList,
      CityAlphabet
    },
  data () {
      return {
        cities: {},
        hotCities: {},
        letter: ''
      }
  },
    methods: {
      getCityInfo () {
        axios.get('/qunaer/static/mock/city.json')
          .then(this.handleGetCityInfoSucc)
      },
      handleGetCityInfoSucc (res) {
        console.log(res)
        res = res.data
        if(res.ret && res.data){
          const data =  res.data
          this.cities = data.cities
          this.hotCities = data.hotCities
        }
      },
      handleLetterVal (letter) {
        console.log(letter)
        this.letter = letter
      }
    },
    mounted () {
      this.getCityInfo()
    }
}
</script>

<style lang="stylus" scoped>

</style>
