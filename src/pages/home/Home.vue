<template>
  <div>
    <!-- 子组件拿到data中返回的city -->
    <home-header></home-header>
    <home-swiper :list="swiperList"></home-swiper>
    <home-icons :list="iconList"></home-icons>
    <home-recommend :list="recommendList"></home-recommend>
    <home-weekend :list="weekendList"></home-weekend>
  </div>
</template>

<script>
// 导入组件
import Detail from '../detail/Detail'
import HomeHeader from './components/Header'
import HomeSwiper from './components/Swiper'
import HomeIcons from './components/Icons'
import HomeRecommend from './components/Recommend'
import HomeWeekend from './components/Weekend'
// 导入获取Ajax数据插件
import axios from 'axios'
import { mapState } from 'vuex'
export default {
  name: 'Home',
  components: {
    // 将组件引入
    HomeHeader,
    HomeSwiper,
    HomeIcons,
    HomeRecommend,
    HomeWeekend,
    [Detail.name]: Detail
  },
  data () {
    return {
      lastCity: '',
      swiperList: [],
      iconList: [],
      recommendList: [],
      weekendList: []
    }
  },
  computed: {
    ...mapState(['city'])
  },
  methods: {
    // 请求ajax数据
    getHomeInfo () {
      // 在config下的index.js中配置proxyTable
      // 将city放在ajax请求之中
      axios.get('/api/index.json?city=' + this.city)
      // axios返回的结果是一个promiss对象
        .then(this.getHomeInfoSucc)
    },
    getHomeInfoSucc (res) {
      // 拿到Ajax数据
      res = res.data
      // 如果后端正确的返回了结果并且res里面有data这个内容项
      if (res.ret && res.data) {
        const data = res.data
        this.swiperList = data.swiperList
        this.iconList = data.iconList
        this.recommendList = data.recommendList
        this.weekendList = data.weekendList
      }
    }
  },
  mounted () {
    // 当页面挂载好后执行
    this.lastCity = this.city
    this.getHomeInfo()
  },
  // acticated为keep alive执行完之后调用的生命周期钩子
  activated () {
    // 当上一次选择的城市和当前切换的城市不一致时，重新发一次Ajax请求
    if (this.lastCity !== this.city) {
      this.lastCity = this.city
      this.getHomeInfo()
    }
  }
}
</script>

<style lang="stylus" scoped>
</style>
