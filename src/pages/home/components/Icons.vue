<template>
    <div class="icons">
        <swiper>
            <swiper-slide>
                <div class="icon" v-for="item of list" :key="item.id">
                    <div class="icon-img">
                      <img class="icon-img-content" :src="item.imgUrl">
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
  props: {
    list: Array
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
