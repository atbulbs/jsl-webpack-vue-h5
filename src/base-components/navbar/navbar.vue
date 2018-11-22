<template>
 <div class="jsl-navbar-root">
   <div class="back"></div>
   <div class="title">{{title}}</div>
 </div>
</template>


<script type="text/ecmascript-6">
export default {
  props: {
    title: {
      type: String,
      default: '标题'
    }
  }
}
</script>


<style scoped lang="stylus" rel="stylesheet/stylus">
@import "~styles/mixin"
.jsl-navbar-root
  width 375px
  text-align center
  text-line(44px, 18px)
  position relative
  background-color #fff
  >.back
    with-bg(9px, 17px, './back-arrow.png')
    ab-l(18px)
  >.title
    color #1F2845
    letter-spacing -0.43px
    font-size 18px
    font-weight 600
</style>

