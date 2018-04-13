<template>
  <div>
    <city-header></city-header>
    <city-search></city-search>
    <city-list></city-list>
  </div>
</template>

<script>
/* eslint-disable */
import CityHeader from './components/CityHeader'
import CitySearch from './components/Search'
import CityList from './components/List'
export default {
    name: "city",
    components: {
      CityHeader,
      CitySearch,
      CityList
    }
}
</script>

<style lang="stylus" scoped>

</style>
