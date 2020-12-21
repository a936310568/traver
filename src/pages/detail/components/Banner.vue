<template>
  <div>
    <div class="banner" @click="handleBannerClick">
      <img class="banner-img" src="https://img1.qunarzz.com/travel/d1/1809/33/dd87f86934f20ab5.jpg_r_680x382x95_8851640e.jpg">
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
    padding-bottom 40%
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
        padding-bottom 0.05rem
      .banner-number
        padding: 0rem .3rem
        height .4rem
        margin-top .14rem
        line-height .4rem
        border-radius .15rem
        background rgba(0, 0, 0, .3)
        font-size .08rem
</style>
