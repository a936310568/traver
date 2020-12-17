<template>
  <div class="header">
    <div class="header-left">
      <span class="iconfont back-icon">&#xe624;</span>
    </div>
    <div class="header-input">
      输入城市或游玩主题
    </div>
    <div class="header-right">
      城市
      <span class="arrow-right">></span>
    </div>
  </div>
</template>

<script>
export default {
  name: 'HomeHeader'
}
</script>

<style lang="stylus" scoped>
    /* @import url('../../../assets/styles/varibles.styl'); */
    .header {
      display: flex;
      background: #00bcd4;
      height: .86rem;
      line-height: .86rem;
      color: #fff;
    }
    .header-left {
      width: .64rem;
      float: left;
    }
    .back-icon {
      margin-left: .1rem;
    }
    .header-input {
      flex: 1;
      height: .64rem;
      line-height: .64rem;
      margin-top: .12rem;
      margin-left: .12rem;
      background: #fff;
      border-radius: .1rem;
      font-size: .14rem;
      color: #ccc;
      padding-left: .2rem;
    }
    .header-right {
      width: 1.24rem;
      float: right;
      text-align: center;
    }
    .arrow-right {
      font-size: .2rem;
      color: #ccc;
    }
</style>
