<template>
  <div >
    <router-link tag="div" class="header-abs" to="/" v-show="showAbs">
      <span class="iconfont back-icon">&#xe624;</span>
    </router-link>
    <div class="header-fixed" v-show="!showAbs" :style="opacityStyle">
      <router-link to="/">
      </router-link>
      景点详情
    </div>
  </div>
</template>

<script>
export default {
  name: 'DetailHeader',
  data () {
    return {
      showAbs: true,
      opacityStyle: {
        opacity: 0
      }
    }
  },
  activated () {
    window.addEventListener('scroll', this.handleScroll)
  },
  methods: {
    handleScroll () {
      const top = document.documentElement.scrollTop
      if (top > 60) {
        let opacity = top / 140
        opacity = opacity > 1 ? 1 : opacity
        this.opacityStyle = { opacity }
        this.showAbs = false
      } else {
        this.showAbs = true
      }
    }
  }
}
</script>

<style lang="stylus" scoped>
  @import '~styles/varibles.styl'
  .header-abs
    position absolute
    z-index 99
    top .2rem
    left .2rem
    width .6rem
    height .6rem
    color #fff
    text-align center
    font-size .18rem
    line-height .6rem
    border-radius .4rem
    background rgba(0, 0, 0, .3)
  .header-fixed
    position fixed
    top 0
    left 0
    right 0
    overflow hidden
    height: .86rem
    line-height .86rem
    text-align center
    color #fff
    background $bgColor
    font-size .32rem
    .header-fiexd-back
      float left
      width .64rem
      text-align center
      font-size .4rem
      color #fff
      text-align center
</style>
