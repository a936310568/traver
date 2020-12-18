<template>
    <ul class="list">
        <li class="item"
            id="item"
            v-for="item of letters"
            :key="item"
            :ref="item"
            @touchstart="handleTouchStart"
            @touchmove="handleTouchMove"
            @touchend="handleTouchEnd"
            @click="handleLetterClick(item)"
            >
            {{item}}
            </li>
    </ul>
</template>

<script>
// const item = document.getElementById("item")
export default {
  name: 'CityAlphabet',
  props: {
    cities: Object
  },
  computed: {
    letters () {
      const letters = []
      for (let i in this.cities) {
        letters.push(i)
      }
      return letters
    }
  },
  data () {
    return {
      // 标识位
      touchStatus: false
    }
  },
  methods: {
    handleLetterClick (value) {
      this.$emit('change', value)
    },
    handleTouchStart () {
      this.touchStatus = true
    },
    handleTouchMove (e) {
      if (this.touchStatus) {
        const startY = this.$refs['A'][0].offsetTop
        const touchY = e.touches[0].clientY - 79
        const index = Math.floor((touchY - startY) / 19)
        if (index >= 0 && index < this.letters.length) {
          this.$emit('change', this.letters[index])
        }
      }
    },
    handleTouchEnd () {
      this.touchStatus = false
    }
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
        line-height .38rem
        text-align center
        color $bgColor
        font-size .10rem
</style>
