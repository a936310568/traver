<template>
  <div>
    <div class="banner" @click="handleBannerClick">
      <img class="banner-img" src="https://ss1.bdstatic.com/70cFuXSh_Q1YnxGkpoWK1HF6hhy/it/u=1801275554,897101709&fm=26&gp=0.jpg" />
      <div class="banner-info">
        <div class="banner-title">洛阳当地游 1天跟团游</div>
        <div class="banner-number">
          > {{bannerImgs.length}}
        </div>
      </div>
    </div>
    <fade-animation>
      <common-gallary :imgs="imgs" v-show="showGallary" @close="handleGallaryClose"></common-gallary>
    </fade-animation>
  </div>
</template>

<script>
import CommonGallary from 'common/gallary/Gallary'
import FadeAnimation from 'common/fade/FadeAnimation'
export default {
  name: 'DetailBanners',
  props: {
    bannerImg: String,
    bannerImgs: Array
  },
  data () {
    return {
      showGallary: false,
      imgs: ['https://ss1.bdstatic.com/70cFuXSh_Q1YnxGkpoWK1HF6hhy/it/u=1801275554,897101709&fm=26&gp=0.jpg', 'https://ss0.bdstatic.com/70cFuHSh_Q1YnxGkpoWK1HF6hhy/it/u=3910184485,3579050341&fm=26&gp=0.jpg']
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
    CommonGallary,
    FadeAnimation
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
