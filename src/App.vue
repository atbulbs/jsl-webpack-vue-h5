<template>
  <div id="main" class="app-main">
    <transition>
      <router-view></router-view>
    </transition>
  </div>
</template>

<script>
import Home from 'pages/home'
export default {
  name: 'App',
  components: {
    Home
  }
}
</script>


<style scoped lang="stylus" rel="stylesheet/stylus">
.app-main{
  width: 100%;
  height: 100%;
  font-size: 14px;
}
</style>

