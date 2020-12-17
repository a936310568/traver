<template>
    <div>
        <div class="recommend-title">周末去哪儿</div>
        <ul>
            <li class="item" v-for="item of recommendList" :key="item.id">
                <div class="item-img-wrapper">
                    <img class="item-img" :src="item.imgurl" >
                </div>
                <div class="item-info">
                    <p class="item-title">{{item.title}}</p>
                    <button class="item-buttom ">点击进入详情页面</button>
                </div>
            </li>
        </ul>
    </div>
</template>

<script>
export default {
  name: 'HomeWeekend',
  data () {
    return {
      recommendList: [{
        id: '0001',
        imgurl: '//img1.qunarzz.com/sight/p0/1603/8f/8fff2332dff679ec90.water.jpg_256x160_224237e3.jpg',
        title: '水乡古镇九十九，不如南浔走一走'
      }, {
        id: '0002',
        imgurl: '//img1.qunarzz.com/sight/p0/1607/21/2142167d4b1bfa84b4.water.jpg_256x160_ea65b4f7.jpg',
        title: ' 人间清净地 | 朝圣看日出'
      }, {
        id: '0003',
        imgurl: '//img1.qunarzz.com/sight/p0/1601/1c/1cdfd6a29fd1813990.img.jpg_256x160_87ff1663.jpg',
        title: '水墨西塘让你感受古镇千年的诗情画意'
      }]
    }
  }
}
</script>

<style lang="stylus" scoped>
    @import '~styles/mixins.styl'
    .recommend-title
        margin-top .2rem
        line-height .6rem
        background #eee
        text-indent .2rem
    .item-img-wrapper
        overflow hidden
        display flex
        height 3.0rem
        border-bottom 1px solid #eee
    .item-img
        width 100%
    .item-info
        flex 1
        padding .1rem
        min-width 0
    .item-title
        line-height .54rem
        font-size .32rem
        ellipsis()
        color #bca
    .item-buttom
        border-radius .12rem
        background #fbc
        padding 0.1rem
        color #fff
</style>
