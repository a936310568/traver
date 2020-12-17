<template>
    <div>
        <div class="recommend-title">热销推荐</div>
        <ul>
            <li class="item" v-for="item of recommendList" :key="item.id">
                <div class="item-img-wrapper">
                    <img class="item-img" :src="item.imgurl" >
                </div>
                <div class="item-info">
                    <p class="item-title">{{item.title}}</p>
                    <p class="item-desc">{{item.desc}}</p>
                    <button class="item-buttom ">查看详情</button>
                </div>
            </li>
        </ul>
    </div>
</template>

<script>
export default {
  name: 'HomeRecommend',
  data () {
    return {
      recommendList: [{
        id: '0001',
        imgurl: 'https://tse4-mm.cn.bing.net/th/id/OIP.alFdiiCmSxk4IMWF_vH8VgHaEK?w=260&h=180&c=7&o=5&dpr=1.25&pid=1.7',
        title: '洛阳-白马寺 1天跟团游',
        desc: '主城区接含耳麦👍洛阳龙门石窟+白马寺一日游▶纯玩0购物▶门票全含▶天天发团'
      }, {
        id: '0002',
        imgurl: 'https://tse4-mm.cn.bing.net/th/id/OIP.VOHLETdCrnHKRb53tL_lDgHaEY?w=324&h=187&c=7&o=5&dpr=1.25&pid=1.7',
        title: ' 洛阳-云南 6天跟团游',
        desc: '云南暖冬温泉游<9重赠送+下单立减🔥自费全含+0差评>丽江直飞+旅拍+表演'
      }, {
        id: '0003',
        imgurl: 'https://tse1-mm.cn.bing.net/th/id/OIP.dI94-rAedblNdCVvxDkGLQHaFB?w=264&h=180&c=7&o=5&dpr=1.25&pid=1.7',
        title: '洛阳当地游 1天跟团游',
        desc: '纯玩💎洛阳龙门石窟+少林寺-功夫表演1日游主城区免费接+赠耳麦'
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
    .item
        overflow hidden
        display flex
        height 1.9rem
        border-bottom 1px solid #eee
    .item-img
        width 1.7rem
        height 1.7rem
        padding .1rem
    .item-info
        flex 1
        padding .1rem
        min-width 0
    .item-title
        line-height .54rem
        font-size .32rem
        ellipsis()
    .item-desc
        line-height .4rem
        font-size .22rem
        color #abc
    .item-buttom
        border-radius .06rem
        background #abd
        padding 0 0.1rem
        color #fff
</style>
