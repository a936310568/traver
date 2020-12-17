<template>
    <div class="header">
        城市选择
        <router-link to="/">
            <div class="header-back">
            <span class="iconfont back-icon">&#xe624;</span>
            </div>
        </router-link>
    </div>
</template>

<script>
export default {
  name: 'CityHeader'
}
</script>

<style lang="stylus" scoped>
  @import '~styles/varibles.styl'
  .header
    overflow hidden
    height: .86rem
    line-height .86rem
    text-align center
    color #fff
    background $bgColor
    font-size .32rem
  .header-back
    float left
    width .64rem
    text-align center
    font-size .4rem
    color #fff
</style>
