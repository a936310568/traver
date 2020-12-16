<template>
  <div wrapper>
  <swiper :options="swiperOptions">
    <swiper-slide v-for="item of swiperList" :key="item.id">
        <!-- 冒号进行绑定 -->
        <img class="swiper-img" :src="item.imgUrl" alt="">
    </swiper-slide>
    <div class="swiper-pagination" slot="pagination"></div>
  </swiper>
  </div>
</template>

<script>
export default {
  name: 'HomeSwiper',
  data () {
    return {
      swiperOption: {
        pagination: '.swiper-pagination',
        loop: true
      },
      swiperList: [{
        id: '0001',
        imgUrl: 'https://tse1-mm.cn.bing.net/th/id/OIP.xiRbchgw9Vpv78ENDeekZwHaDt?w=340&h=175&c=7&o=5&dpr=1.25&pid=1.7'
      }, {
        id: '0002',
        imgUrl: 'https://tse2-mm.cn.bing.net/th/id/OIP.L0ihzn3t6e58DuX5j8XN_QHaCs?w=304&h=127&c=7&o=5&dpr=1.25&pid=1.7'
      }, {
        id: '0003',
        imgUrl: 'https://tse1-mm.cn.bing.net/th/id/OIP.nsB0xckB4XTgmCxnoJi4LQHaCg?w=344&h=118&c=7&o=5&dpr=1.25&pid=1.7'
      }, {
        id: '0004',
        imgUrl: 'https://tse1-mm.cn.bing.net/th/id/OIP.8WKvQcMuQ4gmLasD3MH3dQHaCg?w=333&h=118&c=7&o=5&dpr=1.25&pid=1.7'
      }, {
        id: '0005',
        imgUrl: 'https://tse1-mm.cn.bing.net/th/id/OIP.dmFNvM6IZ2yf5Wo-7KnU8QHaDI?w=332&h=147&c=7&o=5&dpr=1.25&pid=1.7'
      }]
    }
  }
}
</script>
<style>
    .wrapper {
        overflow: hidden;
        width: 100%;
        height: 0;
        padding-bottom: 25%;
    }
    .swiper-img {
        width: 100%;
        height: 3rem;
    }
</style>
