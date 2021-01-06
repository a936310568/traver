<template>
  <div>
    <detail-banners
      :bannerImg="bannerImg"
      :bannerImgs="gallaryImgs"
    ></detail-banners>
    <detail-header></detail-header>
    <div class="content">
      <detail-list :list="list"></detail-list>
      <detail-comments></detail-comments>
    </div>
  </div>
</template>
<script>
import DetailBanners from './components/Banners'
import DetailHeader from './components/Header'
import DetailList from './components/List'
import DetailComments from './components/Comments'
// import axios from 'axios'
import {detailJson} from '../../../static/mock/detail'
export default {
  name: 'detail',
  components: {
    DetailBanners,
    DetailHeader,
    DetailList,
    DetailComments
  },
  data () {
    return {
      bannerImg: '',
      gallaryImgs: [],
      list: [{
        title: '成人票￥899',
        children: [{
          title: '成人三馆联票·美团可选'
        }, {
          title: '成人五馆联票·美团可选'
        }]
      },
      {
        title: '学生票￥788',
        children: [{
          title: '学生三馆联票·美团可选'
        }, {
          title: '学生五馆联票·美团可选'
        }]
      },
      {
        title: '儿童票￥549',
        children: [{
          title: '儿童三馆联票·美团可选'
        }, {
          title: '儿童五馆联票·美团可选'
        }]
      }, {
        title: '特惠票￥666'
      }]
    }
  },
  methods: {
    getDetailInfo () {
      // axios.get('/api/detail.json?id=' + this.$route.params.id)
      // axios.get('/api/detail.json', {
      //   params: {
      //     id: this.$route.params.id
      //   }
      // }).then(this.handleGetDataSucc)
      this.handleGetDataSucc(detailJson)
    },
    handleGetDataSucc (res) {
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
