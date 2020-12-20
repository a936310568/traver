<template>
  <div>
    <div class="search">
      <!-- 进行双向绑定 -->
      <input
        v-model="keyword"
        class="search-input"
        type="text"
        placeholder="输入城市名或拼音"
      />
    </div>
    <div class="search-content" ref="search" v-show="keyword">
      <ul>
        <li class="search-item" v-for="item of list" :key="item.id" @click="handleCityClick(innerItem.name)">
            {{item.name}}
        </li>
        <!-- 当list为空时,显示,反之不显示 -->
        <li class="search-item" v-show="!list.length">
            没有找到匹配的数据
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
import { mapMutations } from 'vuex'
import Bscroll from 'better-scroll'
export default {
  name: 'CitySearch',
  props: {
    cities: Object
  },
  data () {
    return {
      keyword: '',
      list: [],
      timer: null
    }
  },
  methods: {
    // city为点击事件带出的item.name
    handleCityClick (city) {
      // dispatch为调用actions时的方法，changeCity为在actions中定义的方法
      this.changeCity(city)
      this.$router.push('/')
    },
    ...mapMutations(['changeCity'])
  },
  watch: {
    keyword () {
      if (this.timer) {
        clearTimeout(this.timer)
      }
      if (!this.keyword) {
        this.list = []
        return
      }
      this.timer = setTimeout(() => {
        const result = []
        // 遍历cities将得到的属性和值存在i中
        for (let i in this.cities) {
          // 遍历i
          this.cities[i].forEach((value) => {
            if (value.spell.indexOf(this.keyword) > -1 ||
              value.name.indexOf(this.keyword) > -1) {
              result.push(value)
            }
          })
        }
        this.list = result
      }, 100)
    }
  },
  mounted () {
    this.scroll = new Bscroll(this.$refs.search)
  }
}
</script>

<style lang="stylus" scoped>
@import '~styles/varibles.styl';

.search {
  height: 0.72rem;
  padding: 0 0.1rem;
  background: $bgColor;
}

.search-input {
  box-sizing: border-box;
  wid: th 100%;
  height: 0.62rem;
  line-height: 0.62rem;
  text-align: center;
  border-radius: 0.12rem;
  padding: 0 0.1rem;
}

.search-content {
  z-index: 1;
  overflow: hidden;
  position: absolute;
  top: 1.58rem;
  left: 0;
  right: 0;
  bottom: 0;
  background #ccc
}
  .search-item
    line-height .62rem
    padding .2rem
    color #666
    background #fff
</style>
