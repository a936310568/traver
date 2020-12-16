<template>
  <div>
    <home-header></home-header>
    <home-swiper></home-swiper>
  </div>
</template>

<script>
// 导入组件
import HomeHeader from './components/Header'
import HomeSwiper from './components/Swiper'
export default {
  name: 'Home',
  components: {
    // 将组件引入
    HomeHeader,
    HomeSwiper
  }
}
</script>

<style>
</style>
