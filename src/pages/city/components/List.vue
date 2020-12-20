<template>
  <div class="list" ref="wrapper">
    <div>
      <div class="area">
        <div class="title border-topbottom">当前城市</div>
        <div class="button-list">
          <div class="button-wrapper">
            <!-- 在main中创建根实例使，把store传进去了，之后store被派发到每一个子组件  -->
            <div class="button">{{this.city}}</div>
          </div>
        </div>
      </div>
      <div class="area">
        <div class="title border-topbottom">热门城市</div>
        <div class="button-list">
          <div
            class="button-wrapper"
            v-for="item of hot"
            :key="item.id"
            @click="handleCityClick(item.name)"
          >
            <div class="button">{{item.name}}</div>
          </div>
        </div>
      </div>
      <div
        class="area"
        v-for="(item, key) of cities"
        :key="key"
        :ref="key"
      >
        <div class="title border-topbottom">{{key}}</div>
        <div class="item-list">
          <div
            class="item border-bottom"
            v-for="innerItem of item"
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
// import BScroll from 'better-scroll'
import { mapState, mapMutations } from 'vuex'
export default {
  name: 'CityList',
  props: {
    cities: Object,
    hot: Array,
    letter: String
  },
  computed: {
    ...mapState(['city'])
  },
  methods: {
    // city为点击事件带出的item.name
    handleCityClick (city) {
      // dispatch为调用actions时的方法，changeCity为在actions中定义的方法
      // this.$store.dispatch('changeCity', city)
      this.changeCity(city)
      this.$router.push('/')
    },
    ...mapMutations(['changeCity'])
  },
  //   监听letter的变化
  watch: {
    letter () {
      // this.letter不为空时
      if (this.letter) {
        const element = this.$refs[this.letter][0]
        //   better-scroll内置方法，让屏幕自动滚动到某个元素上
        // this.scroll.scrollToElement(element)
        // element.scrollIntoView({ behavior: 'smooth' })
        const y = element.offsetTop
        window.scrollTo({ top: y, left: 0, behavior: 'smooth' })
      }
    }
  }
}
</script>

<style lang="stylus" scoped>
    @import '~styles/varibles.styl'
    .border-topbottom
        &:before
            border-color #ccc
        &:after
            border-color #ccc
    .title
        line-height: .44rem
        background #eeeeee
        padding-left .2rem
        color #666
        font-size .26rem
    .button-list
        overflow hidden
        padding .1rem .6rem .1rem .1rem
    .button-wrapper
        float left
        width 33.33%
    .button
        padding .1rem 0
        margin .1rem
        text-align center
        border .02rem solid #ccc
        border-radius .06rem
    .list
        overflow hidden
        // position absolute
        // top 1.57rem
        // left 0
        // right 0
        // bottom 0
        .item-list
            .item
                line-height .66rem
                color #666
                padding-left .2rem
                border-bottom .001rem solid #eee
</style>
