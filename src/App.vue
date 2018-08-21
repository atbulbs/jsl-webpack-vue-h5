<template>
  <div id="main" class="app-main">
    <transition>
      <router-view></router-view>
    </transition>
  </div>
</template>

<script>
export default {
}
</script>


<style scoped lang="stylus" rel="stylesheet/stylus">
.app-main
  width 100%
  height 100%
  font-size 14px
</style>

