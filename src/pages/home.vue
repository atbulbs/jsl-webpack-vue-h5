<template>
 <div class="home-root">
   <div class="avatar">
   </div>
   <p class="welcome">
    welcome to jsl-webpack-vue-h5
   </p>
 </div>
</template>

<script type="text/ecmascript-6">
export default {
  data () {
    return {

    }
  }
}
</script>

<style scoped lang="stylus" rel="stylesheet/stylus">
@import '~styles/mixin'
.home-root
  text-align center
  padding-top 50px
  font-size 25px
  .avatar
    with-bg(150px, 170px, '../assets/images/avatar.jpg')
    margin 0 auto
  .welcome
    margin 10px auto
</style>
