<template>
<div class="header">
  城市选择
  <router-link to="/">
    <div class="iconfont back-icon header-back">&#xe624;</div>
  </router-link>
</div>

</template>

<script>
/* eslint-disable */
export default {
    name: "city-header"
}
</script>

<style lang="stylus" scoped>
  @import '~styles/varibles.styl'
  .header{
    position: relative
    overflow: hidden;
    height: .86rem
    line-height: .86rem;
    text-align: center;
    color: #ffffff
    background: $bgColor;
    font-size:.4rem;
  }

    .header-back{
      position: absolute
      width: .64rem
      top: 0
      left: 0
      text-align: center
      font-size: .4rem
      color: #fff
    }

</style>
