<template>
  <div>
    <div class="list">
      <div class="item"
           v-for="item in lettersC"
           :key="item"
           :ref="item"
           @touchstart="handleTouchStart"
           @touchmove="handleTouchMove"
           @touchend="handleTouchEnd"
           @click="handleLetterClick"
      >
        {{item}}
      </div>
    </div>
  </div>
</template>

<script>
/* eslint-disable */
export default {
    name: "CityAlphabet",
    props: {
        cities: Object
    },
    data () {
      return {
         touchStatus: false,
          startY: 0,
          timer: null
      }
    },
    updated () {
      //A距离顶部高度
      this.startY = this.$refs['A'][0].offsetTop
    },
    computed: {
      lettersC() {
        const letters = []
        for (let i in this.cities){
          letters.push(i)
        }
        return letters
      }
    },
    methods: {
      handleLetterClick (e) {
        // console.log(e.target.innerText)
        this.$emit('letterVal',e.target.innerText)
      },
      handleTouchStart () {
        this.touchStatus = true
      },
      handleTouchMove (e) {
        if(this.touchStatus){
          if(this.timer){
            clearTimeout(this.timer)
          }
          this.timer = setTimeout(() => {
            //获取A距离顶部距离
            //const startY = this.$refs['A'][0].offsetTop
            const startY = this.startY
            //console.log(startY)
            //获取手指触摸距离搜索框下面距离
            const touchY = e.touches[0].clientY - 79
            //console.log(touchY)
            //每个字母高20 ,求出字母位置
            const index =Math.floor((touchY - startY) / 20)
            if (index >= 0 && index < this.lettersC.length){
              this.$emit('letterVal',this.lettersC[index])
            }
          },16)

        }
      },
      handleTouchEnd () {
        this.touchStatus = false
      }
    }
}
</script>

<style lang="stylus" scoped>
  @import '~styles/varibles.styl';
  .list
    position :absolute
    top:1.58rem
    right :0
    bottom 0
    width :.4rem
    //   垂直居中
    display :flex
    flex-direction :column
    justify-content :center
  .item
    text-align :center
    line-height :.4rem
    color : $bgColor

</style>
