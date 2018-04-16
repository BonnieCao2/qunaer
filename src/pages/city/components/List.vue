 <template>
  <div class="list" ref="wrapper">
    <div>
      <div class="area">
        <div class="title border-topbottom">当前城市</div>
        <div class="button-list">
          <div class="button-wrapper">
            <div class="button">
              <!--北京-->
              {{this.$store.state.city}}
            </div>
          </div>
        </div>
      </div>

      <div class="area">
        <div class="title border-topbottom">热门城市</div>
        <div class="button-list">
          <div class="button-wrapper"
               v-for="item in hot"
               :key="item.id"
               @click="handleCityClick(item.name)"
          >
            <div class="button">{{item.name}}</div>
          </div>
        </div>
      </div>
      <!--循环cities数组-->
      <div class="area" v-for="(item,key) in cities" :key="key" :ref="key">
        <div class="title border-topbottom">{{key}}</div>
        <div class="item-list">
          <div class="item border-bottom"
                v-for="innerItem in item"
               :key="innerItem.id"
               @click="handleCityClick(innerItem.name)"
          >
            {{innerItem.name}}
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
/* eslint-disable */
import Bscroll from 'better-scroll'
export default {
    name: "city-list",
    props: {
      hot:Array,
      cities: Object,
      letter: String
    },
    mounted () {
      this.scroll = new Bscroll(this.$refs.wrapper);
    },
    methods: {
      handleCityClick (city){
        // alert(city)
        // this.$store.dispatch('changeCity',city)
        this.$store.commit('changeCity',city)
        /*跳转到首页*/
        this.$router.push('/')
      }
    },
    watch: {
      //监听letter的变化
      letter () {
        console.log(this.letter)
        if(this.letter) {
          const element = this.$refs[this.letter][0]
          // const element = this.$refs.key[0]
          console.log(element)
          this.scroll.scrollToElement(element)
        }
      }
    }
}
</script>

<style lang="stylus" scoped>
  @import '~styles/varibles.styl';
  .border-topbottom
    &:before
      border-color :#ccc
    &:after
      border-color:#ccc
    .border-bottom
    &:before
      border-color :#ccc
  .list
    position :absolute
    overflow: hidden
    left :0
    top: 1.78rem
    right :0
    bottom:0
    text-align: left
    .title
      line-height : .54rem
      background :#eee
      padding-left :.2rem
      color :#666
      font-size :.26rem
    .button-list
      padding 0.1rem .6rem .1rem .1rem
      overflow :hidden
    .button-wrapper
      float :left
      width :33.33%
      cursor:pointer
    .button
      margin:.1rem
      padding :.1rem 0
      text-align :center
      border:.02rem solid #ccc
      border-radius:.06rem
    .item-list
      padding :.01rem
      .item
        line-height:.76rem
        color:#666
        padding-left:.2rem



</style>
