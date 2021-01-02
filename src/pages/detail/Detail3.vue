<template>
  <div>
    <detail-banneres
      :bannerImg="bannerImg"
      :bannerImgs="gallaryImgs"
    ></detail-banneres>
    <detail-header></detail-header>
    <div class="content">
      <detail-list :list="list"></detail-list>
      <detail-commentes></detail-commentes>
    </div>
  </div>
</template>
<script>
import DetailBanneres from './components/Banneres'
import DetailHeader from './components/Header'
import DetailList from './components/List'
import DetailCommentes from './components/Commentes'
import axios from 'axios'
export default {
  name: 'detail',
  components: {
    DetailBanneres,
    DetailHeader,
    DetailList,
    DetailCommentes
  },
  data () {
    return {
      bannerImg: '',
      gallaryImgs: [],
      list: [{
        title: '成人票￥199',
        children: [{
          title: '成人三馆联票·美团可选'
        }, {
          title: '成人五馆联票·美团可选'
        }]
      },
      {
        title: '学生票￥188',
        children: [{
          title: '学生三馆联票·美团可选'
        }, {
          title: '学生五馆联票·美团可选'
        }]
      },
      {
        title: '儿童票￥149',
        children: [{
          title: '儿童三馆联票·美团可选'
        }, {
          title: '儿童五馆联票·美团可选'
        }]
      }, {
        title: '特惠票￥166'
      }]
    }
  },
  methods: {
    getDetailInfo () {
      // axios.get('/api/detail.json?id=' + this.$route.params.id)
      axios.get('/api/detail.json', {
        params: {
          id: this.$route.params.id
        }
      }).then(this.handleGetDataSucc)
    },
    handleGetDataSucc (res) {
      res = res.data
      if (res.ret && res.data) {
        const data = res.data
        this.sigthName = data.sigthName
        this.bannerImg = data.bannerImg
        this.gallaryImgs = data.gallaryImgs
      }
    }
  },
  mounted () {
    this.getDetailInfo()
  }
}
</script>

<style lang="stylus" scoped>
  .content
    height 8rem
</style>
