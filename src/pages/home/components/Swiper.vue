<template>
  <div wrapper>
  <swiper>
    <swiper-slide v-for="item of list" :key="item.id">
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
  props: {
    list: Array
  },
  data () {
    return {
      swiperOption: {
        pagination: '.swiper-pagination',
        loop: true
      }
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
