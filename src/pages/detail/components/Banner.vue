<template>
  <div>
    <div class="banner" @click="handleBannerClick">
      <img class="banner-img" src="https://imgs.qunarzz.com/sight/p0/2005/a6/a68ac89e55d83cdda3.water.jpg_710x360_a86ae978.jpg">
      <div class="banner-info">
        <div class="banner-title">洛阳-白马寺 1天跟团游</div>
        <div class="banner-number">
          > 39
        </div>
      </div>
    </div>
    <common-gallary :imgs="imgs" v-show="showGallary" @close="handleGallaryClose"></common-gallary>
  </div>
</template>

<script>
import CommonGallary from 'common/gallary/Gallary'
export default {
  name: 'DetailBanner',
  data () {
    return {
      showGallary: false,
      imgs: ['https://tse4-mm.cn.bing.net/th/id/OIP.alFdiiCmSxk4IMWF_vH8VgHaEK?w=260&h=180&c=7&o=5&dpr=1.25&pid=1.7', 'https://tse1-mm.cn.bing.net/th/id/OIP.dI94-rAedblNdCVvxDkGLQHaFB?w=264&h=180&c=7&o=5&dpr=1.25&pid=1.7']
    }
  },
  methods: {
    handleBannerClick () {
      this.showGallary = true
    },
    handleGallaryClose () {
      this.showGallary = false
    }
  },
  components: {
    CommonGallary
  }
}
</script>

<style lang="stylus" scoped>
  .banner
    position relative
    overflow hidden
    height 0
    padding-bottom 55%
    .banner-img
      width 100%
    .banner-info
      display flex
      position absolute
      left 0
      right 0
      bottom 0
      line-height .6rem
      color #fff
      padding .04rem .1rem
      .banner-title
        flex 1
        font-size .20rem
      .banner-number
        padding: 0rem .3rem
        height .4rem
        margin-top .14rem
        line-height .4rem
        border-radius .15rem
        background rgba(0, 0, 0, .3)
        font-size .08rem
</style>
