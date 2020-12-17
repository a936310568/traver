<template>
    <div class="list" ref="warpper">
        <div>
            <div class="area">
                <div class="title border-topbottom">当前城市</div>
                <div class="button-list">
                <div class="button-wrapper">
                    <div class="button">北京</div>
                </div>
            </div>
            </div>
            <div class="area">
                <div class="title border-topbottom">热门城市</div>
                <div class="button-list">
                <div class="button-wrapper">
                    <div class="button">北京</div>
                </div>
                <div class="button-wrapper">
                    <div class="button">北京</div>
                </div>
                <div class="button-wrapper">
                    <div class="button">北京</div>
                </div>
                <div class="button-wrapper">
                    <div class="button">北京</div>
                </div>
                <div class="button-wrapper">
                    <div class="button">北京</div>
                </div>
                <div class="button-wrapper">
                    <div class="button">北京</div>
                </div>
                <div class="button-wrapper">
                    <div class="button">北京</div>
                </div>
            </div>
        </div>
            <div class="area">
                <div class="title border-topbottom">A</div>
                    <div class="item-list">
                        <div class="item">阿拉尔</div>
                        <div class="item">阿拉尔</div>
                        <div class="item">阿拉尔</div>
                        <div class="item">阿拉尔</div>
                        <div class="item">阿拉尔</div>
                        <div class="item">阿拉尔</div>
                        <div class="item">阿拉尔</div>
                        <div class="item">阿拉尔</div>
                        <div class="item">阿拉尔</div>
                    </div>
            </div>
            <div class="area">
                <div class="title border-topbottom">B</div>
                <div class="item-list">
                    <div class="item">布达拉</div>
                    <div class="item">布达拉</div>
                    <div class="item">布达拉</div>
                    <div class="item">布达拉</div>
                    <div class="item">布达拉</div>
                    <div class="item">布达拉</div>
                    <div class="item">布达拉</div>
                    <div class="item">布达拉</div>
                    <div class="item">布达拉</div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import Bscroll from 'better-scroll'
export default {
  name: 'CityList',
  mounted () {
    this.scroll = new Bscroll(this.$refs.wrapper)
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
        // overflow hidden
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
