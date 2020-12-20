<template>
    <div>
        <div class="recommend-title">
            <span class="week">更多精彩攻略</span>
        </div>
        <ul>
            <li class="item" v-for="item of list" :key="item.id">
                <div class="item-img-wrapper">
                    <img class="item-img" :src="item.imgUrl" >
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
  props: {
    list: Array
  }
}
</script>

<style lang="stylus" scoped>
    @import '~styles/mixins.styl'
    .recommend-title
        margin-top .2rem
        height .6rem
        line-height .6rem
        border 1px solid #00d0d4
    .week
        margin 0 20%
        color #00d0d4
        font-weight 500
        font-size .44rem
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
