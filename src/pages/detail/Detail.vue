<template>
  <div>
    <detail-banner></detail-banner>
    <detail-header></detail-header>
    <div class="content">
      <detail-list :list="list"></detail-list>
      <detail-comment></detail-comment>
    </div>
  </div>
</template>
<script>
import DetailBanner from './components/Banner'
import DetailHeader from './components/Header'
import DetailList from './components/List'
import DetailComment from './components/Comment'
export default {
  name: 'detail',
  components: {
    DetailBanner,
    DetailHeader,
    DetailList,
    DetailComment
  },
  data () {
    return {
      list: [{
        title: '成人票￥99',
        children: [{
          title: '成人三馆联票·美团可选'
        }, {
          title: '成人五馆联票·美团可选'
        }]
      },
      {
        title: '学生票￥88',
        children: [{
          title: '学生三馆联票·美团可选'
        }, {
          title: '学生五馆联票·美团可选'
        }]
      },
      {
        title: '儿童票￥49',
        children: [{
          title: '儿童三馆联票·美团可选'
        }, {
          title: '儿童五馆联票·美团可选'
        }]
      }, {
        title: '特惠票￥66'
      }]
    }
  }
}
</script>

<style lang="stylus" scoped>
  .content
    height 50rem
</style>
