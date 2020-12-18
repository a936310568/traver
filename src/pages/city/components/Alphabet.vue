<template>
    <ul class="list">
        <li class="item" v-for="(item, key) of cities" :key="key">{{key}}</li>
    </ul>
</template>

<script>
export default {
  name: 'CityAlphabet',
  props: {
    cities: Object
  }
}
</script>

<style lang="stylus" scoped>
  @import '~styles/varibles.styl'
  .list
    display flex
    flex-direction column
    justify-content center
    position fixed
    right 0
    top 4.58rem
    width .4rem
    bottom 0
    .item
        line-height .35rem
        text-align center
        color $bgColor
        font-size .10rem
</style>
