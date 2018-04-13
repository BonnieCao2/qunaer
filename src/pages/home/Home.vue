<template>
  <div>
    <home-header :city="city"></home-header>
    <home-swiper :list="swiperList"></home-swiper>
    <home-icons :iconList="iconList"></home-icons>
    <home-recommend :recommendList="recommendList"></home-recommend>
    <home-weekend :weekendList="weekendList"></home-weekend>
    <!--<div class="home">home</div>
    <router-link class="home" to="/list">列表页</router-link>-->
  </div>
</template>

<script>
/* eslint-disable */
import HomeHeader from './components/Header'
import HomeSwiper from './components/Swiper'
import HomeIcons from './components/Icons'
import HomeRecommend from './components/Recommend'
import HomeWeekend from './components/Weekend'
import axios from 'axios'
export default {
    name: 'home',
    components: {
      HomeHeader,
      HomeSwiper,
      HomeIcons,
      HomeRecommend,
      HomeWeekend
    },
    data () {
      return {
        city: '上海',
        swiperList: [],
        iconList: [],
        recommendList: [],
        weekendList: []
      }
    },
    mounted () {
      this.getHomeInfo()
    },
    methods: {
      getHomeInfo () {
        axios.get('/qunaer/static/mock/index.json')
          .then(this.getHomeInfoSucc)
      },
      getHomeInfoSucc (res) {
        res = res.data
        if (res.ret && res.data){
          const data = res.data
          this.city = data.city
          this.swiperList = data.swiperList
          this.iconList = data.iconList
          this.recommendList = data.recommendList
          this.weekendList = data.weekendList


        }
        console.log(res)
      }
    }
}
</script>

<style scoped>
.home{
  font-size: 50px;
}
</style>
