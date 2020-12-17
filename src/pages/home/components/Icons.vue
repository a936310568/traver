<template>
    <div class="icons">
        <swiper>
            <swiper-slide>
                <div class="icon" v-for="item of iconList" :key="item.id">
                    <div class="icon-img">
                        <img class="icon-img-content" :src="item.imgurl">
                    </div>
                    <p class="icon-desc">{{item.desc}}</p>
                </div>
            </swiper-slide>
        </swiper>
    </div>
</template>

<script>
export default {
  name: 'HomeIcons',
  data () {
    return {
      iconList: [{
        id: '0001',
        imgurl: '//s.qunarzz.com/homenode/images/touchheader/piao.png',
        desc: '景点门票'
      }, {
        id: '0002',
        imgurl: '//s.qunarzz.com/homenode/images/touchheader/hotel.png',
        desc: '酒店'
      }, {
        id: '0003',
        imgurl: '////s.qunarzz.com/homenode/images/touchheader/flight.png',
        desc: '机票'
      }, {
        id: '0004',
        imgurl: '//s.qunarzz.com/homenode/images/touchheader/train.png',
        desc: '火车票'
      }, {
        id: '0005',
        imgurl: '//s.qunarzz.com/homenode/images/touchheader/package.png',
        desc: '度假'
      }, {
        id: '0006',
        imgurl: 'https://picbed.qunarzz.com/83af731055e121a3251690b225327b56.png',
        desc: '专车自驾'
      }, {
        id: '0007',
        imgurl: 'https://picbed.qunarzz.com/25e3b9f17a21a6e0113c57a23ffccde4.png',
        desc: '周边短游'
      }, {
        id: '0008',
        imgurl: 'https://picbed.qunarzz.com/c65b3bb7571a6bd62df669213e44b84d.png',
        desc: '一日游'
      }, {
        id: '0009',
        imgurl: 'https://picbed.qunarzz.com/01d2f57f920666364197a850dab859a8.png',
        desc: '自由行'
      }, {
        id: '0010',
        imgurl: 'https://img1.qunarzz.com/order/comp/2007/23/734c3c62d2adce02.png',
        desc: '行程设计 '
      }]
    }
  }
}
</script>

<style lang="stylus" scoped>
    @import '~styles/varibles.styl'
    .icons >>> .swiper-container
        height: 0
        padding-bottom: 50%
    .icons
        padding-top .15rem
    .icon
        position relative
        overflow hidden
        float: left
        width: 20%
        padding-bottom 25%
        height 0
    .icon-img
        box-sizing border-box
        position absolute
        top 0
        left 0
        right 0
        bottom .44rem
        padding .1rem
    .icon-desc
        position absolute
        left 0
        right 0
        bottom 0
        color $darkTextColor
        height .44rem
        line-height .44rem
        text-align center
    .icon-img-content
        display block
        margin 0 auto
        height 86%
</style>
