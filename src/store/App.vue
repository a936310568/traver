<template>
  <div id="app">
    <!-- 路由加载一次后将内容放在内存之中，下次再进路由时不再从钩子中拿到json数据 -->
    <keep-alive>
      <router-view/>
    </keep-alive>
  </div>
</template>

<script>
export default {
  name: 'App'
}
</script>

<style>

</style>
