<template>
  <div>
    <div
      class="item"
      v-for="(item, index) of list"
      :key="index"
    >
      <div class="item-title">
        <span class="item-title-icon">
          <img
            class="icon-img"
            src="https://tse1-mm.cn.bing.net/th/id/OIP.KqqbEzaeLEX0H-pH3Q6kJAHaGx?w=177&h=162&c=7&o=5&dpr=2&pid=1.7"
          />
        </span>
        {{item.title}}
      </div>
      <div v-if="item.children" class="item-children">
        <!-- 使用自己标签实现递归 -->
        <detail-list :list="item.children" class="item-children-self"></detail-list>
      </div>
    </div>
  </div>
</template>

<script>
import Detail from '../Detail.vue'

export default {
  components: { Detail },
  name: 'DetailList',
  props: {
    list: Array
  }
}
</script>

<style lang="stylus" scoped>
  .item-title
    line-height .8rem
    font-size .32rem
    padding 0 .2rem
    color #ff7145
    border-bottom .01rem solid #eee
  .item-title-icon
    position relative
    left .06rem
    top .0rem
    display inline-block
    width .36rem
    height .36rem
    margin-right .1rem
    background-size .4rem 3rem
    .icon-img
      width 100%
  .item-children
    .item-children-self
      .item-title
        float left
        color #abe
        padding-left .5rem
        font-size .20rem
        line-height .6rem
</style>
