<template>
  <div class="comment-total">
    <div class="comment-title">
      <div class="comment-title-number">8329条网友点评</div>
      <div class="comment-title-time">时间顺序⇓</div>
    </div>
    <div class="comment-cont">
      <ul class="comment-cont-tag">
        <li class="comment-cont-tags" v-for="(item, index) of tags" :key="index">
        {{item}}
        </li>
      </ul>
      <div class="comment-cont-world">
        <div class="comment-cont-world-left">
          <div class="comment-cont-star">
            <div class="comment-cont-star-who">
              <img class="comment-cont-star-img" src="https://ss2.bdstatic.com/70cFvnSh_Q1YnxGkpoWK1HF6hhy/it/u=1073244124,868127656&fm=26&gp=0.jpg">
            </div>
            <p>云南可太好玩了，我好喜欢这里</p>
          </div>
          <div class="comment-cont-day">2019-12-18</div>
        </div>
        <div class="comment-cont-world-right">
          <div class="comment-cont-user">猪**蛋（匿名）</div>
        </div>
      </div>
      <div class="comment-cont-world">
        <div class="comment-cont-world-left">
          <div class="comment-cont-star">
            <div class="comment-cont-star-who">
              <img class="comment-cont-star-img" src="https://ss2.bdstatic.com/70cFvnSh_Q1YnxGkpoWK1HF6hhy/it/u=2744315979,3740057697&fm=26&gp=0.jpg">
            </div>
            <p>洛阳到云南，6天很尽兴哈哈哈。</p>
          </div>
          <div class="comment-cont-day">2019-12-18</div>
        </div>
        <div class="comment-cont-world-right">
          <div class="comment-cont-user">李**某（匿名）</div>
        </div>
      </div>
      <div class="comment-cont-world">
        <div class="comment-cont-world-left">
          <div class="comment-cont-star">
            <div class="comment-cont-star-who">
              <img class="comment-cont-star-img" src="https://ss0.bdstatic.com/70cFvHSh_Q1YnxGkpoWK1HF6hhy/it/u=3401732207,3726302783&fm=26&gp=0.jpg">
            </div>
            <p>风景好看，还有很多当地特色小食。</p>
          </div>
          <div class="comment-cont-day">2019-12-18</div>
        </div>
        <div class="comment-cont-world-right">
          <div class="comment-cont-user">杨*晴（匿名）</div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'DetailComments',
  data () {
    return {
      tags: ['回头客(480)', '空气清新(790)', '好玩不贵(862)', '视野开阔(423)', '朋友聚会(531)', '风景宜人(742)', '景点繁多(123)', '还会再来(734)', '神秘感(653)', '人山人海(556)']
    }
  }
}
</script>

<style lang="stylus" scoped>
  .comment-title
    overflow hidden
    padding .05rem
    line-height .5rem
    margin .2rem .1rem
    .comment-title-number
      float left
      font-size .3rem
    .comment-title-time
      float right
      font-size .24rem
  .comment-cont-tag
    width 100%
    height 1.5rem
    .comment-cont-tags
      float: left;
      font-size: .15rem;
      line-height: .30rem;
      padding: 0 .1rem;
      border .013333rem solid #f4f4f4
      background #f4f4f4
      border-radius: .5rem;
      margin: 0 10px 10px 0;
      cursor: pointer;
      color #00a1d6
  .comment-cont-world
    overflow hidden
    margin .4rem 0
    .comment-cont-world-left
      float left
      .comment-cont-star
        overflow hidden
        .comment-cont-star-who
          float left
          width .5rem
          height .5rem
          margin 0 .2rem 0 .1rem
          .comment-cont-star-img
            width 100%
            border .01rem solid #eeeeee
            border-radius .5rem
      .comment-cont-day
        padding-left .8rem
        padding-top .2rem
    .comment-cont-world-right
      float right
      margin-top 0rem
</style>
